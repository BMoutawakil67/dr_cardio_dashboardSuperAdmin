<template>
  <div class="page-wrapper">
    <!-- Page Content -->
    <div class="content container-fluid">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <!-- /Page Header -->

      <settingtab></settingtab>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">SEO Settings</h5>
            </div>
            <div class="card-body pt-0">
              <form>
                <div class="settings-form">
                  <div class="input-block form-placeholder">
                    <label>Meta Title <span class="star-red">*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="input-block">
                    <label>Meta Keywords <span class="star-red">*</span></label>
                    <vue3-tags-input :tags="tags" placeholder="Meta Keywords" />
                  </div>
                  <div class="input-block">
                    <label>Meta Description <span class="star-red">*</span></label>
                    <textarea class="form-control"></textarea>
                  </div>
                  <div class="input-block mb-0">
                    <div class="settings-btns">
                      <button
                        type="submit"
                        class="border-0 btn btn-primary btn-gradient-primary btn-rounded"
                      >
                        Submit
                      </button>
                      <button type="submit" class="btn btn-secondary btn-rounded">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- /Page Content -->
  </div>
</template>
<script>
import Vue3TagsInput from "vue3-tags-input";
export default {
  data() {
    return {
      title: "Dashboard",
      text: "Settings",
      tags: ["lorem", "ipsum"]
    };
  },
  components: {
    Vue3TagsInput,
  },
};
</script>
