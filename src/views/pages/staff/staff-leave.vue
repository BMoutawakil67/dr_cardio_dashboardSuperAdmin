<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="staff-list" />
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
                      <h3>Leave Request</h3>
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
                            to="add-leave"
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
                    <div class="col-12 col-md-6 col-xl-4">
                      <div class="input-block local-forms">
                        <label>Employee Name </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
                      <div class="input-block local-forms">
                        <label>Leave Type </label>
                        <vue-select
                          :options="LeaveType"
                          id="leavetype"
                          placeholder="Select Leave Type"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
                      <div class="input-block local-forms">
                        <label>Leave Status </label>
                        <vue-select
                          :options="LeaveStatus"
                          id="leavestatus"
                          placeholder="Leave Status"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
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
                    <div class="col-12 col-md-6 col-xl-4">
                      <div class="input-block local-forms cal-icon">
                        <label>To </label>
                        <datepicker
                          v-model="startdateOne"
                          :input-format="dateFormat"
                          class="form-control datetimepicker"
                          :editable="true"
                          :clearable="false"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
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
                    <template v-if="column.key === 'EmployeeName'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="28"
                            height="28"
                            :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.EmployeeName }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Status'">
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
                          <a class="dropdown-item" href="javascript:;">New</a>
                          <a class="dropdown-item" href="javascript:;">Pending</a>
                          <a class="dropdown-item" href="javascript:;">Approved</a>
                          <a class="dropdown-item" href="javascript:;">Declined</a>
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
                            <router-link class="dropdown-item" to="edit-leave"
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
    title: "Employee Name",
    dataIndex: "EmployeeName",
    key: "EmployeeName",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeName.toLowerCase();
        b = b.EmployeeName.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Leave Type",
    dataIndex: "LeaveType",
    sorter: {
      compare: (a, b) => {
        a = a.LeaveType.toLowerCase();
        b = b.LeaveType.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "From",
    dataIndex: "From",
    sorter: {
      compare: (a, b) => {
        a = a.From.toLowerCase();
        b = b.From.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "To",
    dataIndex: "To",
    sorter: {
      compare: (a, b) => {
        a = a.To.toLowerCase();
        b = b.To.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "No_days",
    dataIndex: "No_days",
    sorter: {
      compare: (a, b) => {
        a = a.No_days.toLowerCase();
        b = b.No_days.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Reason",
    dataIndex: "Reason",
    sorter: {
      compare: (a, b) => {
        a = a.Reason.toLowerCase();
        b = b.Reason.toLowerCase();
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
    id: "1",
    Avatar: "avatar-01.jpg",
    EmployeeName: "Andrea Lalema",
    LeaveType: "Medical Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Not Feeling well",
    Class: "custom-badge status-green dropdown-toggle",
    Status: "Approved",
  },
  {
    id: "2",
    Avatar: "avatar-02.jpg",
    EmployeeName: "Smith Bruklin",
    LeaveType: "Casual Leave",
    From: "04.10.2022",
    To: "06.10.2022",
    No_days: "2 Days",
    Reason: "Going to Vacation",
    Class: "custom-badge status-orange dropdown-toggle",
    Status: "Pending",
  },
  {
    id: "3",
    Avatar: "avatar-03.jpg",
    EmployeeName: "William Stephin",
    LeaveType: "Casual Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Family Function",
    Class: "custom-badge status-pink dropdown-toggle",
    Status: "Declined",
  },
  {
    id: "4",
    Avatar: "avatar-04.jpg",
    EmployeeName: "Bernardo James",
    LeaveType: "Casual Leave",
    From: "08.10.2022",
    To: "10.10.2022",
    No_days: "2 Days",
    Reason: "Going to Vacation",
    Class: "custom-badge status-purple dropdown-toggle",
    Status: "New",
  },
  {
    id: "5",
    Avatar: "avatar-06.jpg",
    EmployeeName: "Cristina Groves",
    LeaveType: "Medical Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Family Function",
    Class: "custom-badge status-green dropdown-toggle",
    Status: "Approved",
  },
  {
    id: "6",
    Avatar: "avatar-05.jpg",
    EmployeeName: "Mark Hay Smith",
    LeaveType: "Medical Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Not Feeling well",
    Class: "custom-badge status-green dropdown-toggle",
    Status: "Approved",
  },
  {
    id: "7",
    Avatar: "avatar-01.jpg",
    EmployeeName: "Andrea Lalema",
    LeaveType: "Medical Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Family Function",
    Class: "custom-badge status-green dropdown-toggle",
    Status: "Approved",
  },
  {
    id: "8",
    Avatar: "avatar-02.jpg",
    EmployeeName: "Smith Bruklin",
    LeaveType: "Casual Leave",
    From: "02.10.2022",
    To: "04.10.2022",
    No_days: "2 Days",
    Reason: "Not Feeling well",
    Class: "custom-badge status-green dropdown-toggle",
    Status: "Approved",
  },
];
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      title: "Staffs",
      text: "Leave Request",
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      LeaveType: ["Select Leave Type", "Medical Leave", "Casual Leave", "Loss of Pay"],
      LeaveStatus: ["Leave Status", "Pending", "Approved", "Declined"],
      columns,
      data,
    };
  },
};
</script>
