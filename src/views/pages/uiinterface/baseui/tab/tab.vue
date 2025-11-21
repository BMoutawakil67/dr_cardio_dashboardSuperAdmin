<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- Tabs -->
      <basictab></basictab>
      <linetab></linetab>
      <bottomtab></bottomtab>
      <solidtab></solidtab>
      <roundtab></roundtab>
      <!-- /Tabs -->
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Tabs",
    };
  },
};
</script>
