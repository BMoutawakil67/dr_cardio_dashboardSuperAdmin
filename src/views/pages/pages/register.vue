<template>
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
                <h2>Getting Started</h2>
                <!-- Form -->
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                  <div class="input-block">
                    <label>Full Name <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" />
                  </div>
                  <div class="input-block">
                    <label>Email <span class="login-danger">*</span></label>
                    <Field
                      name="email"
                      type="text"
                      class="form-control"
                      placeholder="Email"
                      :class="{ 'is-invalid': errors.email }"
                    />
                    <div class="invalid-feedback">{{ errors.email }}</div>
                    <div class="emailshow text-danger" id="email"></div>
                  </div>
                  <div class="input-block">
                    <label>Password <span class="login-danger">*</span></label>
                    <Field
                      name="password"
                      :type="showPassword ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      placeholder="Password"
                      :class="{ 'is-invalid': errors.password }"
                    />
                    <span @click="toggleShow" class="toggle-password">
                      <i
                        :class="{
                          'fas fa-eye': showPassword,
                          'fas fa-eye-slash': !showPassword,
                        }"
                      ></i>
                    </span>
                    <div class="invalid-feedback">{{ errors.password }}</div>
                    <div class="emailshow text-danger" id="password"></div>
                  </div>
                  <div class="input-block">
                    <label>Confirm Password <span class="login-danger">*</span></label>
                    <Field
                      name="confirmpassword"
                      :type="showPassword1 ? 'text' : 'password'"
                      class="form-control pass-input mt-2"
                      placeholder="Confirm Password"
                      :class="{ 'is-invalid': errors.confirmpassword }"
                    />
                    <span @click="toggleShow1" class="toggle-password">
                      <i
                        :class="{
                          'fas fa-eye': showPassword1,
                          'fas fa-eye-slash': !showPassword1,
                        }"
                      ></i>
                    </span>
                    <div class="invalid-feedback">{{ errors.confirmpassword }}</div>
                    <div class="emailshow text-danger" id="confirmpassword"></div>
                  </div>
                  <div class="forgotpass">
                    <div class="remember-me">
                      <label class="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        I agree to the
                        <a href="javascript:;">&nbsp;&nbsp; terms of service </a>
                        &nbsp;&nbsp; and
                        <a href="javascript:;"> &nbsp;&nbsp; privacy policy </a>
                        <input type="checkbox" name="radio" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <div class="input-block login-btn">
                    <button class="btn btn-primary btn-block" type="submit">
                      Sign up
                    </button>
                  </div>
                </Form>
                <!-- /Form -->

                <div class="next-sign">
                  <p class="account-subtitle">
                    Already have account?
                    <router-link to="/">Login</router-link>
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
</template>

<script>
import { ref } from "vue";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
import { router } from "@/router";
export default {
  data() {
    return {
      showPassword: false,
      showPassword1: false,
      password: null,
    };
  },
  components: {
    Form,
    Field,
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
    buttonLabel() {
      return this.showPassword1 ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    toggleShow1() {
      this.showPassword1 = !this.showPassword1;
    },
  },
  setup() {
    const showPassword = ref(false);
    const emailError = ref("");
    const passwordError = ref("");

    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      confirmpassword: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Confirm password is required"),
    });

    const onSubmit = (values) => {
      if (values.password === values.confirmpassword) {
        let Rawdata = localStorage.getItem("storedData");
        let Pdata = [];
        Pdata = JSON.parse(Rawdata);
        const Eresult = Pdata.find(({ email }) => email == values.email);
        if (Eresult) {
          document.getElementById("email").innerHTML = "This email are already exist";
        } else {
          Pdata.push(values);
          const jsonData = JSON.stringify(Pdata);
          router.push("/");
          localStorage.setItem("storedData", jsonData);
        }
      } else {
        document.getElementById("confirmpassword").innerHTML = "Password not matching";
      }
    };

    return {
      schema,
      onSubmit,
    };
  },
};
</script>