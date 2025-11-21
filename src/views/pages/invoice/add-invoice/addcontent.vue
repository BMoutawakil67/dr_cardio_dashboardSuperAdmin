<template>
  <div class="invoices-main-form">
    <div class="row">
      <div class="col-xl-4 col-md-6 col-sm-12 col-12">
        <div class="form-group">
          <label>Customer Name</label>
          <div class="multipleSelection">
            <div class="selectBox" v-on:click="isHiddens = !isHiddens">
              <p class="mb-0">Select Customer</p>
              <span class="down-icon"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div
              id="checkBoxes-one"
              v-bind:style="[!isHiddens ? { display: 'block' } : { display: 'none' }]"
            >
              <p class="checkbox-title">Customer Search</p>
              <div class="form-custom">
                <input
                  type="text"
                  class="form-control bg-grey"
                  placeholder="Enter Customer Name"
                />
              </div>
              <div class="selectBox-cont">
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Brian Johnson
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Russell Copeland
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Greg Lynch
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> John Blair
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Barbara Moore
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Hendry Evan
                </label>
                <label class="custom_check w-100">
                  <input type="checkbox" name="username" />
                  <span class="checkmark"></span> Richard Miles
                </label>
              </div>
              <b-button type="submit" variant="w-100 primary">Apply</b-button>
              <b-button type="reset" variant="w-100 grey">Reset</b-button>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label>Po Number</label>
          <input class="form-control" type="text" placeholder="Enter Reference Number" />
        </div>
      </div>
      <div class="col-xl-5 col-md-6 col-sm-12 col-12">
        <h4 class="invoice-details-title">Invoice details</h4>
        <div class="invoice-details-box">
          <div class="invoice-inner-head">
            <span
              >Invoice No. <router-link to="view-invoice">IN093439#@09</router-link></span
            >
          </div>
          <div class="invoice-inner-footer">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-6">
                <div class="invoice-inner-date">
                  <span class="d-flex">
                    Date
                    <datepicker
                      v-model="startdate"
                      class="form-control picker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </span>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="invoice-inner-date invoice-inner-datepic">
                  <span class="d-flex">
                    Due Date
                    <datepicker
                      v-model="startdateOne"
                      class="form-control picker"
                      :editable="true"
                      :clearable="false"
                      :input-format="dateFormat"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-md-12 col-sm-12 col-12">
        <div class="inovices-month-info">
          <div class="form-group mb-0">
            <label class="custom_check w-100">
              <input type="checkbox" id="enableTax" name="invoice" />
              <span class="checkmark"></span> Enable tax
            </label>
            <label class="custom_check w-100">
              <input
                type="checkbox"
                id="chkYes"
                name="invoice"
                v-on:click="isHidden = !isHidden"
              />
              <span class="checkmark"></span> Recurring Invoice
            </label>
          </div>
          <div
            id="show-invoices"
            v-bind:style="[!isHidden ? { display: 'block' } : { display: 'none' }]"
          >
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <vue-select :options="month" placeholder="By month" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Enter Months" />
                </div>
              </div>
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
      startdate: currentDate,
      startdateOne: currentDateOne,
      dateFormat: "dd-MM-yyyy",
      isHidden: true,
      isHiddens: true,
      month: ["By month", "March", "April", "May", "June", "July"],
    };
  },
};
</script>
