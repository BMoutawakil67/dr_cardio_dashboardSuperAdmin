<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- /Page Header -->
      <form>
        <div class="card-box">
          <h3 class="card-title">Basic Informations</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="profile-img-wrap">
                <img class="inline-block" src="@/assets/img/user.jpg" alt="user" />
                <div class="fileupload btn">
                  <span class="btn-text">edit</span>
                  <input class="upload" type="file" />
                </div>
              </div>
              <div class="profile-basic">
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label class="focus-label">First Name</label>
                      <input type="text" class="form-control floating" value="John" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label class="focus-label">Last Name</label>
                      <input type="text" class="form-control floating" value="Doe" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label class="focus-label">Birth Date</label>
                      <div class="cal-icon">
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
                  </div>
                  <div class="col-md-6">
                    <div class="input-block local-forms">
                      <label class="focus-label">Gendar</label>
                      <vue-select
                        :options="ProfileGendar"
                        id="profilegendar"
                        placeholder="Female"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h3 class="card-title">Contact Informations</h3>
          <div class="row">
            <div class="col-md-12">
              <div class="input-block local-forms">
                <label class="focus-label">Address</label>
                <input
                  type="text"
                  class="form-control floating"
                  value="4487 Snowbird Lane"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">State</label>
                <input type="text" class="form-control floating" value="New York" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Country</label>
                <input type="text" class="form-control floating" value="United States" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Pin Code</label>
                <input type="text" class="form-control floating" value="10523" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Phone Number</label>
                <input type="text" class="form-control floating" value="631-889-3206" />
              </div>
            </div>
          </div>
        </div>
        <div class="card-box">
          <h3 class="card-title">Education Informations</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Institution</label>
                <input
                  type="text"
                  class="form-control floating"
                  value="Oxford University"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Subject</label>
                <input
                  type="text"
                  class="form-control floating"
                  value="Computer Science"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Starting Date</label>
                <div class="cal-icon">
                  <datepicker
                    v-model="startdate1"
                    :input-format="dateFormat"
                    class="form-control datetimepicker"
                    :editable="true"
                    :clearable="false"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Complete Date</label>
                <div class="cal-icon">
                  <datepicker
                    v-model="startdate2"
                    :input-format="dateFormat"
                    class="form-control datetimepicker"
                    :editable="true"
                    :clearable="false"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Degree</label>
                <input
                  type="text"
                  class="form-control floating"
                  value="BE Computer Science"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Grade</label>
                <input type="text" class="form-control floating" value="Grade A" />
              </div>
            </div>
          </div>
          <div class="add-more">
            <a href="javascript:;" class="btn btn-primary"
              ><i class="fa fa-plus"></i> Add More Institute</a
            >
          </div>
        </div>
        <div class="card-box">
          <h3 class="card-title">Experience Informations</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Company Name</label>
                <input
                  type="text"
                  class="form-control floating"
                  value="Digital Devlopment Inc"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Location</label>
                <input type="text" class="form-control floating" value="United States" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Job Position</label>
                <input type="text" class="form-control floating" value="Web Developer" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Period From</label>
                <div class="cal-icon">
                  <datepicker
                    v-model="startdate3"
                    :input-format="dateFormat"
                    class="form-control datetimepicker"
                    :editable="true"
                    :clearable="false"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="input-block local-forms">
                <label class="focus-label">Period To</label>
                <div class="cal-icon">
                  <datepicker
                    v-model="startdate4"
                    :input-format="dateFormat"
                    class="form-control datetimepicker"
                    :editable="true"
                    :clearable="false"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="add-more">
            <a href="javascript:;" class="btn btn-primary"
              ><i class="fa fa-plus"></i> Add More Experience</a
            >
          </div>
        </div>
        <div class="text-center">
          <button class="btn btn-primary submit-btn mb-4" type="button">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
const currentDate = ref(new Date());
const currentDate1 = ref(new Date());
const currentDate2 = ref(new Date());
const currentDate3 = ref(new Date());
const currentDate4 = ref(new Date());
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Edit-Profile",
      ProfileGendar: ["Select Gendar", "Male", "Female"],
      startdate: currentDate,
      startdate1: currentDate1,
      startdate2: currentDate2,
      startdate3: currentDate3,
      startdate4: currentDate4,
      dateFormat: "dd-MM-yyyy",
    };
  },
};
</script>
