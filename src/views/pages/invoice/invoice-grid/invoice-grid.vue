<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="invoices-list" />
      <!-- /Page Header -->
      <!-- Invoice Header -->
      <div class="page-header">
        <div class="row align-items-center">
          <div class="col"></div>
          <div class="col-auto">
            <router-link to="invoices-list" class="invoices-links">
              <i class="feather feather-list"></i>
            </router-link>
            <router-link to="invoices-grid" class="invoices-links active">
              <i class="feather feather-grid"></i>
            </router-link>
          </div>
        </div>
      </div>
      <!-- /Invoice Header -->
      <!-- Report Filter -->
      <invoicefilter></invoicefilter>
      <!-- /Report Filter -->

      <div class="card invoices-tabs-card border-0">
        <div class="card-body card-body pt-0 pb-0">
          <div class="invoices-main-tabs border-0 pb-0">
            <div class="row align-items-center">
              <div class="col-lg-12 col-md-12">
                <div class="invoices-settings-btn invoices-settings-btn-one">
                  <router-link to="invoices-settings" class="invoices-settings-icon">
                    <i class="feather feather-settings"></i>
                  </router-link>
                  <router-link to="add-invoice" class="btn">
                    <i class="feather feather-plus-circle"></i> New Invoice
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="col-sm-6 col-lg-4 col-xl-3 d-flex"
          v-for="item in grid"
          :key="item.id"
        >
          <div class="card invoices-grid-card w-100">
            <div class="card-header d-flex justify-content-between align-items-center">
              <router-link to="view-invoice" class="invoice-grid-link">{{
                item.no
              }}</router-link>
              <div class="dropdown dropdown-action">
                <a
                  href="javascript:void(0);"
                  class="action-icon"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  ><i class="fas fa-ellipsis-v"></i
                ></a>
                <div class="dropdown-menu dropdown-menu-end">
                  <router-link class="dropdown-item" to="edit-invoices"
                    ><i class="far fa-edit me-2"></i>Edit</router-link
                  >
                  <router-link class="dropdown-item" to="view-invoice"
                    ><i class="far fa-eye me-2"></i>View</router-link
                  >
                  <a class="dropdown-item" href="javascript:void(0);"
                    ><i class="far fa-trash-alt me-2"></i>Delete</a
                  >
                </div>
              </div>
            </div>
            <div class="card-middle">
              <h2 class="card-middle-avatar">
                <router-link to="/profile"
                  ><img
                    class="avatar avatar-sm me-2 avatar-img rounded-circle"
                    :src="require(`@/assets/img/profiles/${item.img}`)"
                    alt="User Image"
                  />
                  {{ item.name }}</router-link
                >
              </h2>
            </div>
            <div class="card-body">
              <div class="row align-items-center">
                <div class="col">
                  <span><i class="far fa-money-bill-alt"></i> {{ item.name1 }}</span>
                  <h6 class="mb-0">{{ item.rate }}</h6>
                </div>
                <div class="col-auto">
                  <span><i class="far fa-calendar-alt"></i> {{ item.name2 }}</span>
                  <h6 class="mb-0">{{ item.date }}</h6>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div class="row align-items-center">
                <div class="col-auto">
                  <span class="badge bg-success-dark" v-if="item.status === 'Paid'">{{
                    item.status
                  }}</span>
                  <span
                    class="badge bg-danger-dark"
                    v-else-if="item.status === 'Overdue'"
                    >{{ item.status }}</span
                  >
                  <span
                    class="badge bg-secondary-dark"
                    v-else-if="item.status === 'Cancelled'"
                    >{{ item.status }}</span
                  >
                  <span
                    class="badge bg-primary-dark"
                    v-else-if="item.status === 'Sent'"
                    >{{ item.status }}</span
                  >
                </div>
                <div class="col text-end" v-if="item.status === 'Overdue'">
                  <span class="text-danger text-sm">Overdue 10 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="invoice-load-btn">
            <a href="javascript:void(0);" class="btn">
              <span class="spinner-border text-primary"></span> Load more
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
  <!-- /Main Wrapper -->
</template>
<script>
import grid from "@/assets/json/grid.json";
export default {
  data() {
    return {
      grid: grid,
      title: "Invoice",
      text: "Invoice Grid",
      //   items: [
      //     {
      //       text: "dashboard",
      //       href: "/",
      //     },
      //     {
      //       text: "Invoice Grid",
      //       active: true,
      //     },
      //   ],
    };
  },
  methods: {},
};
</script>
