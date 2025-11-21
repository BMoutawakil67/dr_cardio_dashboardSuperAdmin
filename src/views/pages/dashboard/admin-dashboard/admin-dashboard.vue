<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="admin-dashboard" />

      <!-- Good Morning Section -->
      <div class="good-morning-blk">
        <div class="row">
          <div class="col-md-6">
            <div class="morning-user">
              <h2>Tableau de Bord Général, <span>Super Admin</span></h2>
              <p>Dernière mise à jour: {{ currentDateTime }}</p>
            </div>
          </div>
          <div class="col-md-6 position-blk">
            <div class="morning-img">
              <img src="@/assets/img/morning-img-01.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <!-- KPIs Section - Row 1 -->
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-users" style="font-size: 32px; color: #2E37A4;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Patients</h4>
              <h2>
                <vue3-autocounter
                  class="counter-up"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="12480"
                  :duration="5"
                  separator=","
                  :autoinit="true"
                />
              </h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>15%
                </span>
                vs 7 derniers jours
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-user-md" style="font-size: 32px; color: #00D3C7;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Cardiologues</h4>
              <h2>
                <vue3-autocounter
                  class="counter-up"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="847"
                  :duration="5"
                  separator=","
                  :autoinit="true"
                />
              </h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>8%
                </span>
                vs 7 derniers jours
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-hospital-o" style="font-size: 32px; color: #9C27B0;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Hôpitaux</h4>
              <h2>
                <vue3-autocounter
                  class="counter-up"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="28"
                  :duration="5"
                  separator=","
                  :autoinit="true"
                />
              </h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>5%
                </span>
                vs 7 derniers jours
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-exclamation-triangle" style="font-size: 32px; color: #FF5722;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Alertes</h4>
              <h2>
                <vue3-autocounter
                  class="counter-up"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="127"
                  :duration="5"
                  separator=","
                  :autoinit="true"
                />
              </h2>
              <p>
                <span class="negative-view">
                  <i class="fa fa-circle" style="font-size: 10px;"></i> 14 critiques
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- KPIs Section - Row 2 -->
      <div class="row">
        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-money" style="font-size: 32px; color: #4CAF50;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Revenus / Mois</h4>
              <h2>
                <vue3-autocounter
                  class="counter-up"
                  ref="counter"
                  :startAmount="0"
                  :delay="3"
                  :endAmount="38450000"
                  :duration="5"
                  separator=","
                  :autoinit="true"
                />
                <small style="font-size: 16px;"> F CFA</small>
              </h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>18%
                </span>
                vs Octobre
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-credit-card" style="font-size: 32px; color: #3F51B5;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Succès Paiement</h4>
              <h2>96.8<small style="font-size: 20px;">%</small></h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>1.2%
                </span>
                d'amélioration
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-star" style="font-size: 32px; color: #FFC107;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Satisfaction</h4>
              <h2>4.9<small style="font-size: 20px;">/5</small></h2>
              <p>
                <span style="color: #666;">
                  12,540 avis
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-sm-6 col-lg-6 col-xl-3">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <i class="fa fa-line-chart" style="font-size: 32px; color: #00BCD4;"></i>
            </div>
            <div class="dash-content dash-count">
              <h4>Uptime</h4>
              <h2>98.7<small style="font-size: 20px;">%</small></h2>
              <p>
                <span class="passive-view">
                  <i class="feather-arrow-up-right me-1"></i>0.3%
                </span>
                d'amélioration
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts Section -->
      <div class="row">
        <div class="col-12 col-md-12 col-lg-8 col-xl-8">
          <div class="card">
            <div class="card-body">
              <div class="chart-title patient-visit">
                <h4>Évolution des Inscriptions</h4>
                <div>
                  <ul class="nav chat-user-total">
                    <li>
                      <i class="fa fa-circle" style="color: #2E37A4;" aria-hidden="true"></i>
                      Patients
                    </li>
                    <li>
                      <i class="fa fa-circle" style="color: #00D3C7;" aria-hidden="true"></i>
                      Cardiologues
                    </li>
                    <li>
                      <i class="fa fa-circle" style="color: #9C27B0;" aria-hidden="true"></i>
                      Hôpitaux
                    </li>
                  </ul>
                </div>
                <div class="input-block mb-0">
                  <vue-select :options="Years" placeholder="2025" />
                </div>
              </div>

              <apexchart
                type="line"
                height="300"
                :options="evolutionChart.chart"
                :series="evolutionChart.series"
              >
              </apexchart>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-4 col-xl-4 d-flex">
          <div class="card">
            <div class="card-body">
              <div class="chart-title">
                <h4>Répartition des Revenus</h4>
              </div>
              <div id="donut-chart-dash" class="chart-user-icon">
                <apexchart
                  type="donut"
                  :options="revenueChart.chart"
                  :series="revenueChart.series"
                >
                </apexchart>
              </div>
              <div class="mt-3">
                <ul class="list-unstyled" style="font-size: 14px;">
                  <li><i class="fa fa-circle" style="color: #2E37A4;"></i> Cardiologues: 55%</li>
                  <li><i class="fa fa-circle" style="color: #00D3C7;"></i> Plateforme: 33%</li>
                  <li><i class="fa fa-circle" style="color: #FFC107;"></i> Partenaires: 7%</li>
                  <li><i class="fa fa-circle" style="color: #9C27B0;"></i> Hôpitaux: 5%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Alerts and Top Cardiologists -->
      <div class="row">
        <div class="col-12 col-md-12 col-xl-6">
          <div class="card">
            <div class="card-header" style="background-color: #FFF3E0;">
              <h4 class="card-title mb-0">
                <i class="fa fa-exclamation-triangle text-danger"></i>
                Alertes Critiques Récentes
              </h4>
            </div>
            <div class="card-body">
              <div class="alert alert-danger d-flex align-items-center mb-3">
                <i class="fa fa-circle me-2" style="font-size: 10px;"></i>
                <div>
                  <strong>14 cas de HTA sévère</strong>
                  <p class="mb-0">Intervention requise immédiatement</p>
                </div>
              </div>
              <div class="alert alert-warning d-flex align-items-center mb-3">
                <i class="fa fa-circle me-2" style="font-size: 10px;"></i>
                <div>
                  <strong>42 alertes modérées</strong>
                  <p class="mb-0">Surveillance nécessaire dans les 24h</p>
                </div>
              </div>
              <div class="alert alert-info d-flex align-items-center mb-0">
                <i class="fa fa-circle me-2" style="font-size: 10px;"></i>
                <div>
                  <strong>71 alertes légères</strong>
                  <p class="mb-0">Suivi de routine</p>
                </div>
              </div>
              <div class="text-center mt-3">
                <router-link to="/alerts/critical-alerts" class="btn btn-primary btn-sm">
                  Voir toutes les alertes
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-md-12 col-xl-6">
          <div class="card top-departments">
            <div class="card-header">
              <h4 class="card-title mb-0">
                <i class="fa fa-trophy text-warning"></i>
                Cardiologues les Plus Actifs
              </h4>
            </div>
            <div class="card-body">
              <div class="activity-top">
                <div class="activity-boxs comman-flex-center" style="background-color: #FFD700;">
                  <span style="font-size: 20px; font-weight: bold;">1</span>
                </div>
                <div class="departments-list">
                  <h4>Dr. Kouassi Jean</h4>
                  <p>214 patients actifs</p>
                </div>
              </div>
              <div class="activity-top">
                <div class="activity-boxs comman-flex-center" style="background-color: #C0C0C0;">
                  <span style="font-size: 20px; font-weight: bold;">2</span>
                </div>
                <div class="departments-list">
                  <h4>Dr. Diallo Aminata</h4>
                  <p>178 patients actifs</p>
                </div>
              </div>
              <div class="activity-top">
                <div class="activity-boxs comman-flex-center" style="background-color: #CD7F32;">
                  <span style="font-size: 20px; font-weight: bold;">3</span>
                </div>
                <div class="departments-list">
                  <h4>Dr. Mensah Paul</h4>
                  <p>150 patients actifs</p>
                </div>
              </div>
              <div class="activity-top">
                <div class="activity-boxs comman-flex-center">
                  <span style="font-size: 18px;">4</span>
                </div>
                <div class="departments-list">
                  <h4>Dr. Traoré Fatou</h4>
                  <p>142 patients actifs</p>
                </div>
              </div>
              <div class="activity-top mb-0">
                <div class="activity-boxs comman-flex-center">
                  <span style="font-size: 18px;">5</span>
                </div>
                <div class="departments-list">
                  <h4>Dr. Ndiaye Ibrahima</h4>
                  <p>138 patients actifs</p>
                </div>
              </div>
              <div class="text-center mt-3">
                <router-link to="/doctors/doctors-list" class="btn btn-outline-primary btn-sm">
                  Voir le classement complet
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Chart -->
      <div class="row">
        <div class="col-12 col-xl-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title d-inline-block">Activité Récente (7 derniers jours)</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="200"
                :options="activityChart.chart"
                :series="activityChart.series"
              >
              </apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Patients -->
      <div class="row">
        <div class="col-12 col-xl-12">
          <div class="card">
            <div class="card-header pb-0">
              <h4 class="card-title d-inline-block">Patients Récents</h4>
              <router-link to="/patients/patients-list" class="float-end patient-views">
                Voir tous
              </router-link>
            </div>
            <div class="card-block table-dash">
              <div class="table-responsive">
                <recent-patients></recent-patients>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { evolutionChart, revenueChart, activityChart } from "./data";

export default {
  data() {
    return {
      title: "Dashboard",
      text: "Dashboard Super Admin DocteurCardio",
      Years: ["2025", "2024", "2023", "2022"],
      evolutionChart: evolutionChart,
      revenueChart: revenueChart,
      activityChart: activityChart,
      currentDateTime: this.getCurrentDateTime(),
    };
  },
  methods: {
    getCurrentDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      const time = now.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      return `${date} ${time}`;
    },
  },
  mounted() {
    // Auto-refresh every 30 seconds
    setInterval(() => {
      this.currentDateTime = this.getCurrentDateTime();
    }, 30000);
  },
};
</script>

<style scoped>
.dash-widget {
  transition: transform 0.2s;
}

.dash-widget:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.activity-top {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.2s;
}

.activity-top:hover {
  background-color: #f8f9fa;
}

.passive-view {
  color: #4caf50;
}

.negative-view {
  color: #f44336;
}
</style>
