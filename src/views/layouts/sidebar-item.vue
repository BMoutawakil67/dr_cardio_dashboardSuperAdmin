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
<<<<<<< HEAD
    <li class="submenu">
      <a href="javascript:void(0);"><i class="fa fa-share-alt"></i> <span>Multi Level</span>
        <span class="menu-arrow"></span></a>
      <ul style="display: none">
        <li class="submenu">
          <a href="javascript:void(0);"><span>Level 1</span> <span class="menu-arrow"></span></a>
          <ul style="display: none">
            <li>
              <a href="javascript:void(0);"><span>Level 2</span></a>
            </li>
            <li class="submenu">
              <a href="javascript:void(0);">
                <span> Level 2</span> <span class="menu-arrow"></span></a>
              <ul style="display: none">
                <li><a href="javascript:void(0);">Level 3</a></li>
                <li><a href="javascript:void(0);">Level 3</a></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);"><span>Level 2</span></a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:void(0);"><span>Level 1</span></a>
        </li>
      </ul>
    </li>
=======
>>>>>>> d7b95d000347e740153a809c33616ccc88468999
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
