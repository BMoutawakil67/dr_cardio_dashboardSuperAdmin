<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="blog" />
      <!-- /Page Header -->
      <div class="row">
        <details-list></details-list>
        <blog-side></blog-side>
        <div class="col-md-12">
          <div class="widget new-comment clearfix">
            <h3>Leave a Comment</h3>
            <form>
              <div class="row">
                <div class="col-12 col-md-6 col-xl-6">
                  <div class="input-block local-forms">
                    <label>Name <span class="login-danger">*</span></label>
                    <input class="form-control" type="text" placeholder="Enter Name" />
                  </div>
                </div>
                <div class="col-12 col-md-6 col-xl-6">
                  <div class="input-block local-forms">
                    <label>Email<span class="login-danger">*</span></label>
                    <input class="form-control" type="text" placeholder="Enter Email" />
                  </div>
                </div>
                <div class="col-12 col-sm-12">
                  <div class="input-block local-forms">
                    <label>Comments <span class="login-danger">*</span></label>
                    <textarea class="form-control" rows="3" cols="30"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="remember-me">
                    <label class="custom_check mr-2 mb-0 d-inline-flex remember-me">
                      Save my name, email, and website in this browser for the next time I
                      comment.
                      <input type="checkbox" name="radio" checked />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <div class="doctor-submit text-end">
                    <button type="submit" class="btn btn-primary submit-form me-2">
                      Submit
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
</template>
<script>
export default {
  data() {
    return {
      title: "Blog",
      text: "View Blog",
    };
  },
};
</script>
