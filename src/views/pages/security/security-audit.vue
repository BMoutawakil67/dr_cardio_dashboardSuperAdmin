<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="security-audit" />

      <!-- Alertes de sécurité -->
      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger">
            <strong><i class="fa fa-exclamation-triangle"></i> Alerte Critique</strong><br>
            47 tentatives de connexion suspectes détectées depuis l'IP 102.xxx.xxx.xxx<br>
            <small>Bloqué automatiquement - Il y a 2 heures</small>
            <button class="btn btn-sm btn-light float-end">Voir détails</button>
          </div>
          <div class="alert alert-warning">
            <strong><i class="fa fa-warning"></i> Alerte Modérée</strong><br>
            Pic de trafic inhabituel détecté - +450% vs moyenne<br>
            <small>Région: Abidjan - Il y a 4 heures</small>
            <button class="btn btn-sm btn-light float-end">Analyser</button>
          </div>
        </div>
      </div>

      <!-- Logs système -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Logs Système (Temps réel)</h4>
              <button class="btn btn-sm btn-primary" @click="refreshLogs">
                <i class="fa fa-sync"></i> Actualiser
              </button>
            </div>
            <div class="card-body">
              <div class="staff-search-table mb-3">
                <div class="row">
                  <div class="col-md-3">
                    <vue-select :options="logTypes" placeholder="Type" />
                  </div>
                  <div class="col-md-3">
                    <vue-select :options="logLevels" placeholder="Niveau" />
                  </div>
                  <div class="col-md-3">
                    <input type="text" class="form-control" placeholder="Rechercher..." v-model="searchQuery" />
                  </div>
                  <div class="col-md-3">
                    <button class="btn btn-primary">Filtrer</button>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-hover table-sm">
                  <thead>
                    <tr>
                      <th>Heure</th>
                      <th>Type</th>
                      <th>Utilisateur</th>
                      <th>Action</th>
                      <th>Résultat</th>
                      <th>IP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="log in logs" :key="log.id">
                      <td>{{ log.time }}</td>
                      <td><span :class="getLogTypeClass(log.type)">{{ log.type }}</span></td>
                      <td>{{ log.user }}</td>
                      <td>{{ log.action }}</td>
                      <td>
                        <i :class="log.success ? 'fa fa-check text-success' : 'fa fa-times text-danger'"></i>
                        {{ log.result }}
                      </td>
                      <td><small>{{ log.ip }}</small></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Gestion des accès admin -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Administrateurs</h4>
              <button class="btn btn-sm btn-primary" @click="openAddModal">
                <i class="fa fa-plus"></i> Ajouter
              </button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>Statut</th>
                      <th>Admin</th>
                      <th>Rôle</th>
                      <th>Dernière connexion</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="admin in admins" :key="admin.id">
                      <td>
                        <span :class="admin.online ? 'badge bg-success' : 'badge bg-secondary'">
                          {{ admin.online ? 'En ligne' : 'Hors ligne' }}
                        </span>
                      </td>
                      <td>
                        <strong>{{ admin.name }}</strong><br>
                        <small class="text-muted">{{ admin.email }}</small>
                      </td>
                      <td>{{ admin.role }}</td>
                      <td>{{ admin.lastLogin }}</td>
                      <td>
                        <button class="btn btn-sm btn-info me-1" @click="viewAdmin(admin.id)"><i class="fa fa-eye"></i></button>
                        <button class="btn btn-sm btn-warning me-1" @click="openEditModal(admin)"><i class="fa fa-edit"></i></button>
                        <button class="btn btn-sm btn-danger" @click="deleteAdmin(admin.id)"><i class="fa fa-trash"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Backup -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Sauvegardes & Backup</h4>
            </div>
            <div class="card-body">
              <div class="alert alert-success">
                <strong>Dernière sauvegarde complète</strong><br>
                21/11/2025 à 03:00 (Il y a 11h) - Taille: 247 GB - Durée: 47 min<br>
                Statut: <span class="badge bg-success">Réussie</span>
              </div>
              <p><strong>Prochaine sauvegarde:</strong> 22/11/2025 à 03:00 (dans 13h)</p>
              <button class="btn btn-primary me-2">Lancer backup manuel</button>
              <button class="btn btn-secondary me-2">Restaurer</button>
              <button class="btn btn-info">Configurer</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Ajouter/Éditer Admin -->
      <div class="modal fade" id="adminModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditMode ? 'Éditer l\'administrateur' : 'Nouvel administrateur' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Nom complet <span class="login-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Email <span class="login-danger">*</span></label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="formData.email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Rôle <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Super Admin', 'Admin Tech', 'Admin Finance', 'Support', 'Modérateur']"
                        v-model="formData.role"
                        placeholder="Sélectionner rôle"
                      />
                    </div>
                  </div>
                  <div class="col-md-6" v-if="!isEditMode">
                    <div class="input-block local-forms">
                      <label>Mot de passe <span class="login-danger">*</span></label>
                      <input
                        type="password"
                        class="form-control"
                        v-model="formData.password"
                        :required="!isEditMode"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-block local-forms">
                      <label>Permissions</label>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.users" id="perm1">
                            <label class="form-check-label" for="perm1">Gestion des utilisateurs</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.finance" id="perm2">
                            <label class="form-check-label" for="perm2">Accès finances</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.content" id="perm3">
                            <label class="form-check-label" for="perm3">Gestion du contenu</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.security" id="perm4">
                            <label class="form-check-label" for="perm4">Sécurité & Audit</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.reports" id="perm5">
                            <label class="form-check-label" for="perm5">Rapports & Analytics</label>
                          </div>
                          <div class="form-check">
                            <input class="form-check-input" type="checkbox" v-model="formData.permissions.settings" id="perm6">
                            <label class="form-check-label" for="perm6">Paramètres système</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-primary" @click="submitForm">
                {{ isEditMode ? 'Mettre à jour' : 'Créer' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Confirmation Suppression -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Confirmer la suppression</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Êtes-vous sûr de vouloir supprimer cet administrateur ?</p>
              <p class="text-danger"><small>Cette action est irréversible et révoquera tous les accès.</small></p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-danger" @click="confirmDelete">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecurityAudit",
  data() {
    return {
      title: "Sécurité & Audit",
      text: "Logs et gestion des accès",
      searchQuery: "",
      isEditMode: false,
      deleteId: null,
      formData: {
        id: null,
        name: "",
        email: "",
        role: "",
        password: "",
        lastLogin: "",
        online: false,
        permissions: {
          users: false,
          finance: false,
          content: false,
          security: false,
          reports: false,
          settings: false
        }
      },
      logTypes: ["Tous", "Accès", "Paiement", "Erreur", "Alerte"],
      logLevels: ["Tous", "Info", "Warning", "Error", "Critical"],
      logs: [
        { id: 1, time: "14:32", type: "Access", user: "Jean#12450", action: "Login success", result: "Succès", success: true, ip: "41.xxx.xxx.xxx" },
        { id: 2, time: "14:31", type: "Payment", user: "Marie#12449", action: "Payment 5000F", result: "Succès", success: true, ip: "41.xxx.xxx.xxx" },
        { id: 3, time: "14:29", type: "Error", user: "System", action: "OCR timeout", result: "Échec", success: false, ip: "Server" }
      ],
      admins: [
        {
          id: 1,
          name: "Super Admin",
          email: "admin@dc.com",
          role: "Super Admin",
          lastLogin: "Maintenant",
          online: true,
          permissions: { users: true, finance: true, content: true, security: true, reports: true, settings: true }
        },
        {
          id: 2,
          name: "Kofi Mensah",
          email: "tech@dc.com",
          role: "Admin Tech",
          lastLogin: "Il y a 1h",
          online: true,
          permissions: { users: true, finance: false, content: true, security: true, reports: true, settings: false }
        },
        {
          id: 3,
          name: "Amina Diallo",
          email: "support@dc.com",
          role: "Support",
          lastLogin: "Il y a 2j",
          online: false,
          permissions: { users: true, finance: false, content: true, security: false, reports: false, settings: false }
        }
      ]
    };
  },
  methods: {
    getLogTypeClass(type) {
      const classes = {
        'Access': 'badge bg-info',
        'Payment': 'badge bg-success',
        'Error': 'badge bg-danger',
        'Alert': 'badge bg-warning'
      };
      return classes[type] || 'badge bg-secondary';
    },
    refreshLogs() {
      this.$toast.info('Actualisation des logs...');
    },
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      const modal = new bootstrap.Modal(document.getElementById('adminModal'));
      modal.show();
    },
    openEditModal(admin) {
      this.isEditMode = true;
      this.formData = { ...admin, password: "" };
      const modal = new bootstrap.Modal(document.getElementById('adminModal'));
      modal.show();
    },
    resetForm() {
      this.formData = {
        id: null,
        name: "",
        email: "",
        role: "",
        password: "",
        lastLogin: "",
        online: false,
        permissions: {
          users: false,
          finance: false,
          content: false,
          security: false,
          reports: false,
          settings: false
        }
      };
    },
    submitForm() {
      if (!this.formData.name || !this.formData.email || !this.formData.role) {
        this.$toast.error('Veuillez remplir tous les champs obligatoires');
        return;
      }

      if (!this.isEditMode && !this.formData.password) {
        this.$toast.error('Le mot de passe est obligatoire pour un nouvel administrateur');
        return;
      }

      if (this.isEditMode) {
        const index = this.admins.findIndex(a => a.id === this.formData.id);
        if (index !== -1) {
          this.admins[index] = { ...this.formData };
          this.$toast.success('Administrateur mis à jour avec succès');
        }
      } else {
        const newAdmin = {
          ...this.formData,
          id: this.admins.length + 1,
          lastLogin: "Jamais",
          online: false
        };
        delete newAdmin.password; // Ne pas stocker le mot de passe en clair
        this.admins.push(newAdmin);
        this.$toast.success('Administrateur créé avec succès');
      }

      const modal = bootstrap.Modal.getInstance(document.getElementById('adminModal'));
      modal.hide();
      this.resetForm();
    },
    deleteAdmin(id) {
      this.deleteId = id;
      const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
      modal.show();
    },
    confirmDelete() {
      this.admins = this.admins.filter(a => a.id !== this.deleteId);
      this.$toast.success('Administrateur supprimé avec succès');

      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      modal.hide();
      this.deleteId = null;
    },
    viewAdmin(id) {
      const admin = this.admins.find(a => a.id === id);
      if (admin) {
        this.$toast.info('Affichage des détails de ' + admin.name);
      }
    }
  }
};
</script>
