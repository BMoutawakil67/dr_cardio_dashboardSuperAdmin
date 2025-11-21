<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="assets-list" />
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
                      <h3>Assets List</h3>
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
                          <router-link
                            to="add-asset"
                            class="btn btn-primary add-pluss ms-2"
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
              <div class="staff-search-table">
                <form>
                  <div class="row">
                    <div class="col-12 col-md-6 col-xl-3">
                      <div class="input-block local-forms">
                        <label>Employee Name </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                      <div class="input-block local-forms cal-icon">
                        <label>From </label>
                        <datepicker
                          v-model="startdate"
                          :input-format="dateFormat"
                          class="form-control datetimepicker"
                          :editable="true"
                          :clearable="false"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                      <div class="input-block local-forms cal-icon">
                        <label>To </label>
                        <datepicker
                          v-model="startdate1"
                          :input-format="dateFormat"
                          class="form-control datetimepicker"
                          :editable="true"
                          :clearable="false"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-3">
                      <div class="doctor-submit">
                        <button
                          type="submit"
                          class="btn btn-primary submit-list-form me-2"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>

              <div class="table-responsive">
                <a-table
                  class="table border-0 custom-table comman-table datatable mb-0"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="{}"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'AssetUser'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="28"
                            height="28"
                            :src="require(`@/assets/img/profiles/${record.img}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.name }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <div class="dropdown action-label">
                        <a
                          class="custom-badge status-orange dropdown-toggle"
                          href="javascript:;"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {{ record.Status }}
                        </a>
                        <div class="dropdown-menu dropdown-menu-end status-staff">
                          <a class="dropdown-item" href="javascript:;">Pending</a>
                          <a class="dropdown-item" href="javascript:;">Approved</a>
                          <a class="dropdown-item" href="javascript:;">Returnd</a>
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
                            <router-link class="dropdown-item" to="edit-asset"
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
  <assetsmodal></assetsmodal>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDate1 = ref(new Date());
const columns = [
  {
    title: "Asset Id",
    dataIndex: "AssetId",
    key: "AssetId",
    sorter: {
      compare: (a, b) => {
        a = a.AssetId.toLowerCase();
        b = b.AssetId.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset User",
    dataIndex: "AssetUser",
    key: "AssetUser",
    sorter: {
      compare: (a, b) => {
        a = a.AssetUser.toLowerCase();
        b = b.AssetUser.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Asset Name",
    dataIndex: "AssetName",
    sorter: {
      compare: (a, b) => {
        a = a.AssetName.toLowerCase();
        b = b.AssetName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Purchase Date",
    dataIndex: "PurchaseDate",
    sorter: {
      compare: (a, b) => {
        a = a.PurchaseDate.toLowerCase();
        b = b.PurchaseDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warrenty",
    dataIndex: "Warrenty",
    sorter: {
      compare: (a, b) => {
        a = a.Warrenty.toLowerCase();
        b = b.Warrenty.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Warrenty End",
    dataIndex: "WarrentyEnd",
    sorter: {
      compare: (a, b) => {
        a = a.WarrentyEnd.toLowerCase();
        b = b.WarrentyEnd.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Amount",
    dataIndex: "Amount",
    sorter: {
      compare: (a, b) => {
        a = a.Amount.toLowerCase();
        b = b.Amount.toLowerCase();
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
    class: "text-end",
    sorter: true,
  },
];
const data = [
  {
    id: 1,
    AssetId: "#AST-0001",
    img: "avatar-01.jpg",
    name: "Andrea Lalema",
    Amount: "$62480",
    Status: "Pending",
    AssetName: "Anaesthetic machine",
    PurchaseDate: "01.05.2020",
    Warrenty: "4 Years",
    WarrentyEnd: "04.08.2024",
  },
];
export default {
  data() {
    return {
      data,
      columns,
      title: "Assets",
      text: "Assets List",
      startdate: currentDate,
      startdate1: currentDate1,
      dateFormat: "dd-MM-yyyy",
    };
  },
};
</script>
