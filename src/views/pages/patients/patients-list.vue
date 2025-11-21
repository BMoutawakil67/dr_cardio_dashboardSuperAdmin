<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="patients-list" />
      <!-- /Page Header -->

      <!-- Statistics Cards -->
      <div class="row mb-4">
        <div class="col-md-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h6>Total Patients</h6>
              <h3>{{ totalPatients }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-success text-white">
            <div class="card-body">
              <h6>Actifs</h6>
              <h3>{{ activePatients }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-danger text-white">
            <div class="card-body">
              <h6>Avec Alertes</h6>
              <h3>{{ patientsWithAlerts }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-warning text-white">
            <div class="card-body">
              <h6>Suspendus</h6>
              <h3>{{ suspendedPatients }}</h3>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <!-- Table Header -->
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Gestion des Patients ({{ totalPatients }})</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form @submit.prevent="searchPatients">
                            <input
                              v-model="searchQuery"
                              type="text"
                              class="form-control"
                              placeholder="Rechercher (ID, nom, email, téléphone)..."
                            />
                            <button type="submit" class="btn">
                              <img src="@/assets/img/icons/search-normal.svg" alt="" />
                            </button>
                          </form>
                        </div>
                        <div class="add-group">
                          <router-link
                            to="add-patient"
                            class="btn btn-primary add-pluss ms-2"
                          >
                            <img src="@/assets/img/icons/plus.svg" alt="" />
                          </router-link>
                          <a
                            href="javascript:;"
                            @click="refreshData"
                            class="btn btn-primary doctor-refresh ms-2"
                          >
                            <img src="@/assets/img/icons/re-fresh.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" @click="exportCSV" class="me-2" title="Export CSV">
                      <img src="@/assets/img/icons/pdf-icon-01.svg" alt="CSV" />
                    </a>
                    <a href="javascript:;" @click="exportPDF" class="me-2" title="Export PDF">
                      <img src="@/assets/img/icons/pdf-icon-02.svg" alt="PDF" />
                    </a>
                  </div>
                </div>
              </div>
              <!-- /Table Header -->

              <!-- Filters Section -->
              <div class="row mb-3">
                <div class="col-md-12">
                  <div class="filter-section p-3 bg-light rounded">
                    <div class="row">
                      <div class="col-md-3">
                        <label class="form-label">Filtrer par Statut:</label>
                        <select v-model="statusFilter" class="form-select" @change="applyFilters">
                          <option value="all">Tous ({{ totalPatients }})</option>
                          <option value="active">Actifs ({{ activePatients }})</option>
                          <option value="alert">Avec Alertes ({{ patientsWithAlerts }})</option>
                          <option value="suspended">Suspendus ({{ suspendedPatients }})</option>
                          <option value="deleted">Supprimés (76)</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Abonnement:</label>
                        <select v-model="subscriptionFilter" class="form-select" @change="applyFilters">
                          <option value="all">Tous</option>
                          <option value="standard">Standard (3000 F/m)</option>
                          <option value="premium">Premium (5000 F/m)</option>
                          <option value="famille">Famille (8000 F/m)</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Région:</label>
                        <select v-model="regionFilter" class="form-select" @change="applyFilters">
                          <option value="all">Toutes</option>
                          <option value="benin">Bénin</option>
                          <option value="cotedivoire">Côte d'Ivoire</option>
                          <option value="senegal">Sénégal</option>
                          <option value="ghana">Ghana</option>
                          <option value="autres">Autres</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Trier par:</label>
                        <select v-model="sortBy" class="form-select" @change="applyFilters">
                          <option value="date">Date d'inscription</option>
                          <option value="name">Nom</option>
                          <option value="status">Statut</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <a-table
                  class="table border-0 custom-table comman-table datatable mb-0"
                  :columns="columns"
                  :data-source="filteredData"
                  :row-selection="{}"
                  :pagination="{
                    pageSize: pageSize,
                    total: filteredData.length,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '25', '50', '100'],
                  }"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'status'">
                      <span v-if="record.status === 'active'" class="badge bg-success">
                        🟢 Actif
                      </span>
                      <span v-else-if="record.status === 'alert'" class="badge bg-danger">
                        🔴 Alerte
                      </span>
                      <span v-else-if="record.status === 'suspended'" class="badge bg-warning">
                        ⏸ Suspendu
                      </span>
                    </template>

                    <template v-else-if="column.key === 'patient'">
                      <div class="profile-image">
                        <router-link to="/patients/patient-profile">
                          <img
                            width="32"
                            height="32"
                            :src="require(`@/assets/img/profiles/${record.image}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          <div class="d-inline-block">
                            <strong>{{ record.name }}</strong><br />
                            <small class="text-muted">ID: {{ record.id }}</small>
                          </div>
                        </router-link>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'phone'">
                      <a :href="'tel:' + record.phone">{{ record.phone }}</a>
                    </template>

                    <template v-else-if="column.key === 'cardiologue'">
                      <div>
                        <strong>{{ record.cardiologue }}</strong><br />
                        <small class="text-muted">{{ record.location }}</small>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'subscription'">
                      <div>
                        <span :class="'badge bg-' + record.subscriptionColor">
                          {{ record.subscription }}
                        </span>
                        <br />
                        <small>{{ record.subscriptionPrice }}</small><br />
                        <small :class="record.paymentStatus === 'Actif' ? 'text-success' : 'text-danger'">
                          {{ record.paymentStatus }}
                        </small>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'action'">
                      <div class="text-end">
                        <div class="dropdown dropdown-action">
                          <a
                            href="javascript:;"
                            class="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i class="fa fa-ellipsis-v"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <router-link
                              class="dropdown-item"
                              to="/patients/patient-profile"
                            >
                              <i class="fa fa-eye m-r-5"></i> Voir
                            </router-link>
                            <router-link
                              class="dropdown-item"
                              to="/patients/edit-patient"
                            >
                              <i class="fa-solid fa-pen-to-square m-r-5"></i> Éditer
                            </router-link>
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="suspendPatient(record)"
                            >
                              <i class="fa fa-pause m-r-5"></i> Suspendre
                            </a>
                            <a
                              class="dropdown-item text-danger"
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_patient"
                            >
                              <i class="fa fa-trash-alt m-r-5"></i> Supprimer
                            </a>
                          </div>
                        </div>
                      </div>
                    </template>
                  </template>
                </a-table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Statistics Section -->
      <div class="row mt-4">
        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Répartition par Abonnement</h5>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <strong>Standard:</strong> 68% (8,486 patients)<br />
                <small>3000 F CFA/mois</small>
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-primary" style="width: 68%">68%</div>
              </div>

              <div class="mb-2">
                <strong>Premium:</strong> 25% (3,120 patients)<br />
                <small>5000 F CFA/mois</small>
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-success" style="width: 25%">25%</div>
              </div>

              <div class="mb-2">
                <strong>Famille:</strong> 7% (874 patients)<br />
                <small>8000 F CFA/mois</small>
              </div>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-warning" style="width: 7%">7%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Observance des Patients</h5>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <strong>Excellente:</strong> 45%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-success" style="width: 45%">45%</div>
              </div>

              <div class="mb-2">
                <strong>Bonne:</strong> 38%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-info" style="width: 38%">38%</div>
              </div>

              <div class="mb-2">
                <strong>Moyenne:</strong> 12%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-warning" style="width: 12%">12%</div>
              </div>

              <div class="mb-2">
                <strong>Faible:</strong> 5%
              </div>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-danger" style="width: 5%">5%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Santé Globale des Patients</h5>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="fa fa-check-circle text-success"></i>
                  <strong>Tensions normales:</strong> 65%
                </li>
                <li class="mb-2">
                  <i class="fa fa-exclamation-circle text-warning"></i>
                  <strong>HTA modérée:</strong> 25%
                </li>
                <li class="mb-2">
                  <i class="fa fa-times-circle text-danger"></i>
                  <strong>HTA sévère:</strong> 10%
                </li>
                <li class="mb-2">
                  <i class="fa fa-chart-line text-info"></i>
                  <strong>Engagement moyen:</strong> 85%
                </li>
                <li>
                  <i class="fa fa-heartbeat text-danger"></i>
                  <strong>Mesures/jour:</strong> 2.3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Regional Distribution -->
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>Répartition Géographique</h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <strong>Bénin:</strong> 35% (4,368)
                  <div class="progress mt-2" style="height: 25px;">
                    <div class="progress-bar bg-success" style="width: 35%">35%</div>
                  </div>
                </div>
                <div class="col-md-2">
                  <strong>Côte d'Ivoire:</strong> 28% (3,494)
                  <div class="progress mt-2" style="height: 25px;">
                    <div class="progress-bar bg-primary" style="width: 28%">28%</div>
                  </div>
                </div>
                <div class="col-md-2">
                  <strong>Sénégal:</strong> 18% (2,246)
                  <div class="progress mt-2" style="height: 25px;">
                    <div class="progress-bar bg-warning" style="width: 18%">18%</div>
                  </div>
                </div>
                <div class="col-md-2">
                  <strong>Ghana:</strong> 12% (1,498)
                  <div class="progress mt-2" style="height: 25px;">
                    <div class="progress-bar bg-info" style="width: 12%">12%</div>
                  </div>
                </div>
                <div class="col-md-2">
                  <strong>Autres:</strong> 7% (874)
                  <div class="progress mt-2" style="height: 25px;">
                    <div class="progress-bar bg-secondary" style="width: 7%">7%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <delete></delete>
</template>

<script>
const columns = [
  {
    title: "Statut",
    key: "status",
    width: "100px",
  },
  {
    title: "Patient",
    key: "patient",
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
    },
  },
  {
    title: "Téléphone",
    key: "phone",
  },
  {
    title: "Cardiologue",
    key: "cardiologue",
    sorter: {
      compare: (a, b) => a.cardiologue.localeCompare(b.cardiologue),
    },
  },
  {
    title: "Abonnement",
    key: "subscription",
  },
  {
    title: "",
    key: "action",
    class: "text-end",
    width: "100px",
  },
];

const data = [
  {
    id: "#12450",
    name: "Jean Dupont",
    phone: "+229 97 XX XX XX",
    cardiologue: "Dr. Kouassi",
    location: "Cotonou",
    subscription: "Standard",
    subscriptionPrice: "3000 F/m",
    subscriptionColor: "primary",
    paymentStatus: "Actif",
    status: "active",
    image: "avatar-01.jpg",
  },
  {
    id: "#12449",
    name: "Marie Koffi",
    phone: "+225 07 XX XX XX",
    cardiologue: "Dr. Diallo",
    location: "Abidjan",
    subscription: "Premium",
    subscriptionPrice: "5000 F/m",
    subscriptionColor: "success",
    paymentStatus: "Actif",
    status: "alert",
    image: "avatar-02.jpg",
  },
  {
    id: "#12448",
    name: "Paul Mensah",
    phone: "+233 24 XX XX XX",
    cardiologue: "Dr. Amina",
    location: "Accra",
    subscription: "Famille",
    subscriptionPrice: "8000 F/m",
    subscriptionColor: "warning",
    paymentStatus: "Actif",
    status: "active",
    image: "avatar-03.jpg",
  },
  {
    id: "#12447",
    name: "Fatou Diallo",
    phone: "+221 77 XX XX XX",
    cardiologue: "Aucun",
    location: "Dakar",
    subscription: "Standard",
    subscriptionPrice: "Suspendu",
    subscriptionColor: "secondary",
    paymentStatus: "Impayé",
    status: "suspended",
    image: "avatar-04.jpg",
  },
  {
    id: "#12446",
    name: "Ibrahim Traoré",
    phone: "+226 70 XX XX XX",
    cardiologue: "Dr. Kouassi",
    location: "Ouagadougou",
    subscription: "Premium",
    subscriptionPrice: "5000 F/m",
    subscriptionColor: "success",
    paymentStatus: "Actif",
    status: "active",
    image: "avatar-05.jpg",
  },
  {
    id: "#12445",
    name: "Aminata Sow",
    phone: "+221 76 XX XX XX",
    cardiologue: "Dr. Mensah",
    location: "Dakar",
    subscription: "Standard",
    subscriptionPrice: "3000 F/m",
    subscriptionColor: "primary",
    paymentStatus: "Actif",
    status: "active",
    image: "avatar-06.jpg",
  },
  {
    id: "#12444",
    name: "Kofi Asante",
    phone: "+233 20 XX XX XX",
    cardiologue: "Dr. Diallo",
    location: "Kumasi",
    subscription: "Famille",
    subscriptionPrice: "8000 F/m",
    subscriptionColor: "warning",
    paymentStatus: "Actif",
    status: "alert",
    image: "avatar-07.jpg",
  },
  {
    id: "#12443",
    name: "Aïcha Bah",
    phone: "+224 62 XX XX XX",
    cardiologue: "Dr. Amina",
    location: "Conakry",
    subscription: "Standard",
    subscriptionPrice: "3000 F/m",
    subscriptionColor: "primary",
    paymentStatus: "Actif",
    status: "active",
    image: "avatar-08.jpg",
  },
];

export default {
  data() {
    return {
      title: "Patients",
      text: "Gestion des Patients",
      data,
      columns,
      searchQuery: "",
      statusFilter: "all",
      subscriptionFilter: "all",
      regionFilter: "all",
      sortBy: "date",
      pageSize: 25,
      totalPatients: 12480,
      activePatients: 11240,
      patientsWithAlerts: 89,
      suspendedPatients: 45,
    };
  },
  computed: {
    filteredData() {
      let filtered = [...this.data];

      // Apply status filter
      if (this.statusFilter !== "all") {
        filtered = filtered.filter((p) => p.status === this.statusFilter);
      }

      // Apply subscription filter
      if (this.subscriptionFilter !== "all") {
        filtered = filtered.filter(
          (p) =>
            p.subscription.toLowerCase() === this.subscriptionFilter.toLowerCase()
        );
      }

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (p) =>
            p.id.toLowerCase().includes(query) ||
            p.name.toLowerCase().includes(query) ||
            p.phone.includes(query)
        );
      }

      return filtered;
    },
  },
  methods: {
    searchPatients() {
      // Search is reactive through computed property
    },
    applyFilters() {
      // Filters are reactive through computed property
    },
    refreshData() {
      this.$message.success("Données actualisées");
    },
    exportCSV() {
      this.$message.success("Export CSV en cours...");
    },
    exportPDF() {
      this.$message.success("Export PDF en cours...");
    },
    suspendPatient(record) {
      this.$message.warning(`Patient ${record.name} suspendu`);
    },
  },
};
</script>

<style scoped>
.filter-section {
  border: 1px solid #dee2e6;
}

.badge {
  font-size: 12px;
  padding: 5px 10px;
}

.profile-image a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.card {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress {
  background-color: #e9ecef;
}
</style>
