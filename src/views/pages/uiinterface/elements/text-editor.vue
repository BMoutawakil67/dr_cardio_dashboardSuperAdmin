<template>
  <!-- Page Wrapper -->
  <div class="page-wrapper">
    <div class="content container-fluid">
      <breadcrumb :title="title" :text="text" path="/dashboard" />
      <div class="row">
        <!-- Editor -->
        <div class="col-md-12">
          <div class="card">
            <div class="card-header">
              <h5 class="card-title">Editor</h5>
            </div>
            <div class="card-body">
              <ckeditor
                :editor="editor"
                v-model="editorData"
                :config="editorConfig"
              ></ckeditor>
            </div>
          </div>
        </div>
        <!-- /Editor -->
      </div>
    </div>
  </div>
  <!-- /Page Wrapper -->
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      title: "Dashboard",
    };
  },
  name: "text-editor",
};
</script>
