<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <carouselone></carouselone>
      <!-- end row -->

      <carouseltwo></carouseltwo>
      <!-- end row -->

      <carouselthree></carouselthree>
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
      text: "Carousel",
    };
  },
};
</script>
