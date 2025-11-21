<template>
  <div class="col-xl-4 d-flex">
    <div class="card chat-box">
      <div class="chat-widgets">
        <div class="call-all comman-space-flex">
          <h4>Calls<span>32</span></h4>
          <h5><a href="javascript:;">Show All</a></h5>
        </div>
        <div
          class="chat-user-group d-flex align-items-center"
          v-for="record in Calls"
          :key="record.id"
        >
          <div class="img-users call-user">
            <router-link to="/profile"
              ><img
                :src="require(`@/assets/img/profiles/${record.Avatar_Img}`)"
                alt="img"
            /></router-link>
          </div>
          <div class="chat-users chat-user-blk">
            <div class="user-titles">
              <h5>{{ record.Avatar }}</h5>
              <p>{{ record.Mins }}</p>
            </div>
            <div class="user-text">
              <p>{{ record.Time }}</p>
              <div class="chat-user-icon">
                <img :src="require(`@/assets/img/icons/${record.Call_Img}`)" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Calls from "@/assets/json/calls.json";
export default {
  data() {
    return {
      Calls: Calls,
    };
  },
};
</script>
