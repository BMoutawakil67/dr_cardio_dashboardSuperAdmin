<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- Progress -->
      <largeprogress></largeprogress>

      <defaultprogress></defaultprogress>

      <mediumprogress></mediumprogress>

      <smallprogress></smallprogress>

      <extrasmallprogress></extrasmallprogress>
      <!-- /Progress -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Progress",
    };
  },
};
</script>
