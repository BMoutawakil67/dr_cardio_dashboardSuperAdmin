<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="salary" />
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
                      <h3>Empoyee Salary</h3>
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
                            to="add-salary"
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
                        <label>Role </label>
                        <vue-select
                          :options="Pharmacist"
                          id="pharmacist"
                          placeholder="Select Role"
                        />
                      </div>
                    </div>
                    <div class="col-12 col-md-6 col-xl-4">
                      <div class="input-block local-forms">
                        <label>Leave Status </label>
                        <vue-select
                          :options="Pending"
                          id="pending"
                          placeholder="Select Leave Status"
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
                    <template v-else-if="column.key === 'Role'">
                      <div>
                        <div class="dropdown action-label">
                          <a
                            class="custom-badge status-purple dropdown-toggle"
                            href="javascript:;"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {{ record.Role }}
                          </a>
                          <div class="dropdown-menu dropdown-menu-end status-staff">
                            <a class="dropdown-item" href="javascript:;">Nurse</a>
                            <a class="dropdown-item" href="javascript:;">Accountant</a>
                            <a class="dropdown-item" href="javascript:;">Pharmacist</a>
                          </div>
                        </div>
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <div>
                        <router-link class="btn btn-sm btn-primary" to="salary-view">{{
                          record.Status
                        }}</router-link>
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
                            <router-link class="dropdown-item" to="edit-salary"
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
    title: "Employee ID",
    dataIndex: "EmployeeID",
    sorter: {
      compare: (a, b) => {
        a = a.EmployeeID.toLowerCase();
        b = b.EmployeeID.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
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
    title: "Email",
    dataIndex: "Email",
    sorter: {
      compare: (a, b) => {
        a = a.Email.toLowerCase();
        b = b.Email.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Joining Date",
    dataIndex: "JoiningDate",
    sorter: {
      compare: (a, b) => {
        a = a.JoiningDate.toLowerCase();
        b = b.JoiningDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Role",
    dataIndex: "Role",
    key: "Role",
    sorter: {
      compare: (a, b) => {
        a = a.Role.toLowerCase();
        b = b.Role.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Salary",
    dataIndex: "Salary",
    sorter: {
      compare: (a, b) => {
        a = a.Salary.toLowerCase();
        b = b.Salary.toLowerCase();
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
    EmployeeID: "EID-001",
    EmployeeName: "Andrea Lalema",
    Email: "example@gmail.com",
    JoiningDate: "01.05.2020",
    Role: "Nurse",
    Salary: "$1000",
    Status: "Generate Slip",
  },
  {
    id: "2",
    Avatar: "avatar-03.jpg",
    EmployeeID: "EID-002",
    EmployeeName: "William Stephin",
    Email: "example@gmail.com",
    JoiningDate: "03.05.2020",
    Role: "Accountant",
    Salary: "$2000",
    Status: "Generate Slip",
  },
  {
    id: "3",
    Avatar: "avatar-02.jpg",
    EmployeeID: "EID-003",
    EmployeeName: "Smith Bruklin",
    Email: "example@gmail.com",
    JoiningDate: "04.05.2020",
    Role: "Pharmacist",
    Salary: "$1500",
    Status: "Generate Slip",
  },
  {
    id: "4",
    Avatar: "avatar-04.jpg",
    EmployeeID: "EID-004",
    EmployeeName: "Bernardo James",
    Email: "example@gmail.com",
    JoiningDate: "06.06.2020",
    Role: "Nurse",
    Salary: "$3000",
    Status: "Generate Slip",
  },
  {
    id: "5",
    Avatar: "avatar-06.jpg",
    EmployeeID: "EID-005",
    EmployeeName: "Cristina Groves",
    Email: "example@gmail.com",
    JoiningDate: "13.05.2020",
    Role: "Accountant",
    Salary: "$5000",
    Status: "Generate Slip",
  },
  {
    id: "6",
    Avatar: "avatar-05.jpg",
    EmployeeID: "EID-006",
    EmployeeName: "Mark Hay Smith",
    Email: "example@gmail.com",
    JoiningDate: "11.12.2020",
    Role: "Pharmacist",
    Salary: "$2000",
    Status: "Generate Slip",
  },
  {
    id: "7",
    Avatar: "avatar-01.jpg",
    EmployeeID: "EID-007",
    EmployeeName: "Andrea Lalema",
    Email: "example@gmail.com",
    JoiningDate: "01.05.2020",
    Role: "Accountant",
    Salary: "$1000",
    Status: "Generate Slip",
  },
  {
    id: "8",
    Avatar: "avatar-02.jpg",
    EmployeeID: "EID-008",
    EmployeeName: "Smith Bruklin",
    Email: "example@gmail.com",
    JoiningDate: "01.05.2020",
    Role: "Nurse",
    Salary: "$2000",
    Status: "Generate Slip",
  },
];
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      title: "Payroll",
      text: "Empoyee Salary",
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Pharmacist: ["Select Role", "APendingccountant", "Nurse", "Pharmacist"],
      Pending: ["Select Leave Status", "Pending", "Approved", "Rejected"],
      columns,
      data,
    };
  },
};
</script>
