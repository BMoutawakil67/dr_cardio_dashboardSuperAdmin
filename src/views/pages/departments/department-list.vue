<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="department-list" />
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
                      <h3>Department List</h3>
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
                            to="add-department"
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
                    <template v-if="column.key === 'Head'">
                      <div class="profile-image">
                        <router-link to="/profile"
                          ><img
                            width="28"
                            height="28"
                            :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.Head }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Status'">
                      <div>
                        <button :class="record.Class">{{ record.Status }}</button>
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
                            <router-link class="dropdown-item" to="edit-department"
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
    title: "Department",
    dataIndex: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Department Head",
    dataIndex: "Head",
    key: "Head",
    sorter: {
      compare: (a, b) => {
        a = a.Head.toLowerCase();
        b = b.Head.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Description",
    dataIndex: "Description",
    sorter: {
      compare: (a, b) => {
        a = a.Description.toLowerCase();
        b = b.Description.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Date",
    dataIndex: "Date",
    sorter: {
      compare: (a, b) => {
        a = a.Date.toLowerCase();
        b = b.Date.toLowerCase();
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
    Department: "Cardiology",
    Head: "Dr.Andrea Lalema",
    Description: "Investigates and treats proble...",
    Date: "01.10.2022",
    Status: "Active",
    Class: "custom-badge status-green",
  },
  {
    id: "2",
    Avatar: "avatar-02.jpg",
    Department: "Urology",
    Head: "Dr.Smith Bruklin",
    Description: "Investigates and treats proble...",
    Date: "01.10.2022",
    Status: "Active",
    Class: "custom-badge status-green",
  },
  {
    id: "3",
    Avatar: "avatar-03.jpg",
    Department: "Radiology",
    Head: "Dr.William Stephin",
    Description: "Investigates and treats proble...",
    Date: "01.10.2022",
    Status: "Active",
    Class: "custom-badge status-green",
  },
  {
    FIELD1: "4",
    Avatar: "avatar-04.jpg",
    Department: "Dentist",
    Head: "Dr.Bernardo James",
    Description: "Investigates and treats proble...",
    Date: "03.10.2022",
    Status: "In Active",
    Class: "custom-badge status-pink",
  },
  {
    FIELD1: "5",
    Avatar: "avatar-06.jpg",
    Department: "Gynocolgy",
    Head: "Dr.Cristina Groves",
    Description: "Investigates and treats proble...",
    Date: "05.10.2022",
    Status: "In Active",
    Class: "custom-badge status-pink",
  },
  {
    FIELD1: "6",
    Avatar: "avatar-05.jpg",
    Department: "Gynocolgy",
    Head: "Mark Hay Smith",
    Description: "Investigates and treats proble...",
    Date: "07.10.2022",
    Status: "Active",
    Class: "custom-badge status-green",
  },
  {
    FIELD1: "7",
    Avatar: "avatar-01.jpg",
    Department: "Otolaryngology",
    Head: "Dr.Andrea Lalema",
    Description: "Investigates and treats proble...",
    Date: "10.10.2022",
    Status: "Active",
    Class: "custom-badge status-green",
  },
  {
    FIELD1: "8",
    Avatar: "avatar-01.jpg",
    Department: "Urology",
    Head: "Dr.Smith Bruklin",
    Description: "Investigates and treats proble...",
    Date: "21.10.2022",
    Status: "In Active",
    Class: "custom-badge status-pink",
  },
];
export default {
  data() {
    return {
      title: "Department",
      text: "Department List",
      columns,
      data,
    };
  },
};
</script>
