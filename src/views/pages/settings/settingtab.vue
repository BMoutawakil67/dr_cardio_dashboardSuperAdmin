<template>
  <!-- Settings Menu -->
  <div class="settings-menu-links">
    <ul class="nav nav-tabs menu-tabs">
      <li class="nav-item settings" :class="{ active: currentPath === 'settings' }">
        <router-link class="nav-link" to="settings">General Settings</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'localization-details' }">
        <router-link class="nav-link" to="localization-details">Localization</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'payment-settings' }">
        <router-link class="nav-link" to="payment-settings">Payment Settings</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'email-settings' }">
        <router-link class="nav-link" to="email-settings">Email Settings</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'social-settings' }">
        <router-link class="nav-link" to="social-settings"
          >Social Media Login</router-link
        >
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'social-links' }">
        <router-link class="nav-link" to="social-links">Social Links</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'seo-settings' }">
        <router-link class="nav-link" to="seo-settings">SEO Settings</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'theme-settings' }">
        <router-link class="nav-link" to="theme-settings">Theme Settings</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'change-password' }">
        <router-link class="nav-link" to="change-password">Change Password</router-link>
      </li>
      <li class="nav-item settings" :class="{ active: currentPath === 'others-settings' }">
        <router-link class="nav-link" to="others-settings">Others</router-link>
      </li>
    </ul>
  </div>
  <!-- Settings Menu -->
</template>
<script>
export default {
  computed: {
    currentPath() {
      return this.$route.name;
    },
  },
  data() {
    return {
      activeClass: "active",
    };
    //  isactive : true
  },
};
</script>
