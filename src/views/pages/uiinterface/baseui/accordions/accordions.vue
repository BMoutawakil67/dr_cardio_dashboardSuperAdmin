<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <default></default>
        <!-- end col -->

        <justified></justified>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <verticalleft></verticalleft>
        <!-- end col -->

        <verticalright></verticalright>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <bordered></bordered>
        <!-- end col -->

        <borderedjustified></borderedjustified>
        <!-- end col -->
      </div>
      <!-- end row -->

      <div class="row">
        <vakal></vakal>
        <!-- end col -->

        <questions></questions>
      </div>
      <!-- end row -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Accordions",
    };
  },
};
</script>
