<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <!-- Page Header -->
      <add-head></add-head>
      <!-- /Page Header -->

      <div class="row">
        <div class="col-md-12">
          <div class="card invoices-add-card">
            <div class="card-body">
              <form action="javascript:;" class="invoices-form">
                <addcontent></addcontent>
                <addcontent1></addcontent1>
                <edittable></edittable>
                <editcontent></editcontent>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->

  <invoicemodal></invoicemodal>
  <!-- /Main Wrapper -->
</template>
<script>
export default {
  mounted() {},
  data() {
    return {};
  },
};
</script>
