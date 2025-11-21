<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="schedule" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Add Schedule</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Doctor Name <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Department <span class="login-danger">*</span></label>
                      <vue-select
                        :options="Department"
                        id="department"
                        placeholder="Choose Department"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms cal-icon">
                      <label>Available Days <span class="login-danger">*</span></label>
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
                    <div class="input-block local-forms">
                      <label>From <span class="login-danger">*</span></label>
                      <div class="time-icon">
                        <a-time-picker
                          id="datetimepicker3"
                          class="form-control"
                          placeholder="11:00 AM"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms">
                      <label>To <span class="login-danger">*</span></label>
                      <div class="time-icon">
                        <a-time-picker
                          id="datetimepicker4"
                          class="form-control"
                          placeholder="11:00 AM"
                          use12-hours
                          format="h:mm a"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Notes <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30"></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
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
                        Create Schedule
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
      title: "Doctor Shedule",
      text: "Add Schedule",
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      Department: ["Choose Department", "Cardiology", "Urology", "Radiology"],
    };
  },
};
</script>
