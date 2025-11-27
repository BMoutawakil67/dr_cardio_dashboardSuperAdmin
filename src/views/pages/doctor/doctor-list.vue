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
                      <h3>Liste des Cardiologues</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form @submit.prevent="searchDoctors">
                            <input
                              v-model="searchQuery"
                              type="text"
                              class="form-control"
                              placeholder="Rechercher cardiologue..."
                            />
                            <button type="submit" class="btn">
                              <img src="@/assets/img/icons/search-normal.svg" alt="" />
                            </button>
                          </form>
                        </div>
                        <div class="add-group">
                          <button
                            @click="openAddModal"
                            class="btn btn-primary add-pluss ms-2"
                            ><img src="@/assets/img/icons/plus.svg" alt=""
                          /></button>
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
                    <template v-else-if="column.key === 'Mobile'">
                      <div><a href="javascript:;">{{ record.Mobile }}</a></div>
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
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="openEditModal(record)"
                              ><i class="fa-solid fa-pen-to-square m-r-5"></i>
                              Modifier</a
                            >
                            <router-link
                              class="dropdown-item"
                              :to="`/doctors/profile/${record.id}`"
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
                              @click="deleteDoctor(record.id)"
                              ><i class="fa fa-trash-alt m-r-5"></i> Supprimer</a
                            >
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

      <!-- Modal Ajouter/Éditer Cardiologue -->
      <div class="modal fade" id="doctorModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditMode ? 'Éditer le cardiologue' : 'Nouveau cardiologue' }}</h5>
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
                        v-model="formData.Name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Spécialité <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Cardiologie générale', 'Électrophysiologie', 'Cardiologie interventionnelle', 'Insuffisance cardiaque', 'Imagerie cardiaque']"
                        v-model="formData.Specialization"
                        placeholder="Sélectionner spécialité"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Diplômes</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.Degree"
                        placeholder="Ex: MD, PhD, FESC"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Téléphone <span class="login-danger">*</span></label>
                      <input
                        type="tel"
                        class="form-control"
                        v-model="formData.Mobile"
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
                        v-model="formData.Email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Pays</label>
                      <vue-select
                        :options="['Côte d\'Ivoire', 'Sénégal', 'Mali', 'Burkina Faso', 'Togo', 'Bénin', 'Niger', 'Guinée']"
                        v-model="formData.Country"
                        placeholder="Sélectionner pays"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Ville / Hôpital</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formData.Hospital"
                        placeholder="Ex: CHU Abidjan"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Années d'expérience</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.Experience"
                        min="0"
                        max="60"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Tarif consultation (FCFA)</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.ConsultationFee"
                        min="0"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Statut</label>
                      <vue-select
                        :options="['Actif', 'Inactif', 'En attente']"
                        v-model="formData.Status"
                        placeholder="Sélectionner statut"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-block local-forms">
                      <label>Bio / Description</label>
                      <textarea
                        class="form-control"
                        v-model="formData.Bio"
                        rows="3"
                        placeholder="Courte biographie du cardiologue..."
                      ></textarea>
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
              <p>Êtes-vous sûr de vouloir supprimer ce cardiologue ?</p>
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
const columns = [
  {
    title: "Nom",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        const aRev = parseInt(a.revenue.replace(/,/g, ""));
        const bRev = parseInt(b.revenue.replace(/,/g, ""));
        return bRev - aRev;
      },
    },
  },
  {
    title: "Spécialité",
    dataIndex: "Specialization",
    sorter: {
      compare: (a, b) => {
        a = a.Specialization.toLowerCase();
        b = b.Specialization.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Diplômes",
    dataIndex: "Degree",
    sorter: {
      compare: (a, b) => {
        a = a.Degree.toLowerCase();
        b = b.Degree.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Expérience",
    dataIndex: "Experience",
    sorter: {
      compare: (a, b) => a.Experience - b.Experience,
    },
  },
  {
    title: "Téléphone",
    dataIndex: "Mobile",
    key: "Mobile",
    sorter: {
      compare: (a, b) => {
        a = a.Mobile.toLowerCase();
        b = b.Mobile.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Statut",
    dataIndex: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date d'ajout",
    dataIndex: "JoiningDate",
    sorter: {
      compare: (a, b) => {
        a = a.JoiningDate.toLowerCase();
        b = b.JoiningDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "",
    key: "action",
    class: "text-end",
    width: "100px",
  },
];

export default {
  data() {
    return {
      title: "Cardiologues",
      text: "Liste des Cardiologues",
      searchQuery: "",
      isEditMode: false,
      deleteId: null,
      formData: {
        id: null,
        Name: "",
        Specialization: "",
        Degree: "",
        Mobile: "",
        Email: "",
        Country: "",
        Hospital: "",
        Experience: null,
        ConsultationFee: null,
        Status: "Actif",
        Bio: "",
        JoiningDate: "",
        Image: "avatar-01.jpg"
      },
      data: [
        {
          id: 1,
          Name: "Dr. Koffi Adjoumani",
          Specialization: "Cardiologie interventionnelle",
          Degree: "MD, FESC",
          Experience: 15,
          Mobile: "+225 07 12 34 56 78",
          Email: "k.adjoumani@cardio.ci",
          Country: "Côte d'Ivoire",
          Hospital: "CHU Cocody",
          ConsultationFee: 25000,
          Status: "Actif",
          JoiningDate: "12/01/2023",
          Image: "avatar-01.jpg",
        },
        {
          id: 2,
          Name: "Dr. Aminata Sow",
          Specialization: "Électrophysiologie",
          Degree: "MD, PhD",
          Experience: 12,
          Mobile: "+221 77 987 65 43",
          Email: "a.sow@cardio.sn",
          Country: "Sénégal",
          Hospital: "Hôpital Principal Dakar",
          ConsultationFee: 30000,
          Status: "Actif",
          JoiningDate: "05/03/2023",
          Image: "avatar-02.jpg",
        },
        {
          id: 3,
          Name: "Dr. Jean-Marc Touré",
          Specialization: "Insuffisance cardiaque",
          Degree: "MD, MSc",
          Experience: 20,
          Mobile: "+225 05 45 67 89 01",
          Email: "jm.toure@cardio.ci",
          Country: "Côte d'Ivoire",
          Hospital: "CHU Treichville",
          ConsultationFee: 28000,
          Status: "Actif",
          JoiningDate: "18/02/2023",
          Image: "avatar-03.jpg",
        },
        {
          id: 4,
          Name: "Dr. Fatoumata Diarra",
          Specialization: "Imagerie cardiaque",
          Degree: "MD",
          Experience: 8,
          Mobile: "+223 76 12 34 56",
          Email: "f.diarra@cardio.ml",
          Country: "Mali",
          Hospital: "Hôpital du Point G",
          ConsultationFee: 22000,
          Status: "Actif",
          JoiningDate: "22/04/2023",
          Image: "avatar-04.jpg",
        },
        {
          id: 5,
          Name: "Dr. Mamadou Koné",
          Specialization: "Cardiologie générale",
          Degree: "MD, FESC",
          Experience: 18,
          Mobile: "+226 70 98 76 54",
          Email: "m.kone@cardio.bf",
          Country: "Burkina Faso",
          Hospital: "CHU Yalgado",
          ConsultationFee: 20000,
          Status: "Actif",
          JoiningDate: "10/06/2023",
          Image: "avatar-05.jpg",
        },
        {
          id: 6,
          Name: "Dr. Marie Gbagbo",
          Specialization: "Cardiologie interventionnelle",
          Degree: "MD, PhD, FESC",
          Experience: 22,
          Mobile: "+225 01 23 45 67 89",
          Email: "m.gbagbo@cardio.ci",
          Country: "Côte d'Ivoire",
          Hospital: "Polyclinique Internationale",
          ConsultationFee: 35000,
          Status: "Actif",
          JoiningDate: "15/01/2023",
          Image: "avatar-06.jpg",
        }
      ],
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
      if (!this.searchQuery) return this.data;
      return this.data.filter(d =>
        d.Name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.Email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        d.Specialization.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      const modal = new bootstrap.Modal(document.getElementById('doctorModal'));
      modal.show();
    },
    openEditModal(doctor) {
      this.isEditMode = true;
      this.formData = { ...doctor };
      const modal = new bootstrap.Modal(document.getElementById('doctorModal'));
      modal.show();
    },
    resetForm() {
      this.formData = {
        id: null,
        Name: "",
        Specialization: "",
        Degree: "",
        Mobile: "",
        Email: "",
        Country: "",
        Hospital: "",
        Experience: null,
        ConsultationFee: null,
        Status: "Actif",
        Bio: "",
        JoiningDate: "",
        Image: "avatar-01.jpg"
      };
    },
    submitForm() {
      if (!this.formData.Name || !this.formData.Mobile || !this.formData.Email) {
        this.$toast.error('Veuillez remplir tous les champs obligatoires');
        return;
      }

      if (this.isEditMode) {
        const index = this.data.findIndex(d => d.id === this.formData.id);
        if (index !== -1) {
          this.data[index] = { ...this.formData };
          this.$toast.success('Cardiologue mis à jour avec succès');
        }
      } else {
        const newDoctor = {
          ...this.formData,
          id: this.data.length + 1,
          JoiningDate: new Date().toLocaleDateString('fr-FR')
        };
        this.data.push(newDoctor);
        this.$toast.success('Cardiologue ajouté avec succès');
      }

      const modal = bootstrap.Modal.getInstance(document.getElementById('doctorModal'));
      modal.hide();
      this.resetForm();
    },
    deleteDoctor(id) {
      this.deleteId = id;
      const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
      modal.show();
    },
    confirmDelete() {
      this.data = this.data.filter(d => d.id !== this.deleteId);
      this.$toast.success('Cardiologue supprimé avec succès');

      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      modal.hide();
      this.deleteId = null;
    }
  }
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
