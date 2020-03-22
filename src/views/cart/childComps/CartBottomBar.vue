<template>
  <div class="bottom-bar">
    <CheckButton class="select-all"  :isChecked="isSelectAll" @checkBtnClick="checkBtnClick" v-model="isSelectAll"></CheckButton>
    <span>全选</span>
    <span class="total-price">合计: ¥{{totalPrice}}</span>
    <span class="buy-product" @click="calcClick">结算({{buySelect}})</span>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";
import { mapGetters } from 'vuex'

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    // vuex映射关系
    ...mapGetters(['cartList']),
    totalPrice() {
      return this.cartList.filter(item => {
          return item.checked;
        }) // 过滤
        .reduce((preValue, item) => {
          return preValue + item.count * item.newPrice;
        }, 0)
        .toFixed(2); // 保留两位小数
    },
    buySelect() {
      return this.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.cartList.length === 0) return false
      return !this.cartList.find(item => !item.checked )
    }
  },
  methods: {
    checkBtnClick() {
      // 1.判断是否有未选中的按钮
      let isSelectAll = this.$store.getters.cartList.find(
        item => !item.checked
      );

      // 2.有未选中的内容, 则全部选中
      if (isSelectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = true;
        });
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = false;
        });
      }
    },

    calcClick() {
      if (!this.isSelectAll) {
        this.$toast.show('请先选择要购买的商品')
      }
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}

.bottom-bar .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}

.bottom-bar .total-price {
  margin-left: 130px;
  font-size: 15px;
  color: gray
}

.bottom-bar .buy-product {
  background-color: var(--color-tint);
  color: #fff;
  width: 90px;
  height: px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
