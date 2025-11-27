<template>
  <div id="app">
    <div class="main-wrapper">
      <layout-header v-if="showHeader"></layout-header>

      <sidebar v-if="showSidebar"></sidebar>

      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    return {
      router,
    };
  },
  computed: {
    showHeader() {
      return (
        this.$route.path !== "/" &&
        this.$route.path !== "/register" &&
        this.$route.path !== "/forgot-password" &&
        this.$route.path !== "/change-password2" &&
        this.$route.path !== "/lock-screen" &&
        this.$route.path !== "/error-404" &&
        this.$route.path !== "/error-500"
      );
    },
    showSidebar() {
      return (
        this.$route.path !== "/" &&
        this.$route.path !== "/register" &&
        this.$route.path !== "/forgot-password" &&
        this.$route.path !== "/change-password2" &&
        this.$route.path !== "/lock-screen" &&
        this.$route.path !== "/error-404" &&
        this.$route.path !== "/error-500"
      );
    },
  },
};
</script>
