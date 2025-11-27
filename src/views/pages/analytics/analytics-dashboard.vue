<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="analytics-dashboard" />

      <!-- KPIs Principaux -->
      <div class="row">
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Patients</h4>
              <h2>12,480</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>7.2%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Cardiologues</h4>
              <h2>847</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>5.9%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Mesures</h4>
              <h2>1.2M</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>12%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Success Rate</h4>
              <h2>96.8%</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>1.2%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Rétention</h4>
              <h2>89.5%</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>2.1%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Uptime</h4>
              <h2>98.7%</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>0.3%</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Graphique de croissance -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Croissance des Utilisateurs (12 mois)</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="350"
                :options="growthChart.chart"
                :series="growthChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- Santé & Engagement -->
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Santé Cardiovasculaire des Patients</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="pie"
                height="300"
                :options="healthChart.chart"
                :series="healthChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Répartition Géographique</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="donut"
                height="300"
                :options="geoChart.chart"
                :series="geoChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- Plateformes & Engagement -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Statistiques d'Engagement</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-3">
                  <h6>Observance traitement</h6>
                  <div class="progress" style="height: 20px;">
                    <div class="progress-bar bg-success" style="width: 85%">85%</div>
                  </div>
                </div>
                <div class="col-md-3">
                  <h6>Mesures quotidiennes</h6>
                  <h3>2.3 <small>/jour</small></h3>
                </div>
                <div class="col-md-3">
                  <h6>Messages envoyés</h6>
                  <h3>45,782 <small>ce mois</small></h3>
                </div>
                <div class="col-md-3">
                  <h6>Téléconsultations</h6>
                  <h3>1,245 <small>ce mois</small></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Plateformes utilisées -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Plateformes Utilisées</h4>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <h6>Android</h6>
                  <div class="progress" style="height: 25px;">
                    <div class="progress-bar bg-success" style="width: 78%">78%</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <h6>iOS</h6>
                  <div class="progress" style="height: 25px;">
                    <div class="progress-bar bg-info" style="width: 20%">20%</div>
                  </div>
                </div>
                <div class="col-md-4">
                  <h6>Web</h6>
                  <div class="progress" style="height: 25px;">
                    <div class="progress-bar bg-warning" style="width: 2%">2%</div>
                  </div>
                </div>
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
  name: "AnalyticsDashboard",
  data() {
    return {
      title: "Analytics & Statistiques",
      text: "Vue d'ensemble",
      growthChart: {
        series: [
          { name: 'Patients', data: [6850, 7420, 8100, 8950, 9750, 10420, 10890, 11250, 11680, 12020, 12350, 12480] },
          { name: 'Cardiologues', data: [450, 485, 520, 565, 612, 658, 702, 748, 785, 810, 832, 847] },
          { name: 'Hôpitaux', data: [12, 14, 16, 18, 20, 22, 23, 25, 26, 27, 27, 28] }
        ],
        chart: {
          type: 'line',
          height: 350,
          toolbar: { show: false }
        },
        stroke: { curve: 'smooth', width: 3 },
        colors: ['#2E37A4', '#28a745', '#ffc107'],
        xaxis: { categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'] }
      },
      healthChart: {
        series: [65, 25, 10],
        chart: { type: 'pie', height: 300 },
        labels: ['Tension normale', 'HTA modérée', 'HTA sévère'],
        colors: ['#28a745', '#ffc107', '#dc3545']
      },
      geoChart: {
        series: [4358, 3486, 2244, 1494, 898],
        chart: { type: 'donut', height: 300 },
        labels: ['Bénin (35%)', 'Côte d\'Ivoire (28%)', 'Sénégal (18%)', 'Ghana (12%)', 'Autres (7%)'],
        colors: ['#2E37A4', '#28a745', '#ffc107', '#17a2b8', '#6c757d']
      }
    };
  }
};
</script>
