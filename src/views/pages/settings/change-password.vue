<template>
  <div class="page-wrapper">
    <!-- Page Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- /Page Header -->

      <settingtab></settingtab>

      <div class="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-body">
              <form>
                <div class="row">
                  <h4 class="page-title">Change Password</h4>
                  <div class="col-12 col-md-6 col-xl-12">
                    <div class="input-block local-forms">
                      <label>Old password <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>New password <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-6 col-xl-6">
                    <div class="input-block local-forms">
                      <label>Confirm password <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" placeholder="" />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="doctor-submit text-end">
                      <button type="submit" class="btn btn-primary submit-form me-2">
                        Submit
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
    <!-- /Page Content -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Settings",
    };
  },
};
</script>
