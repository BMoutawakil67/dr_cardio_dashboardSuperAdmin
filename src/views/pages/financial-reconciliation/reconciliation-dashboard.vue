<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="reconciliation-dashboard" />

      <!-- Statistiques principales -->
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/empty-wallet.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Transactions App</h4>
              <h2>38.4M F</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>18%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/calendar.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Transactions Banque</h4>
              <h2>37.9M F</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>17%</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/scissor.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Écarts détectés</h4>
              <h2>12</h2>
              <p><span class="negative-view"><i class="feather-arrow-down-right me-1"></i>500K F</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-boxs comman-flex-center">
              <img src="@/assets/img/icons/profile-add.svg" alt="" />
            </div>
            <div class="dash-content dash-count">
              <h4>Taux de concordance</h4>
              <h2>98.7%</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>0.3%</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparateur de flux -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Comparateur de Flux - Novembre 2025</h4>
              <div class="doctor-submit">
                <button type="button" class="btn btn-primary btn-sm me-2" @click="syncData">
                  <i class="fa fa-sync"></i> Synchroniser
                </button>
                <button type="button" class="btn btn-success btn-sm" @click="exportReport">
                  <i class="fa fa-download"></i> Exporter
                </button>
              </div>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th>Transactions</th>
                      <th>Montant Total</th>
                      <th>Succès</th>
                      <th>Échecs</th>
                      <th>En attente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Base de données App</strong></td>
                      <td>1,547</td>
                      <td class="text-success">38,450,000 F</td>
                      <td>1,498 (96.8%)</td>
                      <td>49 (3.2%)</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><strong>MTN Mobile Money</strong></td>
                      <td>1,042</td>
                      <td class="text-success">26,145,000 F</td>
                      <td>1,025 (98.4%)</td>
                      <td>17 (1.6%)</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><strong>Moov Money</strong></td>
                      <td>428</td>
                      <td class="text-success">10,720,000 F</td>
                      <td>420 (98.1%)</td>
                      <td>8 (1.9%)</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td><strong>Stripe (Cartes)</strong></td>
                      <td>77</td>
                      <td class="text-success">1,585,000 F</td>
                      <td>73 (94.8%)</td>
                      <td>4 (5.2%)</td>
                      <td>0</td>
                    </tr>
                    <tr class="table-warning">
                      <td><strong>Écart total</strong></td>
                      <td colspan="5" class="text-danger">12 transactions non concordantes (-500,000 F)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Liste des écarts -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Écarts à Traiter (12)</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>ID Transaction</th>
                      <th>Patient</th>
                      <th>Date</th>
                      <th>Montant App</th>
                      <th>Montant Banque</th>
                      <th>Écart</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="discrepancy in discrepancies" :key="discrepancy.id">
                      <td>{{ discrepancy.transactionId }}</td>
                      <td>{{ discrepancy.patient }}</td>
                      <td>{{ discrepancy.date }}</td>
                      <td>{{ discrepancy.appAmount }} F</td>
                      <td>{{ discrepancy.bankAmount }} F</td>
                      <td :class="getDiscrepancyClass(discrepancy.difference)">
                        {{ discrepancy.difference }} F
                      </td>
                      <td>
                        <span :class="getTypeClass(discrepancy.type)">{{ discrepancy.type }}</span>
                      </td>
                      <td>
                        <button class="btn btn-sm btn-success me-1" @click="validateTransaction(discrepancy.id)">
                          <i class="fa fa-check"></i>
                        </button>
                        <button class="btn btn-sm btn-warning me-1" @click="investigateTransaction(discrepancy.id)">
                          <i class="fa fa-search"></i>
                        </button>
                        <button class="btn btn-sm btn-danger" @click="rejectTransaction(discrepancy.id)">
                          <i class="fa fa-times"></i>
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

      <!-- Graphique d'évolution -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Évolution du Taux de Concordance</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="line"
                height="300"
                :options="concordanceChart.chart"
                :series="concordanceChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReconciliationDashboard",
  data() {
    return {
      title: "Réconciliation Financière",
      text: "Dashboard de réconciliation",
      discrepancies: [
        {
          id: 1,
          transactionId: "TRX-2025-11-001",
          patient: "Jean Dupont #12450",
          date: "20/11/2025 14:32",
          appAmount: "3,000",
          bankAmount: "2,900",
          difference: "-100",
          type: "Frais non déclarés"
        },
        {
          id: 2,
          transactionId: "TRX-2025-11-047",
          patient: "Marie Koffi #12449",
          date: "20/11/2025 10:15",
          appAmount: "5,000",
          bankAmount: "0",
          difference: "-5,000",
          type: "Transaction manquante"
        },
        {
          id: 3,
          transactionId: "TRX-2025-11-089",
          patient: "Paul Mensah #12448",
          date: "19/11/2025 16:45",
          appAmount: "8,000",
          bankAmount: "8,200",
          difference: "+200",
          type: "Surplus"
        }
      ],
      concordanceChart: {
        series: [{
          name: 'Taux de concordance',
          data: [96.2, 97.1, 97.8, 98.2, 98.5, 98.7]
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
        colors: ['#28a745'],
        xaxis: {
          categories: ['Juin', 'Juil', 'Aoû', 'Sep', 'Oct', 'Nov']
        },
        yaxis: {
          min: 95,
          max: 100,
          labels: {
            formatter: function(value) {
              return value.toFixed(1) + '%';
            }
          }
        }
      }
    };
  },
  methods: {
    getDiscrepancyClass(difference) {
      const amount = parseInt(difference.replace(/[^0-9-]/g, ''));
      if (amount < 0) return 'text-danger font-weight-bold';
      if (amount > 0) return 'text-warning font-weight-bold';
      return '';
    },
    getTypeClass(type) {
      const classes = {
        'Frais non déclarés': 'badge bg-warning',
        'Transaction manquante': 'badge bg-danger',
        'Surplus': 'badge bg-info',
        'Doublon': 'badge bg-secondary'
      };
      return classes[type] || 'badge bg-secondary';
    },
    validateTransaction(id) {
      this.$toast.success('Transaction validée');
      this.discrepancies = this.discrepancies.filter(d => d.id !== id);
    },
    investigateTransaction(id) {
      this.$toast.info('Ouverture de l\'investigation');
    },
    rejectTransaction(id) {
      if (confirm('Êtes-vous sûr de vouloir rejeter cette transaction ?')) {
        this.$toast.success('Transaction rejetée');
        this.discrepancies = this.discrepancies.filter(d => d.id !== id);
      }
    },
    syncData() {
      this.$toast.info('Synchronisation en cours...');
      setTimeout(() => {
        this.$toast.success('Données synchronisées avec succès');
      }, 2000);
    },
    exportReport() {
      this.$toast.success('Export du rapport en cours...');
    }
  }
};
</script>
