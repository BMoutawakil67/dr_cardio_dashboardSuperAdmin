import placeholdersVue from '../uiinterface/baseui/placeholders.vue';
<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/appointments" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Patient Details</h4>
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
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Address <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30"></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Appointment Details</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-4">
                    <div class="input-block local-forms cal-icon">
                      <label
                        >Date of Appointment <span class="login-danger">*</span></label
                      >
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
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Consulting Doctor</label>
                      <vue-select
                        :options="Consulting"
                        id="consulting"
                        placeholder="Select Doctor"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Treatment </label>
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Notes <span class="login-danger">*</span></label>
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
      title: "Appointment",
      text: "Book Appointment",
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
      Consulting: [
        "Select Doctor",
        "Dr.Bernardo James",
        "Dr.Andrea Lalema",
        "Dr.William Stephin",
      ],
    };
  },
};
</script>
