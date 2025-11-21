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
              <button class="btn btn-sm btn-primary">
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
                        <button class="btn btn-sm btn-info me-1"><i class="fa fa-eye"></i></button>
                        <button class="btn btn-sm btn-warning"><i class="fa fa-edit"></i></button>
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
      logTypes: ["Tous", "Accès", "Paiement", "Erreur", "Alerte"],
      logLevels: ["Tous", "Info", "Warning", "Error", "Critical"],
      logs: [
        { id: 1, time: "14:32", type: "Access", user: "Jean#12450", action: "Login success", result: "Succès", success: true, ip: "41.xxx.xxx.xxx" },
        { id: 2, time: "14:31", type: "Payment", user: "Marie#12449", action: "Payment 5000F", result: "Succès", success: true, ip: "41.xxx.xxx.xxx" },
        { id: 3, time: "14:29", type: "Error", user: "System", action: "OCR timeout", result: "Échec", success: false, ip: "Server" }
      ],
      admins: [
        { id: 1, name: "Super Admin", email: "admin@dc.com", role: "Super Admin", lastLogin: "Maintenant", online: true },
        { id: 2, name: "Kofi Mensah", email: "tech@dc.com", role: "Admin Tech", lastLogin: "Il y a 1h", online: true },
        { id: 3, name: "Amina Diallo", email: "support@dc.com", role: "Support", lastLogin: "Il y a 2j", online: false }
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
    }
  }
};
</script>
