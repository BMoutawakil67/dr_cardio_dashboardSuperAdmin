<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="voice-call" />
      <!-- /Page Header -->
      <div class="row">
        <call-sidebar></call-sidebar>
        <div class="col-xl-8">
          <div class="card chat-box">
            <div class="chat-search-group">
              <div class="chat-user-group mb-0 d-flex align-items-center">
                <div class="img-users call-user">
                  <router-link to="/profile"
                    ><img src="@/assets/img/profiles/avatar-09.jpg" alt="img"
                  /></router-link>
                </div>
                <div class="chat-users">
                  <div class="user-titles">
                    <h5>Forest Kroch</h5>
                  </div>
                  <div class="user-text">
                    <p>Doctor</p>
                  </div>
                </div>
              </div>
              <div class="chat-search-list">
                <ul>
                  <li>
                    <router-link to="video-call"
                      ><img src="@/assets/img/icons/chat-icon-01.svg" alt="img"
                    /></router-link>
                  </li>
                  <li>
                    <router-link to="voice-call"
                      ><img src="@/assets/img/icons/chat-icon-02.svg" alt="img"
                    /></router-link>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/chat-icon-03.svg" alt="img"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Chat -->
          <div class="card chat-box mb-0">
            <div class="voice-call-blk text-center">
              <div class="voice-call-user">
                <img src="@/assets/img/profiles/avatar-03.jpg" alt="img" />
                <h3>Bernardo James</h3>
                <p>Doctor</p>
              </div>
              <div class="voice-time">
                <h3>
                  <img src="@/assets/img/icons/clock.svg" class="me-2" alt="img" />
                  00:10:10
                </h3>
              </div>
              <div class="voice-menu">
                <ul>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/voice-icon-01.svg" alt="img"
                    /></a>
                  </li>
                  <li class="active">
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/voice-icon-02.svg" alt="img"
                    /></a>
                  </li>
                  <li>
                    <a href="javascript:;"
                      ><img src="@/assets/img/icons/voice-icon-03.svg" alt="img"
                    /></a>
                  </li>
                </ul>
              </div>
              <div class="end-call-voice">
                <a href="javascript:;" class="btn btn-primary">End Call</a>
              </div>
            </div>
          </div>
          <!-- /Chat -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "App",
      text: "Voice Call",
    };
  },
};
</script>
