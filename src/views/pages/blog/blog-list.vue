<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="blog" />
      <!-- /Page Header -->
      <div class="row">
        <div class="col-sm-6 col-md-6 col-xl-4" v-for="record in Blog" :key="record.id">
          <div class="blog grid-blog">
            <div class="blog-image">
              <router-link to="blog-details"
                ><img
                  class="img-fluid"
                  :src="require(`@/assets/img/blog/${record.Image}`)"
                  alt=""
              /></router-link>
              <div class="blog-views">
                <h5>{{ record.category }}</h5>
              </div>
              <ul class="nav view-blog-list blog-views">
                <li><i class="feather-message-square me-1"></i>{{ record.Message }}</li>
                <li><i class="feather-eye me-1"></i>{{ record.Views }}</li>
              </ul>
            </div>
            <div class="blog-content">
              <div class="blog-grp-blk">
                <div class="blog-img-blk">
                  <router-link to="/profile"
                    ><img
                      class="img-fluid"
                      :src="require(`@/assets/img/profiles/${record.Avatar}`)"
                      alt=""
                  /></router-link>
                  <div class="content-blk-blog ms-2">
                    <h4>
                      <router-link to="/profile">{{ record.Name }}</router-link>
                    </h4>
                    <h5>{{ record.Department }}</h5>
                  </div>
                </div>
                <span><i class="feather-calendar me-1"></i>{{ record.Date }}</span>
              </div>
              <h3 class="blog-title">
                <router-link to="blog-details">{{ record.Title }}</router-link>
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua...
              </p>
              <router-link to="blog-details" class="read-more d-flex">
                {{ record.Link }}<i class="fa fa-long-arrow-right ms-2"></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Blog from "@/assets/json/blog.json";
export default {
  data() {
    return {
      Blog: Blog,
      title: "Blog",
      text: "Blogs",
    };
  },
};
</script>
