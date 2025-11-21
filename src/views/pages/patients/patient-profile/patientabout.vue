<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="doctor-personals-grp">
        <div class="card">
          <div class="card-body">
            <div class="heading-detail">
              <h4 class="mb-3">About me</h4>
              <p>
                Hello I am Smith Bruklin a Gynaecologist in Sanjivni Hospital Surat. I
                love to work with all my hospital staff and seniour doctors.
              </p>
            </div>
            <div class="about-me-list">
              <ul class="list-space">
                <li>
                  <h4>Gender</h4>
                  <span>Male</span>
                </li>
                <li>
                  <h4>Operation Done</h4>
                  <span>30+</span>
                </li>
                <li>
                  <h4>Designation</h4>
                  <span>Engineer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="doctor-personals-grp">
        <div class="card">
          <div class="card-body">
            <div class="heading-detail">
              <h4>Skills:</h4>
            </div>
            <div class="skill-blk">
              <div class="skill-statistics">
                <div class="skills-head">
                  <h5>Heart Beat</h5>
                  <p>45%</p>
                </div>
                <div class="progress mb-0">
                  <div
                    class="progress-bar bg-operations"
                    role="progressbar"
                    style="width: 45%"
                    aria-valuenow="45"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="skill-statistics">
                <div class="skills-head">
                  <h5>Haemoglobin</h5>
                  <p>85%</p>
                </div>
                <div class="progress mb-0">
                  <div
                    class="progress-bar bg-haemoglobin"
                    role="progressbar"
                    style="width: 85%"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="skill-statistics">
                <div class="skills-head">
                  <h5>Blood Pressure</h5>
                  <p>65%</p>
                </div>
                <div class="progress mb-0">
                  <div
                    class="progress-bar bg-statistics"
                    role="progressbar"
                    style="width: 65%"
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div class="skill-statistics">
                <div class="skills-head">
                  <h5>Sugar</h5>
                  <p>90%</p>
                </div>
                <div class="progress mb-0">
                  <div
                    class="progress-bar bg-visit"
                    role="progressbar"
                    style="width: 90%"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <div class="doctor-personals-grp">
        <div class="card">
          <div class="card-body">
            <div class="tab-content-set">
              <ul class="nav">
                <li>
                  <router-link to="patient-profile" class="active"
                    ><span class="set-about-icon me-2"
                      ><img src="@/assets/img/icons/menu-icon-02.svg" alt="" /></span
                    >About me</router-link
                  >
                </li>
                <li>
                  <router-link to="patient-setting"
                    ><span class="set-about-icon me-2"
                      ><img src="@/assets/img/icons/menu-icon-16.svg" alt="" /></span
                    >Settings</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="personal-list-out">
              <div class="row">
                <div class="col-xl-3 col-md-6">
                  <div class="detail-personal">
                    <h2>Full Name</h2>
                    <h3>Smith Bruklin</h3>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="detail-personal">
                    <h2>Mobile</h2>
                    <h3>264-625-2583</h3>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="detail-personal">
                    <h2>Email</h2>
                    <h3>smith@email.com</h3>
                  </div>
                </div>
                <div class="col-xl-3 col-md-6">
                  <div class="detail-personal">
                    <h2>Location</h2>
                    <h3>USA</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="hello-park">
              <p>
                Completed my graduation in Gynaecologist Medicine from the well known and
                renowned institution of India – SARDAR PATEL MEDICAL COLLEGE, BARODA in
                2000-01, which was affiliated to M.S. University. I ranker in University
                exams from the same university from 1996-01.
              </p>
              <p>
                Worked as Professor and Head of the department ; Community medicine
                Department at Sterline Hospital, Rajkot, Gujarat from 2003-2015
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Medical History</h4>
          </div>
          <div class="card-body p-0 table-dash">
            <div class="table-responsive">
              <a-table
                class="table mb-0 border-0 datatable custom-table patient-profile-table"
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
                          <router-link class="dropdown-item" to="/appointments/edit-appointment"
                            ><i class="fa-solid fa-pen-to-square m-r-5"></i>
                            Edit</router-link
                          >
                          <a
                            class="dropdown-item"
                            href="javascript:;"
                            data-bs-toggle="modal"
                            data-bs-target="#delete_appointment"
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
</template>
<script>
const columns = [
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
    title: "Doctor",
    dataIndex: "Doctor",
    sorter: {
      compare: (a, b) => {
        a = a.Doctor.toLowerCase();
        b = b.Doctor.toLowerCase();
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
    title: "Charges",
    dataIndex: "Charges",
    sorter: {
      compare: (a, b) => {
        a = a.Charges.toLowerCase();
        b = b.Charges.toLowerCase();
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
    Date: "29/09/2022",
    Doctor: "Dr.Jenny Smith",
    Treatment: "Check up",
    Charges: "$ 60",
  },
  {
    Date: "19/09/2022",
    Doctor: "Andrea Lalema",
    Treatment: "Blood Test",
    Charges: "$ 50",
  },
  {
    Date: "20/09/2022",
    Doctor: "Dr.William Stephin",
    Treatment: "Blood Pressure",
    Charges: "$ 30",
  },
];
export default {
  data() {
    return {
      data,
      columns,
    };
  },
};
</script>
