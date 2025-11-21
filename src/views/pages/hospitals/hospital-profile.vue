<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="hospital-profile" />

      <div class="row">
        <div class="col-sm-12">
          <!-- Informations générales -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Informations Générales</h4>
              <router-link :to="`/hospitals/edit-hospital?id=${hospital.id}`" class="btn btn-primary btn-sm">
                <i class="fa fa-edit"></i> Éditer
              </router-link>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <div class="profile-view">
                    <div class="profile-info-left">
                      <h3 class="user-name m-t-0">{{ hospital.name }}</h3>
                      <div class="staff-id">ID : #{{ hospital.id }}</div>
                      <div class="staff-msg">
                        <span :class="getStatusClass(hospital.status)">
                          {{ hospital.status }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="mt-3">
                    <h5>Coordonnées</h5>
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td><strong>Type:</strong></td>
                          <td>{{ hospital.type }}</td>
                        </tr>
                        <tr>
                          <td><strong>Pays:</strong></td>
                          <td>{{ hospital.country }}</td>
                        </tr>
                        <tr>
                          <td><strong>Ville:</strong></td>
                          <td>{{ hospital.city }}</td>
                        </tr>
                        <tr>
                          <td><strong>Adresse:</strong></td>
                          <td>{{ hospital.address }}</td>
                        </tr>
                        <tr>
                          <td><strong>Email:</strong></td>
                          <td>{{ hospital.email }}</td>
                        </tr>
                        <tr>
                          <td><strong>Téléphone:</strong></td>
                          <td>{{ hospital.phone }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="col-md-6">
                  <h5>Responsable</h5>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td><strong>Nom:</strong></td>
                        <td>{{ hospital.responsable }}</td>
                      </tr>
                      <tr>
                        <td><strong>Email:</strong></td>
                        <td>{{ hospital.responsableEmail }}</td>
                      </tr>
                      <tr>
                        <td><strong>Téléphone:</strong></td>
                        <td>{{ hospital.responsablePhone }}</td>
                      </tr>
                    </tbody>
                  </table>

                  <h5 class="mt-4">Contrat</h5>
                  <table class="table table-borderless">
                    <tbody>
                      <tr>
                        <td><strong>Date début:</strong></td>
                        <td>{{ hospital.contractStartDate }}</td>
                      </tr>
                      <tr>
                        <td><strong>Date fin:</strong></td>
                        <td>{{ hospital.contractEndDate }}</td>
                      </tr>
                      <tr>
                        <td><strong>Commission:</strong></td>
                        <td>{{ hospital.commission }}%</td>
                      </tr>
                      <tr>
                        <td><strong>Max cardiologues:</strong></td>
                        <td>{{ hospital.maxCardiologists }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Statistiques -->
          <div class="row">
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                  <img src="@/assets/img/icons/profile-add.svg" alt="" />
                </div>
                <div class="dash-content dash-count">
                  <h4>Cardiologues</h4>
                  <h2>{{ hospital.cardiologists }}</h2>
                  <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>12%</span></p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                  <img src="@/assets/img/icons/empty-wallet.svg" alt="" />
                </div>
                <div class="dash-content dash-count">
                  <h4>Patients</h4>
                  <h2>{{ hospital.patients }}</h2>
                  <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>8%</span></p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                  <img src="@/assets/img/icons/calendar.svg" alt="" />
                </div>
                <div class="dash-content dash-count">
                  <h4>Revenus/mois</h4>
                  <h2>{{ hospital.revenue }} F</h2>
                  <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>15%</span></p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6 col-12">
              <div class="dash-widget">
                <div class="dash-boxs comman-flex-center">
                  <img src="@/assets/img/icons/scissor.svg" alt="" />
                </div>
                <div class="dash-content dash-count">
                  <h4>Taux satisfaction</h4>
                  <h2>4.8⭐</h2>
                  <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>95%</span></p>
                </div>
              </div>
            </div>
          </div>

          <!-- Liste des cardiologues -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Cardiologues de l'Établissement</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Spécialité</th>
                      <th>Patients</th>
                      <th>Note</th>
                      <th>Statut</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="doctor in doctors" :key="doctor.id">
                      <td>
                        <h2 class="table-avatar">
                          <a class="avatar avatar-sm me-2">
                            <img class="avatar-img rounded-circle" :src="doctor.image" alt="" />
                          </a>
                          <router-link to="/doctors/doctor-profile">{{ doctor.name }}</router-link>
                        </h2>
                      </td>
                      <td>{{ doctor.specialty }}</td>
                      <td>{{ doctor.patients }}</td>
                      <td>
                        <i class="fa fa-star text-warning"></i> {{ doctor.rating }}
                      </td>
                      <td>
                        <span :class="getStatusClass(doctor.status)">{{ doctor.status }}</span>
                      </td>
                      <td>
                        <router-link to="/doctors/doctor-profile" class="btn btn-sm btn-primary">
                          Voir
                        </router-link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Graphique d'évolution -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Évolution des Revenus (12 derniers mois)</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="300"
                :options="revenueChart.chart"
                :series="revenueChart.series"
              ></apexchart>
            </div>
          </div>

          <!-- Notes -->
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Notes / Remarques</h4>
            </div>
            <div class="card-body">
              <p>{{ hospital.notes || "Aucune note" }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HospitalProfile",
  data() {
    return {
      title: "Hôpitaux",
      text: "Profil de l'hôpital",
      hospital: {
        id: 1,
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
        contractStartDate: "15/01/2024",
        contractEndDate: "15/01/2026",
        commission: 33.33,
        maxCardiologists: 15,
        cardiologists: 12,
        patients: 1250,
        revenue: "900,000",
        notes: "Partenariat stratégique prioritaire. Excellent taux de satisfaction."
      },
      doctors: [
        {
          id: 1,
          name: "Dr. Kouassi Jean",
          specialty: "Cardiologie Interventionnelle",
          patients: 214,
          rating: 4.9,
          status: "Actif",
          image: require("@/assets/img/profiles/avatar-01.jpg")
        },
        {
          id: 2,
          name: "Dr. Mensah Paul",
          specialty: "Cardiologie Pédiatrique",
          patients: 156,
          rating: 4.8,
          status: "Actif",
          image: require("@/assets/img/profiles/avatar-02.jpg")
        },
        {
          id: 3,
          name: "Dr. Amina Diop",
          specialty: "Échocardiographie",
          patients: 189,
          rating: 4.9,
          status: "Actif",
          image: require("@/assets/img/profiles/avatar-03.jpg")
        }
      ],
      revenueChart: {
        series: [{
          name: 'Revenus',
          data: [650000, 720000, 680000, 750000, 820000, 880000, 850000, 900000, 920000, 890000, 950000, 900000]
        }],
        chart: {
          type: 'line',
          height: 300,
          toolbar: {
            show: false
          }
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        colors: ['#2E37A4'],
        xaxis: {
          categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
        },
        yaxis: {
          labels: {
            formatter: function(value) {
              return value.toLocaleString() + ' F';
            }
          }
        }
      }
    };
  },
  mounted() {
    const hospitalId = this.$route.query.id;
    if (hospitalId) {
      this.loadHospital(hospitalId);
    }
  },
  methods: {
    loadHospital(id) {
      console.log("Chargement de l'hôpital ID:", id);
    },
    getStatusClass(status) {
      const classes = {
        'Actif': 'custom-badge status-green',
        'En négociation': 'custom-badge status-orange',
        'Inactif': 'custom-badge status-pink',
        'Suspendu': 'custom-badge status-pink'
      };
      return classes[status] || 'custom-badge';
    }
  }
};
</script>

<style scoped>
.profile-view {
  margin-bottom: 20px;
}
</style>
