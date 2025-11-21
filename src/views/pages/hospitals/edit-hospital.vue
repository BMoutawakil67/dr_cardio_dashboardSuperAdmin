<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="edit-hospital" />

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Informations de l'Hôpital</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Nom de l'établissement <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.name"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Type d'établissement <span class="login-danger">*</span></label>
                      <vue-select :options="types" v-model="hospital.type" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Pays <span class="login-danger">*</span></label>
                      <vue-select :options="countries" v-model="hospital.country" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Ville <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.city"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Adresse</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.address"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Email <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="email"
                        v-model="hospital.email"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Téléphone <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.phone"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Responsable de l'Hôpital</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Nom du responsable <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.responsable"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Email du responsable</label>
                      <input
                        class="form-control"
                        type="email"
                        v-model="hospital.responsableEmail"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Téléphone du responsable</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="hospital.responsablePhone"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Informations du Contrat</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Statut du partenariat <span class="login-danger">*</span></label>
                      <vue-select :options="statuses" v-model="hospital.status" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Date de début du contrat</label>
                      <input
                        class="form-control"
                        type="date"
                        v-model="hospital.contractStartDate"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Date de fin du contrat</label>
                      <input
                        class="form-control"
                        type="date"
                        v-model="hospital.contractEndDate"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Commission plateforme (%)</label>
                      <input
                        class="form-control"
                        type="number"
                        min="0"
                        max="100"
                        v-model="hospital.commission"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Nombre de cardiologues autorisés</label>
                      <input
                        class="form-control"
                        type="number"
                        min="1"
                        v-model="hospital.maxCardiologists"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-block local-forms">
                      <label>Notes / Remarques</label>
                      <textarea
                        class="form-control"
                        rows="4"
                        v-model="hospital.notes"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="doctor-submit text-end">
                      <button type="submit" class="btn btn-primary submit-form me-2">
                        Mettre à jour
                      </button>
                      <router-link to="/hospitals/hospitals-list" class="btn btn-primary cancel-form">
                        Annuler
                      </router-link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditHospital",
  data() {
    return {
      title: "Hôpitaux",
      text: "Éditer l'hôpital",
      types: ["Hôpital Public", "CHU", "Clinique Privée", "Centre Médical", "Polyclinique"],
      countries: ["Bénin", "Côte d'Ivoire", "Sénégal", "Ghana", "Togo", "Mali", "Burkina Faso"],
      statuses: ["Actif", "En négociation", "Inactif", "Suspendu"],
      hospital: {
        name: "CNHU Cotonou",
        type: "CHU",
        country: "Bénin",
        city: "Cotonou",
        address: "Avenue Clozel",
        email: "contact@cnhu-cotonou.bj",
        phone: "+229 21 30 01 23",
        responsable: "Dr Zinsou",
        responsableEmail: "zinsou@cnhu-cotonou.bj",
        responsablePhone: "+229 97 12 34 56",
        status: "Actif",
        contractStartDate: "2024-01-15",
        contractEndDate: "2026-01-15",
        commission: 33.33,
        maxCardiologists: 15,
        notes: "Partenariat stratégique prioritaire"
      }
    };
  },
  mounted() {
    // Charger les données de l'hôpital en fonction de l'ID
    const hospitalId = this.$route.query.id;
    if (hospitalId) {
      this.loadHospital(hospitalId);
    }
  },
  methods: {
    loadHospital(id) {
      // Simuler le chargement des données
      console.log("Chargement de l'hôpital ID:", id);
    },
    submitForm() {
      console.log("Hôpital à mettre à jour:", this.hospital);
      this.$toast.success("Hôpital mis à jour avec succès!");
      this.$router.push("/hospitals/hospitals-list");
    }
  }
};
</script>
