<template>
<div>
  <h3>购物车</h3>
  <p>{{$store.state.counter}}</p>
  <button @click="add">+</button>
  <button @click="sub">-</button>
</div>

</template>

<script>
export default {
  name: "Cart",
  methods: {
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    }
  },
}
</script>

<style scoped>

</style>