<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="invoices-list" />

      <!-- /Page Header -->
      <div class="row">
        <div class="col-lg-12">
          <div class="py-3 d-flex justify-content-end">
            <router-link to="invoices-list" class="invoices-links active">
              <i data-feather="list"></i>
            </router-link>
            <router-link to="invoices-grid" class="invoices-links">
              <i data-feather="grid"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- Report Filter -->
      <invoicefilter></invoicefilter>
      <div class="card invoices-tabs-card">
        <div class="card-body card-body pt-0 pb-0">
          <div class="invoices-main-tabs">
            <div class="row align-items-center">
              <div class="col-lg-8 col-md-8">
                <div class="invoices-tabs">
                  <ul>
                    <li><router-link to="invoices-list">All Invoice</router-link></li>
                    <li><router-link to="invoices-paid">Paid</router-link></li>
                    <li>
                      <router-link to="invoices-overdue">Overdue</router-link>
                    </li>
                    <li><router-link to="invoices-draft">Draft</router-link></li>
                    <li>
                      <router-link to="invoices-recurring" class="active"
                        >Recurring</router-link
                      >
                    </li>
                    <li><router-link to="invoices-cancelled">Cancelled</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="invoices-settings-btn">
                  <router-link to="invoices-settings" class="invoices-settings-icon">
                    <i data-feather="settings"></i>
                  </router-link>
                  <router-link to="add-invoice" class="btn">
                    <i data-feather="plus-circle"></i> New Invoice
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <invoice-tabs></invoice-tabs>
      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table">
            <div class="card-body p-4">
              <div class="table-responsive">
                <div class="col-sm-12 col-md-6">
                  <div class="dataTables_length mb-3">
                    Show
                    <select class="select-box form-control-sm">
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    entries
                  </div>
                </div>
                <a-table
                  class="table custom-table comman-table mb-0 datatable"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="{}"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'no'">
                      <router-link to="view-invoice" class="invoice-link">{{
                        record.no
                      }}</router-link>
                    </template>
                    <template v-else-if="column.key === 'id'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="40"
                            height="40"
                            class="rounded-circle"
                            :src="require(`@/assets/img/profiles/${record.img}`)"
                            alt="User Image"
                          />
                          {{ record.name }}
                        </router-link>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'amt'">
                      <td class="text-primary">{{ record.amt }}</td>
                    </template>
                    <template v-else-if="column.key === 'description'">
                      <td>
                        <span class="badge bg-danger-light">{{
                          record.description
                        }}</span>
                      </td>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <span :class="record.Class">{{ record.Status }}</span>
                    </template>
                    <template v-else-if="column.key === 'action'">
                      <div class="text-end">
                        <router-link
                          to="edit-invoices"
                          class="btn btn-sm btn-white text-success me-2"
                          ><i class="far fa-edit me-1"></i> Edit</router-link
                        >
                        <a
                          class="btn btn-sm btn-white text-danger"
                          href="javascript:;"
                          data-bs-toggle="modal"
                          data-bs-target="#delete_paid"
                          ><i class="far fa-trash-alt me-1"></i>Delete</a
                        >
                      </div>
                    </template>
                  </template>
                </a-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <invoicemodal :Delete="Delete" />
</template>
<script>
const columns = [
  {
    title: "Invoice ID",
    dataIndex: "no",
    key: "no",
    sorter: {
      compare: (a, b) => {
        a = a.no.toLowerCase();
        b = b.no.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Create on",
    dataIndex: "date1",
    sorter: {
      compare: (a, b) => {
        a = a.date1.toLowerCase();
        b = b.date1.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Invoice to",
    dataIndex: "img",
    key: "id",
    sorter: {
      compare: (a, b) => {
        a = a.img.toLowerCase();
        b = b.img.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "amt",
    key: "amt",
    sorter: {
      compare: (a, b) => {
        a = a.amt.toLowerCase();
        b = b.amt.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },

  {
    title: "Last invoice",
    dataIndex: "date2",
    sorter: {
      compare: (a, b) => {
        a = a.date2.toLowerCase();
        b = b.date2.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Next Invoice",
    dataIndex: "Nextinvoice",
    sorter: {
      compare: (a, b) => {
        a = a.Nextinvoice.toLowerCase();
        b = b.Nextinvoice.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Frequency",
    dataIndex: "Frequency",
    sorter: {
      compare: (a, b) => {
        a = a.Frequency.toLowerCase();
        b = b.Frequency.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Status",
    dataIndex: "Status",
    key: "Status",
    sorter: {
      compare: (a, b) => {
        a = a.Status.toLowerCase();
        b = b.Status.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Action",
    key: "action",
    class: "text-end",
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    no: "IN093439#@09",
    img: "avatar-04.jpg",
    name: "Barbara Moore",
    amt: "$1,54,220",
    date1: "16 Mar 2023",
    date2: "23 Mar 2023",
    Status: "Active",
    Class: "badge bg-success-dark",
    Frequency: "14 Months",
    Nextinvoice: "28 Mar 2022",
  },
  {
    id: 2,
    no: "IN093439#@10",
    img: "avatar-06.jpg",
    name: "Karlene Chaidez",
    amt: "$1,222",
    date1: "14 Mar 2023",
    date2: "18 Mar 2023",
    Status: "Expired",
    Class: "badge bg-danger-dark",
    Frequency: "12 Months",
    Nextinvoice: "20 Mar 2022",
  },
  {
    id: 3,
    no: "IN093439#@11",
    img: "avatar-08.jpg",
    name: "Russell Copeland",
    amt: "$3,470",
    date1: "7 Mar 2023",
    date2: "10 Mar 2023",
    Status: "Active",
    Class: "badge bg-success-dark",
    Frequency: "08 Months",
    Nextinvoice: "18 Mar 2022",
  },
  {
    id: 4,
    no: "IN093439#@12",
    img: "avatar-10.jpg",
    name: "Joseph Collins",
    amt: "$8,265",
    date1: "24 Mar 2023",
    date2: "30 Mar 2023",
    Status: "Expired",
    Class: "badge bg-danger-dark",
    Frequency: "10 Months",
    Nextinvoice: "22 Mar 2022",
  },
  {
    id: 5,
    no: "IN093439#@13",
    img: "avatar-11.jpg",
    name: "Jennifer Floyd",
    amt: "$5,200",
    date1: "17 Mar 2023",
    date2: "20 Mar 2023",
    Status: "Active",
    Class: "badge bg-success-dark",
    Frequency: "03 Months",
    Nextinvoice: "31 Mar 2022",
  },
];
export default {
  data() {
    return {
      title: "Invoice",
      text: "Invoice Recurring",
      Delete: "Delete Invoice Recurring",
      data,
      columns,
    };
  },
};
</script>
