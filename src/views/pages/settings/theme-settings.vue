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
                <h4 class="page-title">Theme Settings</h4>
                <div class="input-block row">
                  <label class="col-lg-3 col-form-label">Website Name</label>
                  <div class="col-lg-9">
                    <input
                      name="website_name"
                      class="form-control"
                      value="PreClinic"
                      type="text"
                    />
                  </div>
                </div>
                <div class="input-block theme-set row">
                  <label class="col-lg-3 col-form-label">Light Logo</label>
                  <div class="col-lg-7">
                    <input class="form-control" type="file" />
                    <span class="form-text text-muted"
                      >Recommended image size is 40px x 40px</span
                    >
                  </div>
                  <div class="col-lg-2">
                    <div class="img-thumbnail float-end">
                      <img
                        src="@/assets/img/logo-dark.png"
                        alt=""
                        width="40"
                        height="40"
                      />
                    </div>
                  </div>
                </div>
                <div class="input-block theme-set row">
                  <label class="col-lg-3 col-form-label">Favicon</label>
                  <div class="col-lg-7">
                    <input class="form-control" type="file" />
                    <span class="form-text text-muted"
                      >Recommended image size is 16px x 16px</span
                    >
                  </div>
                  <div class="col-lg-2">
                    <div class="settings-image img-thumbnail float-end">
                      <img
                        src="@/assets/img/favicon.png"
                        class="img-fluid"
                        width="16"
                        height="16"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div class="m-t-20 text-center">
                  <button class="btn btn-primary submit-btn">Save</button>
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
