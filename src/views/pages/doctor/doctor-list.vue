<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="doctors-list" />
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
                      <h3>Doctors List</h3>
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
                            to="add-doctor"
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
                            :src="require(`@/assets/img/profiles/${record.Image}`)"
                            class="rounded-circle m-r-5"
                            alt=""
                          />
                          {{ record.Name }}</router-link
                        >
                      </div>
                    </template>
                    <template v-else-if="column.key === 'Mobile'">
                      <div><a href="javascript:;">+1 23 456890</a></div>
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
                            <router-link class="dropdown-item" to="/doctors/edit-doctor"
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
    title: "Department",
    dataIndex: "Department",
    key: "Department",
    sorter: {
      compare: (a, b) => {
        a = a.Department.toLowerCase();
        b = b.Department.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Specialization",
    dataIndex: "Specialization",
    sorter: {
      compare: (a, b) => {
        a = a.Specialization.toLowerCase();
        b = b.Specialization.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Degree",
    dataIndex: "Degree",
    sorter: {
      compare: (a, b) => {
        a = a.Degree.toLowerCase();
        b = b.Degree.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Mobile",
    dataIndex: "Mobile",
    key: "Mobile",
    sorter: {
      compare: (a, b) => {
        a = a.Mobile.toLowerCase();
        b = b.Mobile.toLowerCase();
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
    title: "",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];

const data = [
  {
    Name: "Andrea Lalema",
    Department: "Otolaryngology",
    Specialization: "Infertility",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-01.jpg",
  },
  {
    Name: "Dr.Smith Bruklin",
    Department: "Urology",
    Specialization: "Prostate",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-02.jpg",
  },
  {
    Name: "Dr.William Stephin",
    Department: "Radiology",
    Specialization: "Cancer",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-03.jpg",
  },
  {
    Name: "Bernardo James",
    Department: "Dentist",
    Specialization: "Prostate",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-04.jpg",
  },
  {
    Name: "Cristina Groves",
    Department: "Gynocolgy",
    Specialization: "Prostate",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-06.jpg",
  },
  {
    Name: "Mark Hay Smith",
    Department: "Gynocolgy",
    Specialization: "Prostate",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-05.jpg",
  },
  {
    Name: "Andrea Lalema",
    Department: "Otolaryngology",
    Specialization: "Infertility",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-01.jpg",
  },
  {
    Name: "Dr.Smith Bruklin",
    Department: "Urology",
    Specialization: "Prostate",
    Degree: "MBBS, MS",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    JoiningDate: "01.10.2022",
    Image: "avatar-02.jpg",
  },
];
export default {
  data() {
    return {
      title: "Doctors",
      text: "Doctors List",
      data,
      columns,
    };
  },
};
</script>
