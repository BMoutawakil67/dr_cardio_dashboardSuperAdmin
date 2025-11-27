<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <badgesone></badgesone>
      <pillbadges></pillbadges>
      <gradientbadges></gradientbadges>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Badges",
    };
  },
};
</script>
