<template>
  <div class="page-wrapper">
    <div class="content">
      <breadcrumb :title="title" :text="text" path="tickets-list" />

      <!-- KPIs Support -->
      <div class="row">
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Tickets ouverts</h4>
              <h2>15</h2>
              <p><span class="negative-view"><i class="feather-arrow-down-right me-1"></i>3</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>En cours</h4>
              <h2>8</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>2</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Temps moyen</h4>
              <h2>2.4h</h2>
              <p><span class="passive-view"><i class="feather-arrow-down-right me-1"></i>0.3h</span></p>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 col-12">
          <div class="dash-widget">
            <div class="dash-content dash-count">
              <h4>Satisfaction</h4>
              <h2>4.7⭐</h2>
              <p><span class="passive-view"><i class="feather-arrow-up-right me-1"></i>0.2</span></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filtres et actions -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Liste des Tickets</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Rechercher ticket..."
                            v-model="searchQuery"
                          />
                        </div>
                        <div class="add-group">
                          <button class="btn btn-primary btn-sm ms-2" @click="createTicket">
                            <i class="fa fa-plus"></i> Nouveau Ticket
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="staff-search-table mb-3">
                <div class="row">
                  <div class="col-md-3">
                    <vue-select :options="statuses" placeholder="Statut" />
                  </div>
                  <div class="col-md-3">
                    <vue-select :options="priorities" placeholder="Priorité" />
                  </div>
                  <div class="col-md-3">
                    <vue-select :options="types" placeholder="Type" />
                  </div>
                  <div class="col-md-3">
                    <button class="btn btn-primary">Filtrer</button>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <table class="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Priorité</th>
                      <th>#ID</th>
                      <th>Utilisateur</th>
                      <th>Type</th>
                      <th>Statut</th>
                      <th>Agent</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="ticket in filteredTickets" :key="ticket.id">
                      <td>
                        <span :class="getPriorityClass(ticket.priority)">
                          {{ ticket.priority }}
                        </span>
                      </td>
                      <td>
                        <strong>{{ ticket.ticketId }}</strong><br>
                        <small class="text-muted">{{ ticket.subject }}</small>
                      </td>
                      <td>
                        {{ ticket.user }}<br>
                        <small class="text-muted">{{ ticket.userType }}</small>
                      </td>
                      <td>{{ ticket.type }}</td>
                      <td>
                        <span :class="getStatusClass(ticket.status)">{{ ticket.status }}</span>
                      </td>
                      <td>{{ ticket.agent || 'Non assigné' }}</td>
                      <td>{{ ticket.date }}</td>
                      <td>
                        <button class="btn btn-sm btn-info me-1" @click="viewTicket(ticket.id)">
                          <i class="fa fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-success me-1" @click="assignTicket(ticket.id)">
                          <i class="fa fa-user-plus"></i>
                        </button>
                        <button class="btn btn-sm btn-primary" @click="closeTicket(ticket.id)">
                          <i class="fa fa-check"></i>
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

      <!-- Performance support -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Évolution des Tickets (8 dernières semaines)</h4>
            </div>
            <div class="card-body">
              <apexchart
                type="bar"
                height="300"
                :options="ticketsChart.chart"
                :series="ticketsChart.series"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>

      <!-- Agents disponibles -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Agents Support Disponibles</h4>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Agent</th>
                      <th>Statut</th>
                      <th>Tickets actifs</th>
                      <th>Tickets résolus (mois)</th>
                      <th>Note moyenne</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="agent in agents" :key="agent.id">
                      <td>{{ agent.name }}</td>
                      <td>
                        <span :class="agent.online ? 'badge bg-success' : 'badge bg-secondary'">
                          {{ agent.online ? 'Disponible' : 'Absent' }}
                        </span>
                      </td>
                      <td>{{ agent.activeTickets }}</td>
                      <td>{{ agent.resolvedTickets }}</td>
                      <td>
                        <i class="fa fa-star text-warning"></i> {{ agent.rating }}
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  name: "TicketsList",
  data() {
    return {
      title: "Support & Tickets",
      text: "Gestion des tickets",
      searchQuery: "",
      statuses: ["Tous", "Ouvert", "En cours", "Résolu", "Fermé"],
      priorities: ["Toutes", "Urgente", "Haute", "Normale", "Basse"],
      types: ["Tous", "Technique", "Paiement", "Compte", "Autre"],
      tickets: [
        { id: 1, ticketId: "#1023", subject: "Problème OCR", user: "Jean Dupont", userType: "Patient", type: "Technique", status: "Ouvert", priority: "Urgente", agent: null, date: "Hier" },
        { id: 2, ticketId: "#1024", subject: "Retard versement", user: "Dr Diallo", userType: "Cardiologue", type: "Paiement", status: "Résolu", priority: "Haute", agent: "Kofi M.", date: "12/04" },
        { id: 3, ticketId: "#1025", subject: "Négociation contrat", user: "CHU Abidjan", userType: "Hôpital", type: "Partenariat", status: "En cours", priority: "Normale", agent: "Amina D.", date: "11/04" }
      ],
      agents: [
        { id: 1, name: "Kofi Mensah", online: true, activeTickets: 8, resolvedTickets: 124, rating: 4.8 },
        { id: 2, name: "Amina Diallo", online: true, activeTickets: 5, resolvedTickets: 98, rating: 4.7 },
        { id: 3, name: "Jean Traoré", online: true, activeTickets: 12, resolvedTickets: 156, rating: 4.6 },
        { id: 4, name: "Marie Koné", online: false, activeTickets: 0, resolvedTickets: 87, rating: 4.9 }
      ],
      ticketsChart: {
        series: [{
          name: 'Tickets',
          data: [45, 52, 48, 55, 50, 48, 52, 47]
        }],
        chart: {
          type: 'bar',
          height: 300,
          toolbar: { show: false }
        },
        colors: ['#2E37A4'],
        xaxis: {
          categories: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8']
        }
      }
    };
  },
  computed: {
    filteredTickets() {
      if (!this.searchQuery) return this.tickets;
      return this.tickets.filter(t =>
        t.subject.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        t.ticketId.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    getPriorityClass(priority) {
      const classes = {
        'Urgente': 'badge bg-danger',
        'Haute': 'badge bg-warning',
        'Normale': 'badge bg-info',
        'Basse': 'badge bg-secondary'
      };
      return classes[priority] || 'badge bg-secondary';
    },
    getStatusClass(status) {
      const classes = {
        'Ouvert': 'badge bg-primary',
        'En cours': 'badge bg-warning',
        'Résolu': 'badge bg-success',
        'Fermé': 'badge bg-secondary'
      };
      return classes[status] || 'badge bg-secondary';
    },
    createTicket() {
      this.$toast.info('Création d\'un nouveau ticket');
    },
    viewTicket(id) {
      this.$toast.info('Affichage du ticket #' + id);
    },
    assignTicket(id) {
      this.$toast.success('Ticket assigné');
    },
    closeTicket(id) {
      if (confirm('Fermer ce ticket ?')) {
        this.$toast.success('Ticket fermé');
      }
    }
  }
};
</script>
