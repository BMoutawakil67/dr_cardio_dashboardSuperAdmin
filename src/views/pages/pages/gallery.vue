<template>
  <div class="page-wrapper">
    <div class="content">
      <!-- Page Header -->
      <breadcrumb :title="title" :text="text" path="patients" />
      <!-- /Page Header -->
      <div id="lightgallery" class="row">
        <div
          class="col-xl-3 col-lg-3 col-md-6 col-sm-6 m-b-20"
          v-for="(image, index) in galleryImages"
          :key="index"
          @click="() => show(index)"
        >
          <a href="javascript:;" data-fancybox="gallery">
            <img
              :src="require(`@/assets/img/blog/${image.src}`)"
              class="img-fluid"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  <vue-easy-lightbox
    :visible="visible"
    :index="index"
    :imgs="
      galleryImages.map((image) => ({
        src: require(`@/assets/img/blog/${image.src}`),
      }))
    "
    @hide="visible = false"
    @on-prev="handlePrev"
    @on-next="handleNext"
  >
  </vue-easy-lightbox>
</template>
<script>
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    VueEasyLightbox,
  },
  data() {
    return {
      title: "Dashboard",
      text: "Gallery",
      visible: false,
      index: 0,
      galleryImages: [
        {
          src: "blog-01.jpg",
        },
        {
          src: "blog-02.jpg",
        },
        {
          src: "blog-03.jpg",
        },
        {
          src: "blog-04.jpg",
        },
        {
          src: "blog-01.jpg",
        },
        {
          src: "blog-02.jpg",
        },
        {
          src: "blog-03.jpg",
        },
        {
          src: "blog-04.jpg",
        },
        {
          src: "blog-01.jpg",
        },
        {
          src: "blog-02.jpg",
        },
        {
          src: "blog-03.jpg",
        },
        {
          src: "blog-04.jpg",
        },
      ],
    };
  },
  methods: {
    show(index) {
      this.index = index;
      this.visible = true;
    },
    handlePrev(oldIndex, newIndex) {},
    handleNext(oldIndex, newIndex) {},
  },
};
</script>
