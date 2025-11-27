<template>
  <div class="main-wrapper login-body">
    <div class="container-fluid px-0">
      <div class="row">
        <!-- Login logo -->
        <div class="col-lg-6 login-wrap">
          <div class="login-sec">
            <div class="log-img">
              <img class="img-fluid" src="@/assets/img/login-02.png" alt="Logo" />
            </div>
          </div>
        </div>
        <!-- /Login logo -->

        <!-- Login Content -->
        <div class="col-lg-6 login-wrap-bg">
          <div class="login-wrapper">
            <div class="loginbox">
              <div class="login-right">
                <div class="login-right-wrap">
                  <div class="account-logo">
                    <router-link to="dashboard"
                      ><img src="@/assets/img/login-logo.png" alt=""
                    /></router-link>
                  </div>
                  <h2>Reset Password</h2>
                  <!-- Form -->
                  <form @submit.prevent="submitForm">
                    <div class="input-block">
                      <label>Email <span class="login-danger">*</span></label>
                      <input class="form-control" type="text" />
                    </div>
                    <div class="input-block login-btn">
                      <button class="btn btn-primary btn-block" type="submit">
                        Reset Password
                      </button>
                    </div>
                  </form>
                  <!-- /Form -->

                  <div class="next-sign">
                    <p class="account-subtitle">
                      Need an account? <router-link to="dashboard">Login</router-link>
                    </p>

                    <!-- Social Login -->
                    <div class="social-login">
                      <a href="javascript:;"
                        ><img src="@/assets/img/icons/login-icon-01.svg" alt=""
                      /></a>
                      <a href="javascript:;"
                        ><img src="@/assets/img/icons/login-icon-02.svg" alt=""
                      /></a>
                      <a href="javascript:;"
                        ><img src="@/assets/img/icons/login-icon-03.svg" alt=""
                      /></a>
                    </div>
                    <!-- /Social Login -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Login Content -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("dashboard");
    },
  },
};
</script>
