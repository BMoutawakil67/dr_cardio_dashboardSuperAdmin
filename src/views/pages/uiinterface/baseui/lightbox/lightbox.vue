<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Single Image Lightbox</h5>
            </div>
            <lightboxone />
          </div>
        </div>
        <!-- /Lightbox -->

        <!-- Lightbox -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Image with Description</h5>
            </div>
            <lightboxtwo />
          </div>
        </div>
        <!-- /Lightbox -->
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
      text: "Lightbox",
    };
  },
};
</script>
