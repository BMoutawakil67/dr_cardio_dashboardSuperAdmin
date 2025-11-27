<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="patients-list" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <patientprofile></patientprofile>
          </div>
          <patientabout></patientabout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Patients",
      text: "Patient Profile",
    };
  },
};
</script>
