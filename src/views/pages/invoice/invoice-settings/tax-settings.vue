<template>
  <div class="page-wrapper">
    <!-- Page Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="invoices-list" />
      <!-- /Page Header -->

      <div class="row mt-4">
        <div class="col-xl-3 col-md-4">
          <div class="widget settings-menu setting-list-menu">
            <ul>
              <li class="nav-item">
                <router-link to="invoices-settings" class="nav-link invoice">
                  <i class="fa fa-cog me-2" aria-hidden="true"></i
                  ><span>General Settings</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="tax-settings" class="nav-link invoice active">
                  <i class="fa fa-bookmark me-2"></i> <span>Tax Settings</span>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="bank-settings" class="nav-link invoice">
                  <i class="fas fa-university me-2"></i> <span>Bank Settings</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-xl-9 col-md-8">
          <div class="card invoices-settings-card">
            <div class="card-header px-3">
              <h5 class="card-title">Tax Settings</h5>
            </div>
            <div class="card-body">
              <!-- Form -->
              <form action="javascript:;" class="invoices-settings-form">
                <div class="row align-items-center input-block">
                  <label for="name" class="col-sm-3 col-form-label input-label"
                    >Enable Tax</label
                  >
                  <div class="col-sm-9">
                    <label class="custom_check">
                      <input type="checkbox" name="invoice" />
                      <span class="checkmark"></span> Check to enable tax on invoice
                    </label>
                  </div>
                </div>
                <div class="row align-items-center input-block">
                  <label for="email" class="col-sm-3 col-form-label input-label"
                    >Tax Percentage</label
                  >
                  <div class="col-sm-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="row align-items-center input-block">
                  <label for="phone" class="col-sm-3 col-form-label input-label"
                    >GSTIN Number</label
                  >
                  <div class="col-sm-9">
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <div class="invoice-setting-btn text-end">
                  <button type="submit" class="btn cancel-btn me-2">Cancel</button>
                  <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
              </form>
              <!-- /Form -->
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
      title: "Invoice",
      text: "Tax Settings",
    };
  },
};
</script>
