<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="monitoring-dashboard" />

      <!-- KPIs Qualité de Service -->
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/calendar.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Appels ce mois</h4>
              <h2>1,245</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>22%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/profile-add.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Taux de succès</h4>
              <h2>94.2%</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>2.1%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/scissor.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Durée moyenne</h4>
              <h2>18 min</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>1 min</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/empty-wallet.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Qualité moyenne</h4>
              <h2>4.7⭐</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>0.2</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Logs d'appels en temps réel -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Logs d'Appels (Temps réel)</h4>
              <button class="btn btn-sm btn-primary" @click="refreshLogs">
                <i class="fa fa-sync"></i> Actualiser
              </button>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Heure</th>
                      <th>Patient</th>
                      <th>Cardiologue</th>
                      <th>Durée</th>
                      <th>Qualité</th>
                      <th>Statut</th>
                      <th>Problèmes</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="call in calls" :key="call.id">
                      <td>{{ call.time }}</td>
                      <td>{{ call.patient }}</td>
                      <td>{{ call.doctor }}</td>
                      <td>{{ call.duration }}</td>
                      <td>
                        <div class="progress" style="height: 8px;">
                          <div class="progress-bar" :class="getQualityClass(call.quality)"
                               :style="{width: call.quality + '%'}">
                          </div>
                        </div>
                        <small>{{ call.quality }}%</small>
                      </td>
                      <td>
                        <span :class="getStatusClass(call.status)">{{ call.status }}</span>
                      </td>
                      <td>
                        <span v-if="call.issues" class="text-danger">{{ call.issues }}</span>
                        <span v-else class="text-success">Aucun</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-info" @click="viewDetails(call.id)">
                          <i class="fa fa-eye"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Graphiques de performance -->
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Évolution du Taux de Succès</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="250"
                :options="successRateChart.chart"
                :series="successRateChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Répartition des Problèmes</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="250"
                :options="issuesChart.chart"
                :series="issuesChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- Alertes WebRTC -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Alertes Qualité WebRTC</h4>
            </div>
            <div class="card-body">
              <div class="alert alert-warning" v-for="alert in alerts" :key="alert.id">
                <strong><i class="fa fa-warning"></i> {{ alert.title }}</strong><br>
                {{ alert.message }}
                <small class="text-muted float-end">{{ alert.time }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonitoringDashboard",
  data() {
    return {
      title: "Monitoring Téléconsultations",
      text: "Qualité de service WebRTC",
      calls: [
        {
          id: 1,
          time: "14:32",
          patient: "Jean Dupont #12450",
          doctor: "Dr. Kouassi",
          duration: "22 min",
          quality: 95,
          status: "Terminé",
          issues: null
        },
        {
          id: 2,
          time: "14:15",
          patient: "Marie Koffi #12449",
          doctor: "Dr. Diallo",
          duration: "18 min",
          quality: 87,
          status: "Terminé",
          issues: "Perte de paquets: 5%"
        },
        {
          id: 3,
          time: "13:45",
          patient: "Paul Mensah #12448",
          doctor: "Dr. Amina",
          duration: "0 min",
          quality: 0,
          status: "Échec",
          issues: "Connexion impossible"
        }
      ],
      alerts: [
        {
          id: 1,
          title: "Pic de latence détecté",
          message: "Latence moyenne > 300ms pour la région Bénin",
          time: "Il y a 15 min"
        },
        {
          id: 2,
          title: "Taux d'échec élevé",
          message: "12% d'échecs de connexion dans les 2 dernières heures",
          time: "Il y a 1h"
        }
      ],
      successRateChart: {
        series: [{
          name: 'Taux de succès',
          data: [92, 93, 94, 93, 95, 94]
        }],
        chart: {
          type: 'line',
          height: 250,
          toolbar: { show: false }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        colors: ['#28a745'],
        xaxis: {
          categories: ['Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov']
        },
        yaxis: {
          min: 90,
          max: 100
        }
      },
      issuesChart: {
        series: [45, 25, 20, 10],
        chart: {
          type: 'donut',
          height: 250
        },
        labels: ['Réseau patient', 'Serveur WebRTC', 'App mobile', 'Autres'],
        colors: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
      }
    };
  },
  methods: {
    getQualityClass(quality) {
      if (quality >= 80) return 'bg-success';
      if (quality >= 60) return 'bg-warning';
      return 'bg-danger';
    },
    getStatusClass(status) {
      const classes = {
        'Terminé': 'badge bg-success',
        'En cours': 'badge bg-primary',
        'Échec': 'badge bg-danger'
      };
      return classes[status] || 'badge bg-secondary';
    },
    refreshLogs() {
      this.$toast.info('Actualisation des logs...');
    },
    viewDetails(id) {
      this.$toast.info('Détails de l\'appel #' + id);
    }
  }
};
</script>
