<template>
  <div class="page-wrapper">
    <!-- Page Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- /Page Header -->

      <settingtab></settingtab>

      <div class="row">
        <!-- PayPal Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title">Paypal</h5>
              <div class="status-toggle d-flex justify-content-between align-items-center">
                <input type="checkbox" id="status_1" class="check" />
                <label for="status_1" class="checktoggle">checkbox</label>
              </div>
            </div>
            <div class="card-body pt-0">
              <form>
                <div class="settings-form">
                  <div class="input-block">
                    <p class="pay-cont">Paypal Option</p>
                    <label class="custom_radio me-4">
                      <input type="radio" name="budget" value="Yes" checked />
                      <span class="checkmark"></span> Sandbox
                    </label>
                    <label class="custom_radio">
                      <input type="radio" name="budget" value="Yes" />
                      <span class="checkmark"></span> Live
                    </label>
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Braintree Tokenization key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_BRAINTREE_KEY_HERE" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Braintree Merchant ID <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_MERCHANT_ID_HERE" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Braintree Public key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_PUBLIC_KEY_HERE" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Braintree Private key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_PRIVATE_KEY_HERE" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Paypal APP ID <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_PAYPAL_APP_ID" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Paypal Secret Key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_PAYPAL_SECRET_KEY" />
                  </div>

                  <div class="input-block mb-0">
                    <div class="settings-btns">
                      <button type="submit"
                        class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>
                      &nbsp;&nbsp;
                      <button type="submit" class="btn btn-secondary btn-rounded">Cancel</button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- Stripe Section -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title">Stripe</h5>
              <div class="status-toggle d-flex justify-content-between align-items-center">
                <input type="checkbox" id="status_2" class="check" checked />
                <label for="status_2" class="checktoggle">checkbox</label>
              </div>
            </div>

            <div class="card-body pt-0">
              <form>
                <div class="settings-form">

                  <div class="input-block">
                    <p class="pay-cont">Stripe Option</p>
                    <label class="custom_radio me-4">
                      <input type="radio" name="budget" value="Yes" checked />
                      <span class="checkmark"></span> Sandbox
                    </label>
                    <label class="custom_radio">
                      <input type="radio" name="budget" value="Yes" />
                      <span class="checkmark"></span> Live
                    </label>
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Gateway Name <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="Stripe" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>API Key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_STRIPE_PUBLIC_KEY" />
                  </div>

                  <div class="input-block form-placeholder">
                    <label>Secret Key <span class="star-red">*</span></label>
                    <input type="text" class="form-control" placeholder="YOUR_STRIPE_SECRET_KEY" />
                  </div>

                  <div class="input-block mb-0">
                    <div class="settings-btns">
                      <button type="submit"
                        class="border-0 btn btn-primary btn-gradient-primary btn-rounded">Save</button>
                      &nbsp;&nbsp;
                      <button type="submit" class="btn btn-secondary btn-rounded">Cancel</button>
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
