<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :item-info="item" :key="index" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh()
  }

  // props: {
  //   cartList: {
  //     type: Array,
  //     default() {
  //       return [];
  //     }
  //   }
  // }
};
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 137px);
}
.content {
  height: 100%;
  overflow: hidden;
  /* margin-top: 44px; */
}
</style>
