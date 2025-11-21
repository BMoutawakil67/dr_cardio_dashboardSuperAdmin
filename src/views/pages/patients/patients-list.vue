<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="patients-list" />
      <!-- /Page Header -->

      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <!-- Table Header -->
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Liste des Patients</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Rechercher patient..."
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
                            ><img src="@/assets/img/icons/plus.svg" alt=""
                          /></button>
                          <a
                            href="javascript:;"
                            class="btn btn-primary doctor-refresh ms-2"
                            ><img src="@/assets/img/icons/re-fresh.svg" alt=""
                          /></a>
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
              <!-- /Table Header -->

              <div class="table-responsive">
                <a-table
                  class="table border-0 custom-table comman-table datatable mb-0"
                  :columns="columns"
                  :data-source="filteredData"
                  :row-selection="{}"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Name'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="28"
                            height="28"
                            :src="require(`@/assets/img/profiles/${record.Image}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.Name }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Mobile'">
                      <div><a href="javascript:;">+1 23 456890</a></div>
                    </template>
                    <template v-else-if="column.key === 'action'">
                      <div class="text-end">
                        <div class="dropdown dropdown-action">
                          <a
                            href="javascript:;"
                            class="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="fa fa-ellipsis-v"></i
                          ></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="openEditModal(record)"
                              ><i class="fa-solid fa-pen-to-square m-r-5"></i>
                              Modifier</a
                            >
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              @click="deletePatient(record.id)"
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

      <!-- Modal Ajouter/Éditer Patient -->
      <div class="modal fade" id="patientModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ isEditMode ? 'Éditer le patient' : 'Nouveau patient' }}</h5>
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
                      <label>Genre <span class="login-danger">*</span></label>
                      <vue-select
                        :options="['Homme', 'Femme', 'Autre']"
                        v-model="formData.Gender"
                        placeholder="Sélectionner genre"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Âge</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="formData.Age"
                        min="0"
                        max="120"
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
                      <label>Statut d'abonnement</label>
                      <vue-select
                        :options="['Standard', 'Premium', 'Famille', 'Essai']"
                        v-model="formData.Subscription"
                        placeholder="Sélectionner statut"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label>Pathologie principale</label>
                      <vue-select
                        :options="['Hypertension', 'Arythmie', 'Insuffisance cardiaque', 'Angine', 'Autre']"
                        v-model="formData.Condition"
                        placeholder="Sélectionner pathologie"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="input-block local-forms">
                      <label>Notes médicales</label>
                      <textarea
                        class="form-control"
                        v-model="formData.Notes"
                        rows="3"
                        placeholder="Notes additionnelles..."
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
              <p>Êtes-vous sûr de vouloir supprimer ce patient ?</p>
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
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Genre",
    dataIndex: "Gender",
    key: "Gender",
    sorter: {
      compare: (a, b) => {
        return a.Gender > b.Gender ? -1 : b.Gender > a.Gender ? 1 : 0;
      },
    },
  },
  {
    title: "Âge",
    dataIndex: "Age",
    sorter: {
      compare: (a, b) => a.Age - b.Age,
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
    title: "Abonnement",
    dataIndex: "Subscription",
    sorter: {
      compare: (a, b) => {
        a = a.Subscription.toLowerCase();
        b = b.Subscription.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Pathologie",
    dataIndex: "Condition",
    sorter: {
      compare: (a, b) => {
        a = a.Condition.toLowerCase();
        b = b.Condition.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date d'inscription",
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
    sorter: true,
    class: "text-end",
  },
];

export default {
  data() {
    return {
      title: "Patients",
      text: "Liste des Patients",
      searchQuery: "",
      isEditMode: false,
      deleteId: null,
      formData: {
        id: null,
        Name: "",
        Gender: "",
        Age: null,
        Mobile: "",
        Email: "",
        Country: "",
        Subscription: "Standard",
        Condition: "",
        Notes: "",
        JoiningDate: "",
        Image: "avatar-01.jpg"
      },
      data: [
        {
          id: 1,
          Name: "Kofi Mensah",
          Gender: "Homme",
          Age: 58,
          Mobile: "+225 07 45 12 34 56",
          Email: "kofi.mensah@email.com",
          Country: "Côte d'Ivoire",
          Subscription: "Premium",
          Condition: "Hypertension",
          JoiningDate: "15/03/2024",
          Image: "avatar-01.jpg",
        },
        {
          id: 2,
          Name: "Amina Diallo",
          Gender: "Femme",
          Age: 45,
          Mobile: "+221 77 123 45 67",
          Email: "amina.diallo@email.com",
          Country: "Sénégal",
          Subscription: "Standard",
          Condition: "Arythmie",
          JoiningDate: "22/04/2024",
          Image: "avatar-02.jpg",
        },
        {
          id: 3,
          Name: "Jean-Pierre Kouassi",
          Gender: "Homme",
          Age: 62,
          Mobile: "+225 05 87 65 43 21",
          Email: "jp.kouassi@email.com",
          Country: "Côte d'Ivoire",
          Subscription: "Famille",
          Condition: "Insuffisance cardiaque",
          JoiningDate: "10/02/2024",
          Image: "avatar-03.jpg",
        },
        {
          id: 4,
          Name: "Fatou Traoré",
          Gender: "Femme",
          Age: 39,
          Mobile: "+223 76 54 32 10",
          Email: "fatou.traore@email.com",
          Country: "Mali",
          Subscription: "Premium",
          Condition: "Hypertension",
          JoiningDate: "05/05/2024",
          Image: "avatar-04.jpg",
        },
        {
          id: 5,
          Name: "Ibrahim Cissé",
          Gender: "Homme",
          Age: 51,
          Mobile: "+226 70 12 34 56",
          Email: "ibrahim.cisse@email.com",
          Country: "Burkina Faso",
          Subscription: "Standard",
          Condition: "Angine",
          JoiningDate: "18/01/2024",
          Image: "avatar-05.jpg",
        },
        {
          id: 6,
          Name: "Marie Koffi",
          Gender: "Femme",
          Age: 34,
          Mobile: "+225 01 98 76 54 32",
          Email: "marie.koffi@email.com",
          Country: "Côte d'Ivoire",
          Subscription: "Essai",
          Condition: "Autre",
          JoiningDate: "29/06/2024",
          Image: "avatar-06.jpg",
        }
      ],
      columns,
    };
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) return this.data;
      return this.data.filter(p =>
        p.Name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.Email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        p.Mobile.includes(this.searchQuery)
      );
    }
  },
  methods: {
    openAddModal() {
      this.isEditMode = false;
      this.resetForm();
      const modal = new bootstrap.Modal(document.getElementById('patientModal'));
      modal.show();
    },
    openEditModal(patient) {
      this.isEditMode = true;
      this.formData = { ...patient };
      const modal = new bootstrap.Modal(document.getElementById('patientModal'));
      modal.show();
    },
    resetForm() {
      this.formData = {
        id: null,
        Name: "",
        Gender: "",
        Age: null,
        Mobile: "",
        Email: "",
        Country: "",
        Subscription: "Standard",
        Condition: "",
        Notes: "",
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
        const index = this.data.findIndex(p => p.id === this.formData.id);
        if (index !== -1) {
          this.data[index] = { ...this.formData };
          this.$toast.success('Patient mis à jour avec succès');
        }
      } else {
        const newPatient = {
          ...this.formData,
          id: this.data.length + 1,
          JoiningDate: new Date().toLocaleDateString('fr-FR')
        };
        this.data.push(newPatient);
        this.$toast.success('Patient ajouté avec succès');
      }

      const modal = bootstrap.Modal.getInstance(document.getElementById('patientModal'));
      modal.hide();
      this.resetForm();
    },
    deletePatient(id) {
      this.deleteId = id;
      const modal = new bootstrap.Modal(document.getElementById('deleteModal'));
      modal.show();
    },
    confirmDelete() {
      this.data = this.data.filter(p => p.id !== this.deleteId);
      this.$toast.success('Patient supprimé avec succès');

      const modal = bootstrap.Modal.getInstance(document.getElementById('deleteModal'));
      modal.hide();
      this.deleteId = null;
    }
  }
};
</script>
