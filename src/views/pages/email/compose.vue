<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="compose" />
      <!-- /Page Header -->
      <div class="row">
        <email-sidebar></email-sidebar>
        <div class="col-xl-8">
          <div class="card chat-box mb-2">
            <div class="compose-mail">
              <h3>Compose New Mail</h3>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="input-block local-forms">
                  <label>To</label>
                  <input type="text" class="form-control" />
                  <ul class="nav sub-mails">
                    <li><a href="javascript:;">CC</a></li>
                    <li><a href="javascript:;">Bcc</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="input-block local-forms">
                  <label>Subject</label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="input-block summer-mail">
                  <ckeditor
                    :editor="editor"
                    v-model="editorData"
                    :config="editorConfig"
                  ></ckeditor>
                </div>
              </div>
              <div class="col-12 col-md-6 col-xl-12">
                <div class="input-block local-top-form">
                  <label class="local-top"
                    >Attachments <span class="login-danger">*</span></label
                  >
                  <div class="settings-btn upload-files-avator">
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      id="file"
                      onchange="loadFile(event)"
                      class="hide-input"
                    />
                    <label for="file" class="upload">Choose File</label>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="mail-send">
                  <a href="javascript"
                    ><img src="@/assets/img/icons/trash.svg" class="me-2" alt="img"
                  /></a>
                  <a href="javascript"
                    ><img src="@/assets/img/icons/ram.svg" class="me-2" alt="img"
                  /></a>
                  <a href="javascript" class="btn btn-primary">Send</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  data() {
    return {
      editor: ClassicEditor,
      editorData: "Description",
      editorConfig: {},
      title: "App",
      text: "Inbox",
    };
  },
};
</script>
