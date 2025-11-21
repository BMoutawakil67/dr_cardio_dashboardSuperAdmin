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
                      <h3>Holidays</h3>
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
                          <a href="javascript:;" class="btn btn-primary add-pluss ms-2"
                            ><img src="@/assets/img/icons/plus.svg" alt=""
                          /></a>
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
                  <template #bodyCell="{ column }">
                    <template v-if="column.key === 'action'">
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
                            <a class="dropdown-item" href="javascript:;"
                              ><i class="fa-solid fa-pen-to-square m-r-5"></i> Edit</a
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
    title: "Title",
    dataIndex: "Title",
    key: "Title",
    sorter: {
      compare: (a, b) => {
        a = a.Title.toLowerCase();
        b = b.Title.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Holiday Date",
    dataIndex: "HolidayDate",
    sorter: {
      compare: (a, b) => {
        a = a.HolidayDate.toLowerCase();
        b = b.HolidayDate.toLowerCase();
        return a > b ? -1 : b > a ? 1 : 0;
      },
    },
  },
  {
    title: "Day",
    dataIndex: "Day",
    sorter: {
      compare: (a, b) => {
        a = a.Day.toLowerCase();
        b = b.Day.toLowerCase();
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
    title: "",
    key: "action",
    sorter: true,
    class: "text-end",
  },
];
const data = [
  {
    id: "",
    Title: "New Year",
    HolidayDate: "01.01.2022",
    Day: "Sunday",
    Description: "Common Holiday",
  },
  {
    id: "",
    Title: "Pongal",
    HolidayDate: "14.01.2022",
    Day: "Monday",
    Description: "Religious Holiday",
  },
  {
    id: "",
    Title: "Pongal Holiday",
    HolidayDate: "15.01.2022",
    Day: "Monday",
    Description: "Religious Holiday",
  },
  {
    id: "",
    Title: "Tamil New Year",
    HolidayDate: "14.04.2022",
    Day: "Tuesday",
    Description: "Religious Holiday",
  },
  {
    id: "",
    Title: "Good Friday",
    HolidayDate: "05.01.2022",
    Day: "Friday",
    Description: "Religious Holiday",
  },
  {
    id: "",
    Title: "May Day",
    HolidayDate: "15.01.2022",
    Day: "Wednesday",
    Description: "Common Holiday",
  },
  {
    id: "",
    Title: "Ramzan",
    HolidayDate: "10.08.2022",
    Day: "Monday",
    Description: "Religious Holiday",
  },
  {
    id: "",
    Title: "Independence day",
    HolidayDate: "26.01.2022",
    Day: "Friday",
    Description: "Common Holiday",
  },
];
export default {
  data() {
    return {
      title: "Staffs",
      text: "Holidays",
      columns,
      data,
    };
  },
};
</script>
