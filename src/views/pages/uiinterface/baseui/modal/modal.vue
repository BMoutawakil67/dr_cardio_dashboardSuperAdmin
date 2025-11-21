<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <bootstrapmodal></bootstrapmodal>
        <!-- end col -->

        <pagemodals></pagemodals>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <positionmodal></positionmodal>
        <!-- end col -->

        <modalalert></modalalert>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <multiplemodal></multiplemodal>
        <!-- end col -->

        <custommodal></custommodal>
        <!-- end col -->
      </div>
      <!-- end row -->

      <staticmodal></staticmodal>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Modal",
    };
  },
};
</script>
