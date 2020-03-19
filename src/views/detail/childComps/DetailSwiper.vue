<template>
  <div class="detail-swiper">
    <swiper>
      <swiper-item  class="swiper-item" v-for="item in topImages" :key="item.id">
        <img :src="item" alt />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.swiper-item{
  height: 400px;
  /* overflow: hidden; */
}
</style>