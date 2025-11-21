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
                      <h4>Edit Leave</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Leave Type <span class="login-danger">*</span></label>
                      <vue-select
                        :options="Pay"
                        id="pay"
                        placeholder="Select Leave Type"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Number of Days <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" value="2" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms cal-icon">
                      <label>From <span class="login-danger">*</span></label>
                      <input
                        class="form-control datetimepicker"
                        type="text"
                        value="26-11-2022"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms cal-icon">
                      <label>To <span class="login-danger">*</span></label>
                      <input
                        class="form-control datetimepicker"
                        type="text"
                        value="26-11-2022"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Leave Reason <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30">
Going to hospital</textarea
                      >
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-3">
                    <div class="input-block local-forms">
                      <input
                        class="form-control"
                        type="text"
                        readonly
                        value="Remainig Leaves: 12"
                      />
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
const currentDateOne = ref(new Date());
export default {
  data() {
    return {
      title: "Staffs",
      text: "Edit Leave",
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      Pay: ["Select Leave Type", "Medical Leave", "Casual Leave", "Loss of Pay"],
    };
  },
};
</script>
