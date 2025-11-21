<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="create-campaign" />

      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Informations de la Campagne</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Nom de la campagne <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="campaign.name"
                        placeholder="Ex: Rappel Mesure Tension"
                        required
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Type de campagne <span class="login-danger">*</span></label>
                      <vue-select :options="types" v-model="campaign.type" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Ciblage de l'Audience</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Type d'utilisateurs <span class="login-danger">*</span></label>
                      <vue-select :options="userTypes" v-model="campaign.userType" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Abonnement</label>
                      <vue-select :options="subscriptions" v-model="campaign.subscription" placeholder="Tous" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Région</label>
                      <vue-select :options="regions" v-model="campaign.region" placeholder="Toutes" />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="alert alert-info">
                      <strong>Audience estimée:</strong> {{ estimatedAudience }} utilisateurs
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Contenu du Message</h4>
                    </div>
                  </div>

                  <div class="col-12" v-if="campaign.type === 'Email'">
                    <div class="input-block local-forms">
                      <label>Objet de l'email <span class="login-danger">*</span></label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="campaign.subject"
                        placeholder="Objet accrocheur"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="input-block local-forms">
                      <label>Message <span class="login-danger">*</span></label>
                      <textarea
                        class="form-control"
                        rows="6"
                        v-model="campaign.message"
                        :placeholder="getMessagePlaceholder()"
                        required
                      ></textarea>
                      <small class="text-muted">Caractères: {{ campaign.message.length }} / {{ maxChars }}</small>
                    </div>
                  </div>

                  <div class="col-12" v-if="campaign.type !== 'SMS'">
                    <div class="input-block local-forms">
                      <label>Lien d'action (optionnel)</label>
                      <input
                        class="form-control"
                        type="url"
                        v-model="campaign.actionLink"
                        placeholder="https://"
                      />
                    </div>
                  </div>

                  <div class="col-12" v-if="campaign.type !== 'SMS'">
                    <div class="input-block local-forms">
                      <label>Texte du bouton</label>
                      <input
                        class="form-control"
                        type="text"
                        v-model="campaign.actionText"
                        placeholder="En savoir plus"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Planification</h4>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Type d'envoi <span class="login-danger">*</span></label>
                      <vue-select :options="sendTypes" v-model="campaign.sendType" placeholder="Sélectionner" />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4" v-if="campaign.sendType === 'Programmé'">
                    <div class="input-block local-forms">
                      <label>Date d'envoi</label>
                      <input
                        class="form-control"
                        type="date"
                        v-model="campaign.sendDate"
                      />
                    </div>
                  </div>

                  <div class="col-12 col-md-6 col-xl-4" v-if="campaign.sendType === 'Programmé'">
                    <div class="input-block local-forms">
                      <label>Heure d'envoi</label>
                      <input
                        class="form-control"
                        type="time"
                        v-model="campaign.sendTime"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Aperçu</h4>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="card bg-light">
                      <div class="card-body">
                        <div v-if="campaign.type === 'Push'" class="notification-preview">
                          <div class="notification-header">
                            <strong>DocteurCardio</strong>
                            <span class="text-muted float-end">Maintenant</span>
                          </div>
                          <div class="notification-body mt-2">
                            {{ campaign.message || 'Votre message apparaîtra ici...' }}
                          </div>
                        </div>

                        <div v-else-if="campaign.type === 'Email'" class="email-preview">
                          <div class="email-header">
                            <strong>De:</strong> DocteurCardio &lt;no-reply@docteurcardio.com&gt;<br>
                            <strong>Objet:</strong> {{ campaign.subject || 'Objet de votre email' }}
                          </div>
                          <hr>
                          <div class="email-body">
                            <p>{{ campaign.message || 'Votre message apparaîtra ici...' }}</p>
                            <button v-if="campaign.actionText" class="btn btn-primary mt-3">
                              {{ campaign.actionText }}
                            </button>
                          </div>
                        </div>

                        <div v-else-if="campaign.type === 'SMS'" class="sms-preview">
                          <div class="sms-bubble">
                            <strong>DocteurCardio</strong><br>
                            {{ campaign.message || 'Votre message apparaîtra ici...' }}
                          </div>
                        </div>

                        <div v-else class="in-app-preview">
                          <div class="alert alert-primary">
                            <h5>{{ campaign.name }}</h5>
                            <p>{{ campaign.message || 'Votre message apparaîtra ici...' }}</p>
                            <button v-if="campaign.actionText" class="btn btn-sm btn-primary">
                              {{ campaign.actionText }}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12">
                    <div class="doctor-submit text-end">
                      <button type="button" class="btn btn-secondary me-2" @click="saveDraft">
                        Enregistrer en brouillon
                      </button>
                      <button type="submit" class="btn btn-primary submit-form me-2">
                        {{ campaign.sendType === 'Immédiat' ? 'Envoyer maintenant' : 'Programmer l\'envoi' }}
                      </button>
                      <router-link to="/marketing/campaigns-list" class="btn btn-outline-secondary cancel-form">
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
  name: "CreateCampaign",
  data() {
    return {
      title: "Communication & Marketing",
      text: "Créer une campagne",
      types: ["Push", "Email", "SMS", "In-App"],
      userTypes: ["Tous", "Patients uniquement", "Cardiologues uniquement", "Hôpitaux uniquement"],
      subscriptions: ["Tous", "Standard", "Premium", "Famille"],
      regions: ["Toutes", "Bénin", "Côte d'Ivoire", "Sénégal", "Ghana", "Togo", "Mali"],
      sendTypes: ["Immédiat", "Programmé"],
      campaign: {
        name: "",
        type: "Push",
        userType: "Tous",
        subscription: "Tous",
        region: "Toutes",
        subject: "",
        message: "",
        actionLink: "",
        actionText: "",
        sendType: "Immédiat",
        sendDate: "",
        sendTime: ""
      }
    };
  },
  computed: {
    estimatedAudience() {
      // Logique simplifiée pour calculer l'audience
      let total = 12480; // Total patients
      if (this.campaign.userType === "Cardiologues uniquement") {
        total = 847;
      } else if (this.campaign.userType === "Hôpitaux uniquement") {
        total = 28;
      }

      if (this.campaign.subscription === "Standard") {
        total = Math.floor(total * 0.68);
      } else if (this.campaign.subscription === "Premium") {
        total = Math.floor(total * 0.25);
      } else if (this.campaign.subscription === "Famille") {
        total = Math.floor(total * 0.07);
      }

      return total.toLocaleString();
    },
    maxChars() {
      if (this.campaign.type === "SMS") return 160;
      if (this.campaign.type === "Push") return 200;
      return 1000;
    }
  },
  methods: {
    getMessagePlaceholder() {
      const placeholders = {
        'Push': 'Message court et accrocheur pour notification push',
        'Email': 'Contenu détaillé de votre email',
        'SMS': 'Message SMS (max 160 caractères)',
        'In-App': 'Message qui apparaîtra dans l\'application'
      };
      return placeholders[this.campaign.type] || 'Votre message...';
    },
    submitForm() {
      if (this.campaign.message.length > this.maxChars) {
        this.$toast.error(`Le message ne doit pas dépasser ${this.maxChars} caractères`);
        return;
      }

      console.log("Campagne à envoyer:", this.campaign);
      const action = this.campaign.sendType === 'Immédiat' ? 'envoyée' : 'programmée';
      this.$toast.success(`Campagne ${action} avec succès!`);
      this.$router.push("/marketing/campaigns-list");
    },
    saveDraft() {
      console.log("Enregistrement en brouillon:", this.campaign);
      this.$toast.success("Campagne enregistrée en brouillon!");
      this.$router.push("/marketing/campaigns-list");
    }
  }
};
</script>

<style scoped>
.notification-preview,
.email-preview,
.sms-preview,
.in-app-preview {
  padding: 15px;
}

.notification-preview {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.email-preview {
  background: white;
  padding: 20px;
}

.sms-bubble {
  background: #e1ffc7;
  padding: 12px 16px;
  border-radius: 18px;
  max-width: 80%;
  display: inline-block;
}
</style>
