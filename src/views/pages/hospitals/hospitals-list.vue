<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="hospitals-list" />

      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Liste des Hôpitaux</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Rechercher hôpital..."
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
                            <img src="@/assets/img/icons/plus.svg" alt="" />
                          </button>
                          <a
                            href="javascript:;"
                            class="btn btn-primary doctor-refresh ms-2"
                            @click="refreshData"
                          >
                            <img src="@/assets/img/icons/re-fresh.svg" alt="" />
                          </a>
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
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-03.svg" alt=""
                    /></a>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/pdf-icon-04.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>

              <!-- Statistiques rapides -->
              <div class="row mb-4">
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/empty-wallet.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Total Hôpitaux</h4>
                      <h2>{{ hospitals.length }}</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>5%</span> vs mois dernier</p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/profile-add.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Actifs</h4>
                      <h2>{{ hospitals.filter(h => h.status === 'Actif').length }}</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>86%</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/scissor.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>En négociation</h4>
                      <h2>{{ hospitals.filter(h => h.status === 'En négociation').length }}</h2>
                      <p><span class="negative-view"><i class="feather-arrow-down-right me-1"></i>11%</span></p>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="dash-widget">
                    <div class="dash-boxs comman-flex-center">
                      <img src="@/assets/img/icons/calendar.svg" alt="" />
                    </div>
                    <div class="dash-content dash-count">
                      <h4>Revenus Total</h4>
                      <h2>2.8M FCFA</h2>
                      <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>18%</span></p>
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
                      <label>Pays</label>
                      <vue-select :options="countries" placeholder="Tous les pays" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Trier par</label>
                      <vue-select :options="sortOptions" placeholder="Date d'inscription" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="doctor-submit">
                      <button type="submit" class="btn btn-primary submit-list-form me-2">Rechercher</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Table -->
              <div class="table-responsive">
                <table class="table border-0 custom-table comman-table datatable mb-0">
                  <thead>
                    <tr>
                      <th>Statut</th>
                      <th>Nom</th>
                      <th>Pays/Ville</th>
                      <th>Responsable</th>
                      <th>Cardiologues</th>
                      <th>Patients</th>
                      <th>Revenus/mois</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="hospital in filteredHospitals" :key="hospital.id">
                      <td>
                        <span :class="getStatusClass(hospital.status)">
                          {{ hospital.status }}
                        </span>
                      </td>
                      <td class="profile-image">
                        <a href="javascript:;">{{ hospital.name }}</a>
                      </td>
                      <td>{{ hospital.country }} / {{ hospital.city }}</td>
                      <td>{{ hospital.responsable }}</td>
                      <td>{{ hospital.cardiologists }}</td>
                      <td>{{ hospital.patients }}</td>
                      <td>{{ hospital.revenue }} FCFA</td>
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
                            <a class="dropdown-item" href="javascript:;" @click="viewHospital(hospital)">
                              <i class="fa-solid fa-eye m-r-5"></i> Voir
                            </a>
                            <a class="dropdown-item" href="javascript:;" @click="openEditModal(hospital)">
                              <i class="fa-solid fa-pen-to-square m-r-5"></i> Éditer
                            </a>
                            <a class="dropdown-item" href="javascript:;" @click="deleteHospital(hospital.id)">
                              <i class="fa fa-trash-alt m-r-5"></i> Supprimer
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Top 5 Établissements -->
              <div class="row mt-4">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h4 class="card-title">Top 5 Établissements par Revenus</h4>
                    </div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Rang</th>
                              <th>Hôpital</th>
                              <th>Revenus Mensuels</th>
                              <th>Tendance</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(top, index) in topHospitals" :key="index">
                              <td>{{ index + 1 }}</td>
                              <td>{{ top.name }}</td>
                              <td>{{ top.revenue }} FCFA</td>
                              <td>
                                <span class="passive-view">
                                  <i class="feather-arrow-up-right me-1"></i>{{ top.trend }}%
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Ajouter/Éditer Hôpital -->
    <div class="modal fade" id="hospitalModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isEditMode ? 'Éditer l\'hôpital' : 'Ajouter un hôpital' }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-12">
                  <h6 class="mb-3">Informations de l'Hôpital</h6>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Nom de l'établissement <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" v-model="formData.name" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Type d'établissement <span class="login-danger">*</span></label>
                    <vue-select :options="types" v-model="formData.type" placeholder="Sélectionner" />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block local-forms">
                    <label>Pays <span class="login-danger">*</span></label>
                    <vue-select :options="countries" v-model="formData.country" placeholder="Sélectionner" />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block local-forms">
                    <label>Ville <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" v-model="formData.city" required />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="input-block local-forms">
                    <label>Adresse</label>
                    <input class="form-control" type="text" v-model="formData.address" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Email <span class="login-danger">*</span></label>
                    <input class="form-control" type="email" v-model="formData.email" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Téléphone <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" v-model="formData.phone" required />
                  </div>
                </div>

                <div class="col-12">
                  <h6 class="mb-3 mt-3">Responsable</h6>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Nom du responsable <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" v-model="formData.responsable" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Téléphone du responsable</label>
                    <input class="form-control" type="text" v-model="formData.responsablePhone" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Statut <span class="login-danger">*</span></label>
                    <vue-select :options="statuses" v-model="formData.status" placeholder="Sélectionner" />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="input-block local-forms">
                    <label>Commission plateforme (%)</label>
                    <input class="form-control" type="number" min="0" max="100" v-model="formData.commission" />
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
            <p>Êtes-vous sûr de vouloir supprimer cet hôpital ?</p>
            <p class="text-danger"><strong>Cette action est irréversible.</strong></p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospitalsList",
  data() {
    return {
      title: "Hôpitaux",
      text: "Liste des hôpitaux partenaires",
      searchQuery: "",
      isEditMode: false,
      deleteId: null,
      statuses: ["Tous", "Actif", "En négociation", "Inactif"],
      types: ["Hôpital Public", "CHU", "Clinique Privée", "Centre Médical", "Polyclinique"],
      countries: ["Tous", "Bénin", "Côte d'Ivoire", "Sénégal", "Ghana", "Togo"],
      sortOptions: ["Date d'inscription", "Nom", "Revenus", "Nombre de patients"],
      formData: {
        id: null,
        name: "",
        type: "",
        country: "",
        city: "",
        address: "",
        email: "",
        phone: "",
        responsable: "",
        responsablePhone: "",
        status: "En négociation",
        commission: 33.33
      },
      hospitals: [
        {
          id: 1,
          name: "CNHU Cotonou",
          country: "Bénin",
          city: "Cotonou",
          responsable: "Dr Zinsou",
          cardiologists: 12,
          patients: 1250,
          revenue: "900,000",
          status: "Actif"
        },
        {
          id: 2,
          name: "CHU Abidjan",
          country: "Côte d'Ivoire",
          city: "Abidjan",
          responsable: "Dr Mbaye",
          cardiologists: 8,
          patients: 980,
          revenue: "640,000",
          status: "Actif"
        },
        {
          id: 3,
          name: "Hôpital Principal Dakar",
          country: "Sénégal",
          city: "Dakar",
          responsable: "Dr Ndiaye",
          cardiologists: 0,
          patients: 0,
          revenue: "0",
          status: "En négociation"
        },
        {
          id: 4,
          name: "Clinique du Cœur Lomé",
          country: "Togo",
          city: "Lomé",
          responsable: "Dr Adomah",
          cardiologists: 5,
          patients: 420,
          revenue: "380,000",
          status: "Actif"
        },
        {
          id: 5,
          name: "Centre Médical Bamako",
          country: "Mali",
          city: "Bamako",
          responsable: "Dr Traoré",
          cardiologists: 4,
          patients: 310,
          revenue: "310,000",
          status: "Actif"
        }
      ],
      topHospitals: [
        { name: "CNHU Cotonou", revenue: "900,000", trend: 12 },
        { name: "CHU Abidjan", revenue: "640,000", trend: 8 },
        { name: "Centre Dakar", revenue: "520,000", trend: 15 },
        { name: "Clinique Lomé", revenue: "380,000", trend: 5 },
        { name: "Hôpital Bamako", revenue: "310,000", trend: -2 }
      ]
    };
  },
  computed: {
    filteredHospitals() {
      if (!this.searchQuery) {
        return this.hospitals;
      }
      return this.hospitals.filter(hospital =>
        hospital.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        hospital.city.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        hospital.responsable.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    getStatusClass(status) {
      const classes = {
        'Actif': 'custom-badge status-green',
        'En négociation': 'custom-badge status-orange',
        'Inactif': 'custom-badge status-pink'
      };
      return classes[status] || 'custom-badge';
    },
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      const modal = new bootstrap.Modal(document.getElementById('hospitalModal'));
      modal.show();
    },
    openEditModal(hospital) {
      this.isEditMode = true;
      this.formData = { ...hospital };
      const modal = new bootstrap.Modal(document.getElementById('hospitalModal'));
      modal.show();
    },
    resetForm() {
      this.formData = {
        id: null,
        name: "",
        type: "",
        country: "",
        city: "",
        address: "",
        email: "",
        phone: "",
        responsable: "",
        responsablePhone: "",
        status: "En négociation",
        commission: 33.33
      };
    },
    submitForm() {
      if (this.isEditMode) {
        const index = this.hospitals.findIndex(h => h.id === this.formData.id);
        if (index !== -1) {
          this.hospitals[index] = { ...this.formData };
          this.$toast.success('Hôpital mis à jour avec succès');
        }
      } else {
        const newHospital = {
          ...this.formData,
          id: this.hospitals.length + 1,
          cardiologists: 0,
          patients: 0,
          revenue: "0"
        };
        this.hospitals.push(newHospital);
        this.$toast.success('Hôpital ajouté avec succès');
      }
      const modal = bootstrap.Modal.getInstance(document.getElementById('hospitalModal'));
      modal.hide();
      this.resetForm();
    },
    deleteHospital(id) {
      this.deleteId = id;
      const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
      modal.show();
    },
    confirmDelete() {
      this.hospitals = this.hospitals.filter(h => h.id !== this.deleteId);
      this.$toast.success('Hôpital supprimé avec succès');
      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      modal.hide();
      this.deleteId = null;
    },
    viewHospital(hospital) {
      this.$router.push(`/hospitals/hospital-profile?id=${hospital.id}`);
    },
    refreshData() {
      this.$toast.info('Actualisation des données...');
    }
  }
};
</script>

<style scoped>
.dash-widget {
  margin-bottom: 20px;
}
</style>
