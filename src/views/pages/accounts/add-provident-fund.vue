<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="provident-fund" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Add Provident Fund</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Employee Name <span class="login-danger">*</span></label>
                      <vue-select
                        :options="Employee"
                        id="employee"
                        placeholder="Select Employee Name"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label
                        >Provident Fund Type <span class="login-danger">*</span></label
                      >
                      <vue-select
                        :options="Provident"
                        id="provident"
                        placeholder="Select Provident Fund Type"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label
                        >Employee Share ($) <span class="login-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label
                        >Organization Share ($) <span class="login-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms cal-icon">
                      <label
                        >Employee Share (%) <span class="login-danger">*</span></label
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
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label
                        >Organization Share (%) <span class="login-danger">*</span></label
                      >
                      <input class="form-control" type="text" />
                    </div>
                  </div>
                  <div class="col-12 col-sm-12">
                    <div class="input-block local-forms">
                      <label>Description <span class="login-danger">*</span></label>
                      <textarea class="form-control" rows="3" cols="30"></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="doctor-submit text-end">
                      <button type="submit" class="btn btn-primary submit-form me-2">
                        Create Provident Fund
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
      title: "Accounts",
      text : "Add Provident Fund",
      Employee: [
        "Select Employee Name",
        "Bernardo James",
        "Galaviz Lalema",
        "Tarah Williams",
      ],
      Provident: ["Select Provident Fund Type", "Basic Salary", "Month Salary"],
      startdate: currentDate,
      dateFormat: "dd-MM-yyyy",
    };
  },
};
</script>
