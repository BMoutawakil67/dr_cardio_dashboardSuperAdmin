<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="staff-list" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Staffs Details</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>First Name <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Last Name <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>User Name <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Mobile <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Email <span class="login-danger">*</span></label>
                      <input class="form-control" type="email" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Password <span class="login-danger">*</span></label>
                      <input class="form-control" type="password" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Confirm Password <span class="login-danger">*</span></label>
                      <input class="form-control" type="password" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms cal-icon">
                      <label>Date Of Birth <span class="login-danger">*</span></label>
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
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block select-gender">
                      <label class="gen-label"
                        >Gender<span class="login-danger">*</span></label
                      >
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            class="form-check-input"
                          />Male
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            class="form-check-input"
                          />Female
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Education <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Designation <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>Department <span class="login-danger">*</span></label>
                      <vue-select
                        :options="StaffDepartment"
                        id="staffdepartment"
                        placeholder="Select Department"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Address <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30"></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>City <span class="login-danger">*</span></label>
                      <vue-select
                        :options="StaffCity"
                        id="Staffcity"
                        placeholder="Select City"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Country <span class="login-danger">*</span></label>
                      <vue-select
                        :options="StaffCountry"
                        id="Staffcountry"
                        placeholder="Select Country"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>State/Province <span class="login-danger">*</span></label>
                      <vue-select
                        :options="StaffState"
                        id="Staffstate"
                        placeholder="Select State"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <label>Postal Code <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Start Biography <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30"></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-top-form">
                      <label class="local-top"
                        >Avatar <span class="login-danger">*</span></label
                      >
                      <div class="settings-btn upload-files-avator">
                        <input
                          type="file"
                          accept="image/*"
                          name="image"
                          id="file"
                          onchange="loadFile(event)"
                          class="hide-input"
                        />
                        <label for="file" class="upload">Choose File</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block select-gender">
                      <label class="gen-label"
                        >Status <span class="login-danger">*</span></label
                      >
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input
                            type="radio"
                            name="gender"
                            class="form-check-input"
                          />Active
                        </label>
                      </div>
                      <div class="form-check-inline">
                        <label class="form-check-label">
                          <input type="radio" name="gender" class="form-check-input" />In
                          Active
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="doctor-submit text-end">
                      <button type="submit" class="btn btn-primary submit-form me-2">
                        Submit
                      </button>
                      <button type="submit" class="btn btn-primary cancel-form">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
const currentDate = ref(new Date());
export default {
  data() {
    return {
      title: "Staffs",
      text: "Add Staffs",
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      StaffDepartment: ["Select Department", "Orthopedics", "Radiology", "Dentist"],
      StaffCountry: ["Select County", "Usa", "Uk", "Italy"],
      StaffCity: ["Select City", "Alaska", "Los Angeles"],
      StaffState: ["Select State", "Alaska", "California"],
    };
  },
};
</script>
