<template>
  <div class="col-xl-4 d-flex">
    <div class="card chat-box">
      <div class="chat-widgets">
        <div class="call-all comman-space-flex">
          <h4>Participants<span>32</span></h4>
          <h5><a href="javascript:;">Show All</a></h5>
        </div>
        <div class="chat-user-group video-call-blk d-flex align-items-center">
          <div class="img-users call-user">
            <router-link to="/profile"
              ><img src="@/assets/img/profiles/avatar-01.jpg" alt="img"
            /></router-link>
          </div>
          <div class="chat-users chat-user-blk">
            <div class="user-titles">
              <h5>Me</h5>
            </div>
            <div class="chat-user-icon">
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-01.svg" class="me-2" alt="img"
              /></a>
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-02.svg" alt="img"
              /></a>
            </div>
          </div>
        </div>
        <div class="chat-user-group video-call-blk d-flex align-items-center">
          <div class="img-users call-user">
            <router-link to="/profile"
              ><img src="@/assets/img/profiles/avatar-02.jpg" alt="img"
            /></router-link>
          </div>
          <div class="chat-users chat-user-blk">
            <div class="user-titles">
              <h5>Laura Williams</h5>
            </div>
            <div class="chat-user-icon">
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-01.svg" class="me-2" alt="img"
              /></a>
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-02.svg" alt="img"
              /></a>
            </div>
          </div>
        </div>
        <div class="chat-user-group video-call-blk d-flex align-items-center">
          <div class="img-users call-user">
            <router-link to="/profile"
              ><img src="@/assets/img/profiles/avatar-03.jpg" alt="img"
            /></router-link>
          </div>
          <div class="chat-users chat-user-blk">
            <div class="user-titles">
              <h5>Smith Bruklin</h5>
            </div>
            <div class="chat-user-icon">
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-01.svg" class="me-2" alt="img"
              /></a>
              <a href="javascript:;"
                ><img src="@/assets/img/icons/video-icon-02.svg" alt="img"
              /></a>
            </div>
          </div>
        </div>
        <div class="call-all comman-space-flex">
          <h4>Chats<span>32</span></h4>
          <h5><a href="javascript:;">Show All</a></h5>
        </div>
        <div class="video-chat-show">
          <ul>
            <li class="media d-flex received" v-for="record in Videos" :key="record.id">
              <div class="avatar flex-shrink-0">
                <img
                  :src="require(`@/assets/img/profiles/${record.Image}`)"
                  alt="User Image"
                  class="avatar-img rounded-circle"
                />
              </div>
              <div class="media-body flex-grow-1">
                <div class="msg-box">
                  <div class="message-sub-box">
                    <h5>{{ record.Name }}</h5>
                    <p>{{ record.Message }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Videos from "@/assets/json/videos.json";
export default {
  data() {
    return {
      Videos: Videos,
    };
  },
};
</script>
