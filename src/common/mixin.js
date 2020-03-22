import {POP, NEW, SELL} from "./const";

import { debounce } from './utils'
import BackTop from "components/content/backTop/BackTop"

export const itemListenerMixin = {
  data() {
    return {
      itemImageListener: null,
      newRefresh: null
    }
  },
  mounted() {
    // 监听item中图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImageListener = () => {
      this.newRefresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImageListener);
    // console.log('我是 mixin内容');
    
  }
}

export const tabControlMixin = {
  data: function () {
    return {
      currentType: POP
    }
  },
  methods: {
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP
          break
        case 1:
          this.currentType = NEW
          break
        case 2:
          this.currentType = SELL
          break
      }
      console.log(this.currentType);
    }
  }
}
// export const backTopMixin = {
//   components: {
//     BackTop
//   },
//   data(){
//     return {
//       isShowBackTop: false
//     }
//   },
//   methods: {
//     backTop() {
//       this.$refs.scroll.scrollTo(0, 0, 300);
//     }
//   }
// }
