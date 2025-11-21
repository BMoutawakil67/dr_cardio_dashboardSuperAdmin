<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <!-- Popover -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Basic Popover</h5>
            </div>
            <div class="card-body">
              <div class="popover-list">
                <a-popover title="Popover title" trigger="click" placement="right">
                  <template #content>
                    <span
                      >And here's some amazing content. It's very engaging. Right?</span
                    >
                  </template>
                  <b-button variant="primary me-1">Click to toggle popover</b-button>
                </a-popover>
                <a-popover title="Popover title" trigger="click" placement="right">
                  <template #content>
                    <span
                      >And here's some amazing content. It's very engaging. Right?</span
                    >
                  </template>
                  <b-button variant="primary me-1">Dismissible popover</b-button>
                </a-popover>
                <a-popover title="Popover title" trigger="hover" placement="top">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1">On Hover Tooltip</b-button>
                </a-popover>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->

        <!-- Popover -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Direction Popover</h5>
            </div>
            <div class="card-body">
              <div class="popover-list">
                <a-popover title="Popover title" trigger="click" placement="top">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1">Popover on top</b-button>
                </a-popover>
                <a-popover trigger="click" placement="right">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1">Popover on right</b-button>
                </a-popover>
                <a-popover trigger="click" placement="bottom">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1">Popover on bottom</b-button>
                </a-popover>
                <a-popover trigger="click" placement="left">
                  <template #content>
                    <span>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</span>
                  </template>
                  <b-button variant="primary me-1">Popover on left</b-button>
                </a-popover>
              </div>
            </div>
          </div>
        </div>
        <!-- /Popover -->
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
      text: "Popover",
    };
  },
};
</script>
