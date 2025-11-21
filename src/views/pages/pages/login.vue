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
                <h2>Login</h2>
                <!-- Form -->
                <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
                  <div class="input-block">
                    <label>Email <span class="login-danger">*</span></label>
                    <Field
                      name="email"
                      type="text"
                      value="example@dreamstechnologies.com"
                      class="form-control"
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
                      value="123456"
                      class="form-control pass-input mt-2"
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
                  <div class="forgotpass">
                    <div class="remember-me">
                      <label class="custom_check mr-2 mb-0 d-inline-flex remember-me">
                        Remember me
                        <input type="checkbox" name="radio" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <router-link to="forgot-password">Forgot Password?</router-link>
                  </div>
                  <div class="input-block login-btn">
                    <button class="btn btn-primary btn-block" type="submit">Login</button>
                  </div>
                </Form>
                <!-- /Form -->

                <div class="next-sign">
                  <p class="account-subtitle">
                    Need an account? <router-link to="register">Sign Up</router-link>
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
import { router } from "@/router";
import { Form, Field } from "vee-validate";
import * as Yup from "yup";
export default {
  components: {
    Form,
    Field,
  },
  data() {
    return {
      showPassword: false,
      password: null,
      emailError: "",
      passwordError: "",
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Hide" : "Show";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
  setup() {
    let users = localStorage.getItem("storedData");
    if (users === null) {
      let password = [
        {
          email: "example@dreamstechnologies.com",
          password: "123456",
        },
      ];
      const jsonData = JSON.stringify(password);
      localStorage.setItem("storedData", jsonData);
    }
    const schema = Yup.object().shape({
      email: Yup.string().required("Email is required").email("Email is invalid"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    });
    const onSubmit = (values) => {
      document.getElementById("email").innerHTML = "";
      document.getElementById("password").innerHTML = "";
      let data = localStorage.getItem("storedData");
      var Pdata = JSON.parse(data);
      const Eresult = Pdata.find(({ email }) => email === values.email);
      if (Eresult) {
        if (Eresult.password === values.password) {
          router.push("dashboard");
        } else {
          document.getElementById("password").innerHTML = "Incorrect password";
        }
      } else {
        document.getElementById("email").innerHTML = "Email is not valid";
      }
    };
    return {
      schema,
      onSubmit,
      checked: ref(false),
    };
  },
};
</script>
