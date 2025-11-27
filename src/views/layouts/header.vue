<template>
  <div class="header">
    <div class="header-left">
      <router-link to="/dashboard" class="logo">
        <img src="@/assets/img/logo.png" width="35" height="35" alt="" />
        <span>Docteur Cardio</span>
      </router-link>
    </div>
    <a id="toggle_btn" href="javascript:void(0);" @click="toggleSidebar"><img src="@/assets/img/icons/bar-icon.svg"
        alt="" /></a>
    <a id="mobile_btn" @click="toggleSidebarOne" class="mobile_btn float-start" href="#sidebar"><img
        src="@/assets/img/icons/bar-icon.svg" alt="" /></a>
    <div class="top-nav-search mob-view">
      <form>
        <input type="text" class="form-control" placeholder="Search here" />
        <a class="btn"><img src="@/assets/img/icons/search-normal.svg" alt="" /></a>
      </form>
    </div>
    <ul class="nav user-menu float-end">
      <li class="nav-item dropdown d-none d-md-block">
        <a href="javascript:;" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><img
            src="@/assets/img/icons/note-icon-02.svg" alt="" /><span class="pulse"></span>
        </a>
        <div class="dropdown-menu notifications">
          <div class="topnav-dropdown-header">
            <span>Notifications</span>
          </div>
          <div class="drop-scroll">
            <ul class="notification-list">
              <li class="notification-message">
                <router-link to="/activities">
                  <div class="media">
                    <span class="avatar">
                      <img alt="John Doe" src="@/assets/img/user.jpg" class="img-fluid" />
                    </span>
                    <div class="media-body">
                      <p class="noti-details">
                        <span class="noti-title">John Doe</span> added new task
                        <span class="noti-title">Patient appointment booking</span>
                      </p>
                      <p class="noti-time">
                        <span class="notification-time">4 mins ago</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="notification-message">
                <router-link to="/activities">
                  <div class="media">
                    <span class="avatar">V</span>
                    <div class="media-body">
                      <p class="noti-details">
                        <span class="noti-title">Tarah Shropshire</span> changed the task
                        name
                        <span class="noti-title">Appointment booking with payment gateway</span>
                      </p>
                      <p class="noti-time">
                        <span class="notification-time">6 mins ago</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="notification-message">
                <router-link to="/activities">
                  <div class="media">
                    <span class="avatar">L</span>
                    <div class="media-body">
                      <p class="noti-details">
                        <span class="noti-title">Misty Tison</span> added
                        <span class="noti-title">Domenic Houston</span> and
                        <span class="noti-title">Claire Mapes</span> to project
                        <span class="noti-title">Doctor available module</span>
                      </p>
                      <p class="noti-time">
                        <span class="notification-time">8 mins ago</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="notification-message">
                <router-link to="/activities">
                  <div class="media">
                    <span class="avatar">G</span>
                    <div class="media-body">
                      <p class="noti-details">
                        <span class="noti-title">Rolland Webber</span> completed task
                        <span class="noti-title">Patient and Doctor video conferencing</span>
                      </p>
                      <p class="noti-time">
                        <span class="notification-time">12 mins ago</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
              <li class="notification-message">
                <router-link to="/activities">
                  <div class="media">
                    <span class="avatar">V</span>
                    <div class="media-body">
                      <p class="noti-details">
                        <span class="noti-title">Bernardo Galaviz</span> added new task
                        <span class="noti-title">Private chat module</span>
                      </p>
                      <p class="noti-time">
                        <span class="notification-time">2 days ago</span>
                      </p>
                    </div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div class="topnav-dropdown-footer">
            <router-link to="/activities">View all Notifications</router-link>
          </div>
        </div>
      </li>
      <li class="nav-item dropdown d-none d-md-block">
        <a ref="openMsgBox" href="javascript:void(0);" id="open_msg_box" @click="toggleOpenBox"
          class="hasnotifications nav-link">
          <img src="@/assets/img/icons/note-icon-01.svg" alt="" /><span class="pulse"></span>
        </a>
      </li>
      <li class="nav-item dropdown has-arrow user-profile-list">
        <a href="javascript:;" class="dropdown-toggle nav-link user-link" data-bs-toggle="dropdown">
          <div class="user-names">
            <h5>Liam Michael</h5>
            <span>Admin</span>
          </div>
          <span class="user-img">
            <img src="@/assets/img/user-06.jpg" alt="Admin" />
          </span>
        </a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/profile">My Profile</router-link>
          <router-link class="dropdown-item" to="/edit-profile">Edit Profile</router-link>
          <router-link class="dropdown-item" to="/settings/settings">Settings</router-link>
          <router-link class="dropdown-item" to="/">Logout</router-link>
        </div>
      </li>
      <li class="nav-item">
        <router-link to="/settings/settings" class="hasnotifications"><img src="@/assets/img/icons/setting-icon-01.svg"
            alt="" />
        </router-link>
      </li>
    </ul>
    <div class="dropdown mobile-user-menu float-end">
      <a href="javascript:;" class="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i
          class="fa-solid fa-ellipsis-vertical"></i></a>
      <div class="dropdown-menu dropdown-menu-end">
        <router-link class="dropdown-item" to="/profile">My Profile</router-link>
        <router-link class="dropdown-item" to="/edit-profile">Edit Profile</router-link>
        <router-link class="dropdown-item" to="/settings/settings">Settings</router-link>
        <router-link class="dropdown-item" to="/">Logout</router-link>
      </div>
    </div>
  </div>

  <notifications></notifications>

  <div ref="sidebarOverlay" class="sidebar-overlay" data-reff="#sidebar"></div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      isOpenBox: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
      document.documentElement.classList.toggle("mini-sidebar");
    },
    toggleSidebarOne() {
      this.isSidebarOpen = !this.isSidebarOpen;
      const sidebarOverlay = this.$refs.sidebarOverlay;
      const mainWrapper = document.querySelector('.main-wrapper');

      if (this.isSidebarOpen) {
        sidebarOverlay.classList.add("opened");
        mainWrapper.classList.add("slide-nav");
      } else {
        sidebarOverlay.classList.remove("opened");
        mainWrapper.classList.remove("slide-nav", "open-msg-box");
      }

      document.documentElement.classList.toggle("menu-opened", this.isSidebarOpen);
    },
    toggleOpenBox() {
      this.isOpenBox = !this.isOpenBox;
      const mainWrapper = document.querySelector('.main-wrapper');

      if (this.isOpenBox) {
        mainWrapper.classList.add("open-msg-box");
      } else {
        mainWrapper.classList.remove("open-msg-box");
      }
    },
    handleSidebarHover() {
      document.documentElement.classList.add("expand-menu");
    },
    handleSidebarLeave() {
      document.documentElement.classList.remove("expand-menu");
    },
  },
  mounted() {
    const sidebar = document.querySelector('.sidebar'); // Adjust the selector based on your HTML structure

    sidebar.addEventListener("mouseenter", this.handleSidebarHover);
    sidebar.addEventListener("mouseleave", this.handleSidebarLeave);
  },
  beforeDestroy() {
    const sidebar = document.querySelector('.sidebar'); // Adjust the selector based on your HTML structure

    sidebar.removeEventListener("mouseenter", this.handleSidebarHover);
    sidebar.removeEventListener("mouseleave", this.handleSidebarLeave);
  },
};
</script>
