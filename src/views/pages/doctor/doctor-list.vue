<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="doctors-list" />
      <!-- /Page Header -->

      <!-- Statistics Cards -->
      <div class="row mb-4">
        <div class="col-md-3">
          <div class="card bg-primary text-white">
            <div class="card-body">
              <h6>Total Cardiologues</h6>
              <h3>{{ totalDoctors }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-success text-white">
            <div class="card-body">
              <h6>Validés</h6>
              <h3>{{ validatedDoctors }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-warning text-white">
            <div class="card-body">
              <h6>En Attente</h6>
              <h3>{{ pendingDoctors }}</h3>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card bg-danger text-white">
            <div class="card-body">
              <h6>Suspendus</h6>
              <h3>{{ suspendedDoctors }}</h3>
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
                      <h3>Gestion des Cardiologues ({{ totalDoctors }})</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form @submit.prevent="searchDoctors">
                            <input
                              v-model="searchQuery"
                              type="text"
                              class="form-control"
                              placeholder="Rechercher (nom, hôpital, ville)..."
                            />
                            <button type="submit" class="btn">
                              <img src="@/assets/img/icons/search-normal.svg" alt="" />
                            </button>
                          </form>
                        </div>
                        <div class="add-group">
                          <router-link
                            to="add-doctor"
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
                    <a href="javascript:;" @click="importCSV" class="me-2" title="Import CSV">
                      <img src="@/assets/img/icons/pdf-icon-01.svg" alt="CSV" />
                    </a>
                    <a href="javascript:;" @click="exportData" class="me-2" title="Export">
                      <img src="@/assets/img/icons/pdf-icon-02.svg" alt="Export" />
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
                          <option value="all">Tous ({{ totalDoctors }})</option>
                          <option value="validated">Validés ({{ validatedDoctors }})</option>
                          <option value="pending">En attente ({{ pendingDoctors }})</option>
                          <option value="suspended">Suspendus ({{ suspendedDoctors }})</option>
                          <option value="deleted">Supprimés (4)</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Avec Patients:</label>
                        <select v-model="patientFilter" class="form-select" @change="applyFilters">
                          <option value="all">Tous</option>
                          <option value="withPatients">Avec patients</option>
                          <option value="noPatients">Sans patients</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Région:</label>
                        <select v-model="regionFilter" class="form-select" @change="applyFilters">
                          <option value="all">Toutes</option>
                          <option value="benin">Bénin (28%)</option>
                          <option value="cotedivoire">Côte d'Ivoire (25%)</option>
                          <option value="senegal">Sénégal (18%)</option>
                          <option value="ghana">Ghana (15%)</option>
                          <option value="autres">Autres (14%)</option>
                        </select>
                      </div>
                      <div class="col-md-3">
                        <label class="form-label">Trier par:</label>
                        <select v-model="sortBy" class="form-select" @change="applyFilters">
                          <option value="patients">Nombre de Patients</option>
                          <option value="revenue">Revenus</option>
                          <option value="rating">Note</option>
                          <option value="date">Date d'inscription</option>
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
                      <span v-if="record.status === 'validated'" class="badge bg-success">
                        ✅ Validé
                      </span>
                      <span v-else-if="record.status === 'pending'" class="badge bg-warning">
                        ⏳ En attente
                      </span>
                      <span v-else-if="record.status === 'suspended'" class="badge bg-danger">
                        ⏸ Suspendu
                      </span>
                    </template>

                    <template v-else-if="column.key === 'cardiologue'">
                      <div class="profile-image">
                        <router-link to="/doctors/doctor-profile">
                          <img
                            width="32"
                            height="32"
                            :src="require(`@/assets/img/profiles/${record.image}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          <div class="d-inline-block">
                            <strong>{{ record.name }}</strong><br />
                            <small class="text-muted">ID: {{ record.id }}</small><br />
                            <small class="text-muted">{{ record.location }}</small><br />
                            <small class="text-muted">Inscrit: {{ record.inscrit }}</small>
                          </div>
                        </router-link>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'patients'">
                      <div>
                        <strong>{{ record.patients }}</strong><br />
                        <small class="text-success">Actifs: {{ record.patientsActifs }}</small><br />
                        <small class="text-danger" v-if="record.alertes > 0">
                          Alertes: {{ record.alertes }}
                        </small>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'revenue'">
                      <div>
                        <strong>{{ record.revenue }} F</strong><br />
                        <small class="text-muted">/mois</small>
                      </div>
                    </template>

                    <template v-else-if="column.key === 'rating'">
                      <div v-if="record.rating">
                        <div class="rating">
                          <i class="fa fa-star text-warning"></i>
                          <strong>{{ record.rating }}</strong>
                        </div>
                        <small class="text-muted">({{ record.reviews }} avis)</small>
                      </div>
                      <div v-else>
                        <small class="text-muted">N/A</small>
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
                              to="/doctors/doctor-profile"
                            >
                              <i class="fa fa-eye m-r-5"></i> Voir
                            </router-link>
                            <router-link
                              v-if="record.status === 'pending'"
                              class="dropdown-item text-success"
                              to="#"
                              @click.prevent="validateDoctor(record)"
                            >
                              <i class="fa fa-check m-r-5"></i> Valider
                            </router-link>
                            <a
                              v-if="record.status === 'pending'"
                              class="dropdown-item text-danger"
                              href="javascript:;"
                              @click="rejectDoctor(record)"
                            >
                              <i class="fa fa-times m-r-5"></i> Rejeter
                            </a>
                            <a
                              v-if="record.status === 'pending'"
                              class="dropdown-item"
                              href="javascript:;"
                              @click="viewDocuments(record)"
                            >
                              <i class="fa fa-file m-r-5"></i> Voir diplômes
                            </a>
                            <a
                              v-if="record.status === 'validated'"
                              class="dropdown-item"
                              href="javascript:;"
                              @click="generateQRCode(record)"
                            >
                              <i class="fa fa-qrcode m-r-5"></i> Générer QR Code
                            </a>
                            <router-link
                              class="dropdown-item"
                              to="/doctors/edit-doctor"
                            >
                              <i class="fa-solid fa-pen-to-square m-r-5"></i> Éditer
                            </router-link>
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="sendMessage(record)"
                            >
                              <i class="fa fa-envelope m-r-5"></i> Envoyer message
                            </a>
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="suspendDoctor(record)"
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
              <h5>Répartition par Région</h5>
            </div>
            <div class="card-body">
              <div class="mb-2">
                <strong>Bénin:</strong> 28%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-success" style="width: 28%">28%</div>
              </div>

              <div class="mb-2">
                <strong>Côte d'Ivoire:</strong> 25%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-primary" style="width: 25%">25%</div>
              </div>

              <div class="mb-2">
                <strong>Sénégal:</strong> 18%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-warning" style="width: 18%">18%</div>
              </div>

              <div class="mb-2">
                <strong>Ghana:</strong> 15%
              </div>
              <div class="progress mb-3" style="height: 20px;">
                <div class="progress-bar bg-info" style="width: 15%">15%</div>
              </div>

              <div class="mb-2">
                <strong>Autres:</strong> 14%
              </div>
              <div class="progress" style="height: 20px;">
                <div class="progress-bar bg-secondary" style="width: 14%">14%</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header">
              <h5>Performance</h5>
            </div>
            <div class="card-body">
              <ul class="list-unstyled">
                <li class="mb-2">
                  <i class="fa fa-star text-success"></i>
                  <strong>Très actifs:</strong> 42%
                </li>
                <li class="mb-2">
                  <i class="fa fa-star text-info"></i>
                  <strong>Actifs:</strong> 45%
                </li>
                <li class="mb-2">
                  <i class="fa fa-star-half text-warning"></i>
                  <strong>Moyens:</strong> 10%
                </li>
                <li class="mb-2">
                  <i class="fa fa-star-o text-danger"></i>
                  <strong>Inactifs:</strong> 3%
                </li>
                <li class="mt-3">
                  <i class="fa fa-trophy text-warning"></i>
                  <strong>Note moyenne:</strong> 4.7⭐
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <div class="card-header bg-warning">
              <h5>
                <i class="fa fa-exclamation-triangle"></i>
                Validation en Attente ({{ pendingDoctors }})
              </h5>
            </div>
            <div class="card-body">
              <p>Profils complets avec diplômes uploadés</p>
              <p>En attente depuis: 1-5 jours</p>
              <div class="text-center mt-3">
                <button
                  class="btn btn-success btn-sm me-2"
                  @click="validateAll"
                >
                  <i class="fa fa-check"></i> Valider en masse
                </button>
                <button
                  class="btn btn-primary btn-sm"
                  @click="viewPendingList"
                >
                  <i class="fa fa-list"></i> Voir la liste
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Top 5 Cardiologues -->
      <div class="row mt-4">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5>
                <i class="fa fa-trophy text-warning"></i>
                Top 5 Cardiologues
              </h5>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-2">
                  <div class="text-center">
                    <div class="badge bg-warning" style="font-size: 24px; width: 60px; height: 60px; line-height: 60px;">
                      1
                    </div>
                    <h6 class="mt-2">Dr. Kouassi J.</h6>
                    <p class="mb-0">214 patients</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="text-center">
                    <div class="badge bg-secondary" style="font-size: 24px; width: 60px; height: 60px; line-height: 60px;">
                      2
                    </div>
                    <h6 class="mt-2">Dr. Diallo A.</h6>
                    <p class="mb-0">178 patients</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="text-center">
                    <div class="badge" style="background-color: #CD7F32; font-size: 24px; width: 60px; height: 60px; line-height: 60px;">
                      3
                    </div>
                    <h6 class="mt-2">Dr. Traoré F.</h6>
                    <p class="mb-0">150 patients</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="text-center">
                    <div class="badge bg-info" style="font-size: 24px; width: 60px; height: 60px; line-height: 60px;">
                      4
                    </div>
                    <h6 class="mt-2">Dr. Ndiaye I.</h6>
                    <p class="mb-0">142 patients</p>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="text-center">
                    <div class="badge bg-primary" style="font-size: 24px; width: 60px; height: 60px; line-height: 60px;">
                      5
                    </div>
                    <h6 class="mt-2">Dr. Mensah P.</h6>
                    <p class="mb-0">138 patients</p>
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

  <!-- QR Code Modal -->
  <div class="modal fade" id="qrcodeModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">QR Code Praticien</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body text-center">
          <div v-if="selectedDoctor">
            <h6>{{ selectedDoctor.name }}</h6>
            <div class="qrcode-container mt-3 mb-3">
              <!-- QR Code would be generated here -->
              <div style="width: 200px; height: 200px; margin: 0 auto; border: 2px solid #ddd; display: flex; align-items: center; justify-content: center;">
                QR Code<br />{{ selectedDoctor.id }}
              </div>
            </div>
            <button class="btn btn-primary me-2">
              <i class="fa fa-download"></i> Télécharger QR Code
            </button>
            <button class="btn btn-success">
              <i class="fa fa-file-pdf-o"></i> Télécharger Affiche Cabinet
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: "Statut",
    key: "status",
    width: "100px",
  },
  {
    title: "Cardiologue",
    key: "cardiologue",
    sorter: {
      compare: (a, b) => a.name.localeCompare(b.name),
    },
  },
  {
    title: "Patients",
    key: "patients",
    sorter: {
      compare: (a, b) => b.patients - a.patients,
    },
  },
  {
    title: "Revenus",
    key: "revenue",
    sorter: {
      compare: (a, b) => {
        const aRev = parseInt(a.revenue.replace(/,/g, ""));
        const bRev = parseInt(b.revenue.replace(/,/g, ""));
        return bRev - aRev;
      },
    },
  },
  {
    title: "Note",
    key: "rating",
    sorter: {
      compare: (a, b) => (b.rating || 0) - (a.rating || 0),
    },
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
    id: "#847",
    name: "Dr. Kouassi Jean",
    location: "Cotonou, Bénin",
    inscrit: "1 an",
    patients: 214,
    patientsActifs: 210,
    alertes: 4,
    revenue: "428,000",
    rating: 4.9,
    reviews: 125,
    status: "validated",
    image: "avatar-01.jpg",
  },
  {
    id: "#846",
    name: "Dr. Diallo Aminata",
    location: "Abidjan, CI",
    inscrit: "1 an",
    patients: 178,
    patientsActifs: 175,
    alertes: 3,
    revenue: "356,000",
    rating: 4.8,
    reviews: 98,
    status: "validated",
    image: "avatar-02.jpg",
  },
  {
    id: "#NEW-12",
    name: "Dr. Mensah Paul",
    location: "Accra, Ghana",
    inscrit: "Hier",
    patients: 0,
    patientsActifs: 0,
    alertes: 0,
    revenue: "0",
    rating: null,
    reviews: 0,
    status: "pending",
    image: "avatar-03.jpg",
  },
  {
    id: "#845",
    name: "Dr. Traoré Fatou",
    location: "Dakar, Sénégal",
    inscrit: "8 mois",
    patients: 150,
    patientsActifs: 148,
    alertes: 2,
    revenue: "300,000",
    rating: 4.7,
    reviews: 89,
    status: "validated",
    image: "avatar-04.jpg",
  },
  {
    id: "#844",
    name: "Dr. Ndiaye Ibrahima",
    location: "Dakar, Sénégal",
    inscrit: "6 mois",
    patients: 142,
    patientsActifs: 140,
    alertes: 2,
    revenue: "284,000",
    rating: 4.6,
    reviews: 76,
    status: "validated",
    image: "avatar-05.jpg",
  },
  {
    id: "#NEW-13",
    name: "Dr. Amina Konate",
    location: "Cotonou, Bénin",
    inscrit: "2 jours",
    patients: 0,
    patientsActifs: 0,
    alertes: 0,
    revenue: "0",
    rating: null,
    reviews: 0,
    status: "pending",
    image: "avatar-06.jpg",
  },
];

export default {
  data() {
    return {
      title: "Cardiologues",
      text: "Gestion des Cardiologues",
      data,
      columns,
      searchQuery: "",
      statusFilter: "all",
      patientFilter: "all",
      regionFilter: "all",
      sortBy: "patients",
      pageSize: 25,
      totalDoctors: 847,
      validatedDoctors: 823,
      pendingDoctors: 12,
      suspendedDoctors: 8,
      selectedDoctor: null,
    };
  },
  computed: {
    filteredData() {
      let filtered = [...this.data];

      // Apply status filter
      if (this.statusFilter !== "all") {
        filtered = filtered.filter((d) => d.status === this.statusFilter);
      }

      // Apply patient filter
      if (this.patientFilter === "withPatients") {
        filtered = filtered.filter((d) => d.patients > 0);
      } else if (this.patientFilter === "noPatients") {
        filtered = filtered.filter((d) => d.patients === 0);
      }

      // Apply search filter
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(
          (d) =>
            d.name.toLowerCase().includes(query) ||
            d.location.toLowerCase().includes(query)
        );
      }

      return filtered;
    },
  },
  methods: {
    searchDoctors() {
      // Search is reactive through computed property
    },
    applyFilters() {
      // Filters are reactive through computed property
    },
    refreshData() {
      this.$message.success("Données actualisées");
    },
    importCSV() {
      this.$message.info("Import CSV en cours...");
    },
    exportData() {
      this.$message.success("Export en cours...");
    },
    validateDoctor(record) {
      this.$message.success(`Dr. ${record.name} validé avec succès`);
    },
    rejectDoctor(record) {
      this.$message.error(`Demande de Dr. ${record.name} rejetée`);
    },
    viewDocuments(record) {
      this.$message.info(`Affichage des diplômes de Dr. ${record.name}`);
    },
    generateQRCode(record) {
      this.selectedDoctor = record;
      // Open modal programmatically
      const modal = new window.bootstrap.Modal(document.getElementById("qrcodeModal"));
      modal.show();
    },
    sendMessage(record) {
      this.$message.info(`Envoi de message à Dr. ${record.name}`);
    },
    suspendDoctor(record) {
      this.$message.warning(`Dr. ${record.name} suspendu`);
    },
    validateAll() {
      this.$message.success(`${this.pendingDoctors} cardiologues validés`);
    },
    viewPendingList() {
      this.statusFilter = "pending";
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

.rating {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
</style>
