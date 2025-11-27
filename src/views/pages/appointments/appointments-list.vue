<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/appointments" />
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
                      <h3>Appointment</h3>
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
                            to="add-appointment"
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
                    <template v-else-if="column.key === 'Mobile'">
                      <div>
                        <a href="javascript:;">{{ record.Mobile }}</a>
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
                            <router-link class="dropdown-item" to="edit-appointment"
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
    title: "Consulting Doctor",
    dataIndex: "Consulting",
    sorter: {
      compare: (a, b) => {
        a = a.Consulting.toLowerCase();
        b = b.Consulting.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Treatment",
    dataIndex: "Treatment",
    sorter: {
      compare: (a, b) => {
        a = a.Treatment.toLowerCase();
        b = b.Treatment.toLowerCase();
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
    title: "Time",
    dataIndex: "Time",
    sorter: {
      compare: (a, b) => {
        a = a.Time.toLowerCase();
        b = b.Time.toLowerCase();
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
    Consulting: "Dr.Bernardo James",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "2",
    Avatar: "avatar-02.jpg",
    Name: "Smith Bruklin",
    Consulting: "Dr.William Stephin",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "3",
    Avatar: "avatar-03.jpg",
    Name: "William Stephin",
    Consulting: "Dr.Galaviz Lalema",
    Treatment: "Cancer",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "4",
    Avatar: "avatar-04.jpg",
    Name: "Bernardo James",
    Consulting: "Dr.Cristina Groves",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "5",
    Avatar: "avatar-06.jpg",
    Name: "Cristina Groves",
    Consulting: "Dr.Smith Bruklin",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "6",
    Avatar: "avatar-05.jpg",
    Name: "Mark Hay Smith",
    Consulting: "Dr.Smith Bruklin",
    Treatment: "Prostate",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "7",
    Avatar: "avatar-01.jpg",
    Name: "Andrea Lalema",
    Consulting: "Dr.Smith Bruklin",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
  {
    id: "8",
    Avatar: "avatar-02.jpg",
    Name: "Smith Bruklin",
    Consulting: "Dr.Bernardo James",
    Treatment: "Infertility",
    Mobile: "+1 23 456890",
    Email: "example@email.com",
    Date: "01.10.2022",
    Time: "07:30",
  },
];
export default {
  data() {
    return {
      title: "Appointment",
      text: "Appointment List",
      columns,
      data,
    };
  },
};
</script>
