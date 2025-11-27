<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="taxes" />
      <!-- /Page Header -->

      <div class="row">
        <div class="col-sm-12">
          <div class="card card-table show-entire">
            <div class="card-body">
              <!-- Table Header -->
              <div class="page-table-header mb-2">
                <div class="row align-items-center">
                  <div class="col">
                    <div class="doctor-table-blk">
                      <h3>Taxes</h3>
                      <div class="doctor-search-blk">
                        <div class="top-nav-search table-search-blk">
                          <form>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Search here"
                            />
                            <a class="btn"
                              ><img src="@/assets/img/icons/search-normal.svg" alt=""
                            /></a>
                          </form>
                        </div>
                        <div class="add-group">
                          <router-link to="add-tax" class="btn btn-primary add-pluss ms-2"
                            ><img src="@/assets/img/icons/plus.svg" alt=""
                          /></router-link>
                          <a
                            href="javascript:;"
                            class="btn btn-primary doctor-refresh ms-2"
                            ><img src="@/assets/img/icons/re-fresh.svg" alt=""
                          /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-auto text-end float-end ms-auto download-grp">
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-01.svg" alt=""
                    /></a>
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-02.svg" alt=""
                    /></a>
                    <a href="javascript:;" class="me-2"
                      ><img src="@/assets/img/icons/pdf-icon-03.svg" alt=""
                    /></a>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/pdf-icon-04.svg" alt=""
                    /></a>
                  </div>
                </div>
              </div>
              <!-- /Table Header -->

              <div class="table-responsive">
                <a-table
                  class="table border-0 custom-table comman-table datatable mb-0"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="{}"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Status'">
                      <div class="dropdown action-label">
                        <a
                          :class="record.Class"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-end status-staff">
                          <a class="dropdown-item" href="javascript:;">Active</a>
                          <a class="dropdown-item" href="javascript:;">In Active</a>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'action'">
                      <div class="text-end">
                        <div class="dropdown dropdown-action">
                          <a
                            href="javascript:;"
                            class="action-icon dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            ><i class="fa fa-ellipsis-v"></i
                          ></a>
                          <div class="dropdown-menu dropdown-menu-end">
                            <router-link class="dropdown-item" to="edit-tax"
                              ><i class="fa-solid fa-pen-to-square m-r-5"></i>
                              Edit</router-link
                            >
                            <a
                              class="dropdown-item"
                              href="javascript:;"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_patient"
                              ><i class="fa fa-trash-alt m-r-5"></i> Delete</a
                            >
                          </div>
                        </div>
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
  <delete></delete>
</template>

<script>
const columns = [
  {
    title: "#",
    dataIndex: "id",
    sorter: {
      compare: (a, b) => {
        a = a.id.toLowerCase();
        b = b.id.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Tax Name",
    dataIndex: "TaxName",
    sorter: {
      compare: (a, b) => {
        a = a.TaxName.toLowerCase();
        b = b.TaxName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Tax Percentage",
    dataIndex: "TaxPercentage",
    sorter: {
      compare: (a, b) => {
        a = a.TaxPercentage.toLowerCase();
        b = b.TaxPercentage.toLowerCase();
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
    title: "",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];

const data = [
  {
    id: 1,
    TaxName: "VAT",
    TaxPercentage: "14%",
    Status: "Active",
    Class: "custom-badge status-green dropdown-toggle",
  },
  {
    id: 2,
    TaxName: "GST",
    TaxPercentage: "30%",
    Status: "In Active",
    Class: "custom-badge status-pink dropdown-toggle",
  },
  {
    id: 3,
    TaxName: "CGST",
    TaxPercentage: "40%",
    Status: "Active",
    Class: "custom-badge status-green dropdown-toggle",
  },
];
export default {
  data() {
    return {
      title: "Accounts",
      text: "Taxes",
      columns,
      data,
    };
  },
};
</script>
