<template>
  <ul>
    <template v-for="item in sidebarData" :key="item.tittle">
      <li class="menu-title">
        <span>{{ item.tittle }}</span>
      </li>
      <template v-for="menu in item.menu" :key="menu.menuValue">
        <li v-if="menu.hasSubRoute === false">
          <router-link :to="menu.route">
            <span class="menu-side">
              <i class="fa" :class="menu.icon" v-if="menu.faIcon === true"></i>
              <img :src="require(`@/assets/img/icons/${menu.image}`)" alt="" v-if="!menu.faIcon" />
            </span>
            <span>{{ menu.menuValue }}</span>
          </router-link>
        </li>
        <li class="submenu" v-if="menu.hasSubRoute === true" >
          <a :class="{ subdrop: menu.showSubRoute, active: route_array[1] === menu.active_link }" @click="expandSubMenus(menu)" href="javascript:void(0)">
            <span class="menu-side">
              <i class="fa" :class="menu.icon" v-if="menu.faIcon === true"></i>
              <img :src="require(`@/assets/img/icons/${menu.image}`)" alt="" v-if="!menu.faIcon" />
            </span>
            <span>{{ menu.menuValue }}</span>
            <span class="menu-arrow"></span>
          </a>
          <ul :class="menu.showSubRoute === true
            ? 'd-block'
            : 'd-none'">
            <template v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
              <li :class="{ active: currentPath === subMenu.active_link }">
                <router-link :to="subMenu.route">
                  {{ subMenu.menuValue }}
                </router-link>
              </li>
            </template>
          </ul>
        </li>
      </template>
    </template>
  </ul>
</template>

<script>
import sidebarData from "@/assets/json/sidebar-data.json";
export default {
  data() {
    return {
      sidebarData: sidebarData,
      route_array: [],
    };
  },
  computed: {
    currentPath() {
      this.route_array = this.$route.path.split("/");
      return this.$route.path;
    },
  },
  methods: {
    expandSubMenus(menu) {
      this.sidebarData.forEach(item => {
        item.menu.forEach(subMenu => {
          if (subMenu !== menu) {
            subMenu.showSubRoute = false;
          }
        });
      });
      menu.showSubRoute = !menu.showSubRoute;
    },
  },
};
</script>
