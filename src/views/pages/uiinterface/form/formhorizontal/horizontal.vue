<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <div class="col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header">
              <h5 class="card-title">Basic Form</h5>
            </div>
            <basicform />
          </div>
        </div>
        <div class="col-xl-6 d-flex">
          <div class="card flex-fill">
            <div class="card-header">
              <h5 class="card-title">Address Form</h5>
            </div>
            <addressform />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Horizontal Form</h5>
            </div>

            <personalinformation />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Two Column Horizontal Form</h5>
            </div>
            <personaldetail />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Main Wrapper -->
</template>

<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Horizontal Form",
    };
  },
  mounted() {},
};
</script>
