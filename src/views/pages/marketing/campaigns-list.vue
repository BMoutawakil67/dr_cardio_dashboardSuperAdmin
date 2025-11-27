<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="campaigns-list" />

      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Campagnes de Communication</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Rechercher campagne..."
                              v-model="searchQuery"
                            />
                            <a class="btn"
                              ><img src="@/assets/img/icons/search-normal.svg" alt=""
                            /></a>
                          </form>
                        </div>
                        <div class="add-group">
                          <button
                            @click="openAddModal"
                            class="btn btn-primary add-pluss ms-2"
                          >
                            <img src="@/assets/img/icons/plus.svg" alt="" /> Nouvelle Campagne
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-01.svg" alt=""
                    /></a>
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-02.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>

              <!-- Statistiques rapides -->
              <div class="row mb-4">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/calendar.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Campagnes Totales</h4>
                      <h2>42</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>12%</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/profile-add.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>En cours</h4>
                      <h2>8</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>19%</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/empty-wallet.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Taux d'ouverture moy</h4>
                      <h2>68%</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>5%</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/scissor.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Taux de conversion</h4>
                      <h2>24%</h2>
                      <p><span class="negative-view"><i class="feather-arrow-down-right me-1"></i>3%</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Filtres -->
              <div class="staff-search-table">
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Statut</label>
                      <vue-select :options="statuses" placeholder="Tous" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Type</label>
                      <vue-select :options="types" placeholder="Tous" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Audience</label>
                      <vue-select :options="audiences" placeholder="Tous" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="doctor-submit">
                      <button type="submit" class="btn btn-primary submit-list-form me-2">Filtrer</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Table -->
              <div class="table-responsive">
                <table class="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Nom de la campagne</th>
                      <th>Type</th>
                      <th>Audience</th>
                      <th>Envoyés</th>
                      <th>Ouverts</th>
                      <th>Clics</th>
                      <th>Statut</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="campaign in filteredCampaigns" :key="campaign.id">
                      <td class="profile-image">
                        <a href="javascript:;">{{ campaign.name }}</a>
                      </td>
                      <td>
                        <span class="badge bg-info">{{ campaign.type }}</span>
                      </td>
                      <td>{{ campaign.audience }}</td>
                      <td>{{ campaign.sent }}</td>
                      <td>
                        <span class="text-success">{{ campaign.opened }}</span>
                        <small class="text-muted">({{ campaign.openRate }}%)</small>
                      </td>
                      <td>
                        <span class="text-primary">{{ campaign.clicks }}</span>
                        <small class="text-muted">({{ campaign.clickRate }}%)</small>
                      </td>
                      <td>
                        <span :class="getStatusClass(campaign.status)">
                          {{ campaign.status }}
                        </span>
                      </td>
                      <td>{{ campaign.date }}</td>
                      <td class="text-end">
                        <div class="dropdown dropdown-action">
                          <a
                            href="javascript:void(0);"
                            class="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="fa fa-ellipsis-v"></i
                          ></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a class="dropdown-item" href="javascript:;" @click="viewCampaign(campaign.id)">
                              <i class="fa-solid fa-eye m-r-5"></i> Voir détails
                            </a>
                            <a class="dropdown-item" href="javascript:;" @click="openEditModal(campaign)">
                              <i class="fa-solid fa-pen-to-square m-r-5"></i> Modifier
                            </a>
                            <a class="dropdown-item" href="javascript:;" @click="duplicateCampaign(campaign.id)">
                              <i class="fa-solid fa-copy m-r-5"></i> Dupliquer
                            </a>
                            <a class="dropdown-item" href="javascript:;" @click="deleteCampaign(campaign.id)">
                              <i class="fa fa-trash-alt m-r-5"></i> Supprimer
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Performance globale -->
              <div class="row mt-4">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Performance des Campagnes (6 derniers mois)</h4>
                    </div>
                    <div class="card-body">
                      <apexchart
                        type="line"
                        height="300"
                        :options="performanceChart.chart"
                        :series="performanceChart.series"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Ajouter/Éditer Campagne -->
      <div class="modal fade" id="campaignModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditMode ? 'Éditer la campagne' : 'Nouvelle campagne' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Nom de la campagne <span class="login-danger">*</span></label>
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
                      <label>Type <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Email', 'Push', 'SMS', 'In-App']"
                        v-model="formData.type"
                        placeholder="Sélectionner type"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Audience cible <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Tous patients', 'Premium', 'Standard', 'Cardiologues']"
                        v-model="formData.audience"
                        placeholder="Sélectionner audience"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Statut <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Brouillon', 'Programmé', 'En cours', 'Envoyé']"
                        v-model="formData.status"
                        placeholder="Sélectionner statut"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-block local-forms">
                      <label>Objet / Titre <span class="login-danger">*</span></label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.subject"
                        placeholder="Objet du message"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-block local-forms">
                      <label>Message <span class="login-danger">*</span></label>
                      <textarea
                        class="form-control"
                        v-model="formData.message"
                        rows="4"
                        placeholder="Contenu du message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-md-6" v-if="formData.status === 'Programmé'">
                    <div class="input-block local-forms">
                      <label>Date d'envoi</label>
                      <input
                        type="date"
                        class="form-control"
                        v-model="formData.date"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-primary" @click="submitForm">
                {{ isEditMode ? 'Mettre à jour' : 'Enregistrer' }}
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
              <p>Êtes-vous sûr de vouloir supprimer cette campagne ?</p>
              <p class="text-danger"><small>Cette action est irréversible.</small></p>
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
  name: "CampaignsList",
  data() {
    return {
      title: "Communication & Marketing",
      text: "Liste des campagnes",
      searchQuery: "",
      isEditMode: false,
      deleteId: null,
      formData: {
        id: null,
        name: "",
        type: "",
        audience: "",
        subject: "",
        message: "",
        status: "Brouillon",
        date: "",
        sent: 0,
        opened: 0,
        openRate: 0,
        clicks: 0,
        clickRate: 0
      },
      statuses: ["Tous", "Envoyé", "Programmé", "Brouillon", "En cours"],
      types: ["Tous", "Email", "Push", "SMS", "In-App"],
      audiences: ["Tous", "Patients", "Cardiologues", "Premium", "Standard"],
      campaigns: [
        {
          id: 1,
          name: "Rappel Mesure Tension",
          type: "Push",
          audience: "Tous patients",
          sent: 12480,
          opened: 8954,
          openRate: 71.7,
          clicks: 4521,
          clickRate: 36.2,
          status: "Envoyé",
          date: "20/11/2025"
        },
        {
          id: 2,
          name: "Nouvelle Fonctionnalité IA",
          type: "Email",
          audience: "Premium",
          sent: 3204,
          opened: 2245,
          openRate: 70.1,
          clicks: 892,
          clickRate: 27.8,
          status: "Envoyé",
          date: "18/11/2025"
        },
        {
          id: 3,
          name: "Promotion Abonnement Famille",
          type: "SMS",
          audience: "Standard",
          sent: 8715,
          opened: 5245,
          openRate: 60.2,
          clicks: 1524,
          clickRate: 17.5,
          status: "Envoyé",
          date: "15/11/2025"
        },
        {
          id: 4,
          name: "Nouveaux Cardiologues Disponibles",
          type: "In-App",
          audience: "Tous patients",
          sent: 0,
          opened: 0,
          openRate: 0,
          clicks: 0,
          clickRate: 0,
          status: "Programmé",
          date: "25/11/2025"
        },
        {
          id: 5,
          name: "Formation Webinaire",
          type: "Email",
          audience: "Cardiologues",
          sent: 847,
          opened: 624,
          openRate: 73.7,
          clicks: 412,
          clickRate: 48.6,
          status: "Envoyé",
          date: "10/11/2025"
        }
      ],
      performanceChart: {
        series: [
          {
            name: 'Taux d\'ouverture',
            data: [62, 65, 68, 70, 67, 71]
          },
          {
            name: 'Taux de clic',
            data: [22, 25, 28, 30, 27, 32]
          }
        ],
        chart: {
          type: 'line',
          height: 300,
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        colors: ['#2E37A4', '#28a745'],
        xaxis: {
          categories: ['Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov']
        },
        yaxis: {
          labels: {
            formatter: function(value) {
              return value + '%';
            }
          }
        },
        legend: {
          position: 'top'
        }
      }
    };
  },
  computed: {
    filteredCampaigns() {
      if (!this.searchQuery) {
        return this.campaigns;
      }
      return this.campaigns.filter(campaign =>
        campaign.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        campaign.type.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    getStatusClass(status) {
      const classes = {
        'Envoyé': 'custom-badge status-green',
        'Programmé': 'custom-badge status-blue',
        'Brouillon': 'custom-badge status-orange',
        'En cours': 'custom-badge status-purple'
      };
      return classes[status] || 'custom-badge';
    },
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      const modal = new bootstrap.Modal(document.getElementById('campaignModal'));
      modal.show();
    },
    openEditModal(campaign) {
      this.isEditMode = true;
      this.formData = { ...campaign };
      const modal = new bootstrap.Modal(document.getElementById('campaignModal'));
      modal.show();
    },
    resetForm() {
      this.formData = {
        id: null,
        name: "",
        type: "",
        audience: "",
        subject: "",
        message: "",
        status: "Brouillon",
        date: "",
        sent: 0,
        opened: 0,
        openRate: 0,
        clicks: 0,
        clickRate: 0
      };
    },
    submitForm() {
      if (!this.formData.name || !this.formData.type || !this.formData.audience) {
        this.$toast.error('Veuillez remplir tous les champs obligatoires');
        return;
      }

      if (this.isEditMode) {
        const index = this.campaigns.findIndex(c => c.id === this.formData.id);
        if (index !== -1) {
          this.campaigns[index] = { ...this.formData };
          this.$toast.success('Campagne mise à jour avec succès');
        }
      } else {
        const newCampaign = {
          ...this.formData,
          id: this.campaigns.length + 1,
          date: new Date().toLocaleDateString('fr-FR')
        };
        this.campaigns.push(newCampaign);
        this.$toast.success('Campagne créée avec succès');
      }

      const modal = bootstrap.Modal.getInstance(document.getElementById('campaignModal'));
      modal.hide();
      this.resetForm();
    },
    deleteCampaign(id) {
      this.deleteId = id;
      const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
      modal.show();
    },
    confirmDelete() {
      this.campaigns = this.campaigns.filter(c => c.id !== this.deleteId);
      this.$toast.success('Campagne supprimée avec succès');

      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      modal.hide();
      this.deleteId = null;
    },
    viewCampaign(id) {
      console.log("Voir campagne ID:", id);
      this.$toast.info("Affichage des détails de la campagne");
    },
    duplicateCampaign(id) {
      const campaign = this.campaigns.find(c => c.id === id);
      if (campaign) {
        const duplicated = {
          ...campaign,
          id: this.campaigns.length + 1,
          name: campaign.name + " (Copie)",
          status: "Brouillon",
          sent: 0,
          opened: 0,
          openRate: 0,
          clicks: 0,
          clickRate: 0
        };
        this.campaigns.push(duplicated);
        this.$toast.success("Campagne dupliquée avec succès");
      }
    }
  }
};
</script>
