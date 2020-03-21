<template>
<div class="cart">
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartCount}})</div>
  </nav-bar>
  <cart-list/>
  <cart-bottom-bar/>
</div>
</template>

<script>
// 引用 components中的组件
import NavBar from "components/common/navbar/NavBar";

import { mapGetters } from 'vuex'

// 引用child子组件
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar';

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    ...mapGetters([
      'cartCount'
    ])
  },
  methods: {
  },
}
</script>

<style scoped>
.nav-bar {
  background: var(--color-tint);
  color: #fff;
}
</style>