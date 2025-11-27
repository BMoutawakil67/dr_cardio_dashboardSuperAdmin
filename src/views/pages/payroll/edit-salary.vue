<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="salary" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <div class="col-12">
                    <div class="form-heading">
                      <h4>Edit Employee Salary</h4>
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Select Staff </label>
                      <vue-select
                        :options="Galaviz"
                        id="galaviz"
                        placeholder="Select Staff"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Net Salary </label>
                      <input class="form-control" type="text" value="$1000" />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="pay-head-roll">
                      <h5>Earnings</h5>
                    </div>
                    <div class="input-block local-forms">
                      <label>Basic Salary </label>
                      <input class="form-control" type="text" value="$1000" />
                    </div>
                    <div class="input-block local-forms">
                      <label>DA (40%) </label>
                      <input class="form-control" type="text" value="$800" />
                    </div>
                    <div class="input-block local-forms">
                      <label>HRA (15%) </label>
                      <input class="form-control" type="text" value="$600" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Conveyance </label>
                      <input class="form-control" type="text" value="$50" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Medical Allowance </label>
                      <input class="form-control" type="text" value="$40" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Others</label>
                      <input class="form-control" type="text" value="$20" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="pay-head-roll">
                      <h5>Deductions</h5>
                    </div>
                    <div class="input-block local-forms">
                      <label>TDS </label>
                      <input class="form-control" type="text" value="$600" />
                    </div>
                    <div class="input-block local-forms">
                      <label>ESI </label>
                      <input class="form-control" type="text" value="$500" />
                    </div>
                    <div class="input-block local-forms">
                      <label>PF </label>
                      <input class="form-control" type="text" value="$60" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Prof.Tax </label>
                      <input class="form-control" type="text" value="$40" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Labour Welfare </label>
                      <input class="form-control" type="text" value="$30" />
                    </div>
                    <div class="input-block local-forms">
                      <label>Others</label>
                      <input class="form-control" type="text" value="$10" />
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
export default {
  data() {
    return {
      title: "Payroll",
      text: "Edit Employee Salary",
      Galaviz: ["Select Staff", "Williams Bruk", "Galaviz Lalema"],
    };
  },
};
</script>
