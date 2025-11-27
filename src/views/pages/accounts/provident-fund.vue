<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="provident-fund" />
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
                      <h3>Provident Fund List</h3>
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
                            to="add-provident-fund"
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

              <div class="table-responsive">
                <a-table
                  class="table border-0 custom-table comman-table datatable mb-0"
                  :columns="columns"
                  :data-source="data"
                  :row-selection="{}"
                >
                  <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'Name'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="28"
                            height="28"
                            :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.Name }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <div>
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
                            <a class="dropdown-item" href="javascript:;">Pending</a>
                            <a class="dropdown-item" href="javascript:;">Approved</a>
                          </div>
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
                            <router-link class="dropdown-item" to="edit-provident-fund"
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
</template>

<script>
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name",
    sorter: {
      compare: (a, b) => {
        a = a.Name.toLowerCase();
        b = b.Name.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Designation",
    dataIndex: "Designation",
    sorter: {
      compare: (a, b) => {
        a = a.Designation.toLowerCase();
        b = b.Designation.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Provident Fund Type",
    dataIndex: "Provident",
    sorter: {
      compare: (a, b) => {
        a = a.Provident.toLowerCase();
        b = b.Provident.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Employee Share",
    dataIndex: "Employee",
    sorter: {
      compare: (a, b) => {
        a = a.Employee.toLowerCase();
        b = b.Employee.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Organization Share",
    dataIndex: "Organization",
    sorter: {
      compare: (a, b) => {
        a = a.Organization.toLowerCase();
        b = b.Organization.toLowerCase();
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
    Name: "Andrea Lalema",
    Designation: "Doctor",
    Provident: "Basic Salary",
    Employee: "10%",
    Organization: "5%",
    Status: "Approved",
    Class: "custom-badge status-green dropdown-toggle",
  },
  {
    id: "2",
    Avatar: "avatar-03.jpg",
    Name: "William Stephin",
    Designation: "Doctor",
    Provident: "Basic Salary",
    Employee: "15%",
    Organization: "20%",
    Status: "Pending",
    Class: "custom-badge status-orange dropdown-toggle",
  },
  {
    id: "3",
    Avatar: "avatar-02.jpg",
    Name: "Smith Bruklin",
    Designation: "Nurse",
    Provident: "Basic Salary",
    Employee: "10%",
    Organization: "12%",
    Status: "Pending",
    Class: "custom-badge status-orange dropdown-toggle",
  },
  {
    id: "4",
    Avatar: "avatar-04.jpg",
    Name: "Bernardo James",
    Designation: "Specialist",
    Provident: "Basic Salary",
    Employee: "12%",
    Organization: "15%",
    Status: "Approved",
    Class: "custom-badge status-green dropdown-toggle",
  },
  {
    id: "5",
    Avatar: "avatar-06.jpg",
    Name: "Cristina Groves",
    Designation: "Doctor",
    Provident: "Basic Salary",
    Employee: "10%",
    Organization: "5%",
    Status: "Approved",
    Class: "custom-badge status-green dropdown-toggle",
  },
  {
    id: "6",
    Avatar: "avatar-05.jpg",
    Name: "Mark Hay Smith",
    Designation: "Nurse",
    Provident: "Basic Salary",
    Employee: "10%",
    Organization: "15%",
    Status: "Approved",
    Class: "custom-badge status-green dropdown-toggle",
  },
  {
    id: "7",
    Avatar: "avatar-01.jpg",
    Name: "Andrea Lalema",
    Designation: "Doctor",
    Provident: "Basic Salary",
    Employee: "10%",
    Organization: "5%",
    Status: "Pending",
    Class: "custom-badge status-orange dropdown-toggle",
  },
  {
    id: "8",
    Avatar: "avatar-02.jpg",
    Name: "Smith Bruklin",
    Designation: "Nurse",
    Provident: "Basic Salary",
    Employee: "15%",
    Organization: "15%",
    Status: "Approved",
    Class: "custom-badge status-green dropdown-toggle",
  },
];

export default {
  data() {
    return {
      title: "Accounts",
      text: "Provident Fund List",
      columns,
      data,
    };
  },
};
</script>
