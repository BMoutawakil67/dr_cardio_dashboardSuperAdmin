<template>
  <aside class="col-md-4">
    <div class="widget post-widget">
      <div class="relat-head">
        <h5>Related Posts</h5>
        <a href="javascript:;">Show All</a>
      </div>
      <ul class="latest-posts">
        <li v-for="record in Related" :key="record.id">
          <div class="post-thumb">
            <router-link to="blog-details">
              <img
                class="img-fluid"
                :src="require(`@/assets/img/blog/${record.Image}`)"
                alt=""
              />
            </router-link>
          </div>
          <div class="post-info">
            <div class="date-posts">
              <h5>{{ record.Department }}</h5>
              <span class="ms-2">05 Sep 2022</span>
            </div>
            <h4>
              <router-link to="blog-details">{{ record.Title }}</router-link>
            </h4>
            <p>{{ record.Link }}<i class="fa fa-long-arrow-right ms-2"></i></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="widget tags-widget">
      <div class="relat-head">
        <h5>Tags</h5>
      </div>
      <ul class="tags">
        <li v-for="record in Tags" :key="record.id">
          <a href="#." class="tag">{{ record.Name }}</a>
        </li>
      </ul>
    </div>
    <div class="widget post-widget">
      <div class="relat-head">
        <h5>Most Reads</h5>
        <a href="javascript:;">Show All</a>
      </div>
      <ul class="latest-posts">
        <li v-for="record in Mostread" :key="record.id">
          <div class="post-thumb">
            <router-link to="blog-details">
              <img
                class="img-fluid"
                :src="require(`@/assets/img/blog/${record.Image}`)"
                alt=""
              />
            </router-link>
          </div>
          <div class="post-info">
            <div class="date-posts">
              <h5>{{ record.Department }}</h5>
              <span class="ms-2">05 Sep 2022</span>
            </div>
            <h4>
              <router-link to="blog-details">{{ record.Title }}</router-link>
            </h4>
            <p>{{ record.Link }}<i class="fa fa-long-arrow-right ms-2"></i></p>
          </div>
        </li>
      </ul>
    </div>
    <div class="widget category-widget">
      <div class="relat-head mb-0">
        <h5>Categories</h5>
      </div>
      <ul class="categories">
        <li v-for="record in Categories" :key="record.id">
          <a href="#."
            ><img
              :src="require(`@/assets/img/icons/${record.Image}`)"
              class="me-1"
              alt=""
            />{{ record.Title }}</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
import Related from "@/assets/json/related.json";
import Tags from "@/assets/json/tags.json";
import Mostread from "@/assets/json/mostread.json";
import Categories from "@/assets/json/categories.json";
export default {
  data() {
    return {
      Categories: Categories,
      Mostread: Mostread,
      Tags: Tags,
      Related: Related,
    };
  },
};
</script>
