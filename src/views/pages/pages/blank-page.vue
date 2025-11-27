<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- /Page Header -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Blank Page",
    };
  },
};
</script>
