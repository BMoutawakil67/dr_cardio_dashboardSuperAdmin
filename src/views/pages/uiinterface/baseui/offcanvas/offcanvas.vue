<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <div class="col-xl-6">
          <offcanvasone></offcanvasone>
          <!-- end card-->

          <placement></placement>
          <!-- end card-->
        </div>
        <!-- end col-->
        <backdrop></backdrop>
        <!-- end col-->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Offcanvas",
    };
  },
};
</script>
