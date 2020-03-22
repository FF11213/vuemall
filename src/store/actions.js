import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

const actions = {
  addCart(context, payload){
    return new Promise((resolve, reject) => {
      // 查找之前是否添加过次商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      
      //  判断
      if (oldProduct) { // 数量+1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      } else { // 添加新的商品
        payload.count = 1
        context.commit(ADD_TO_CART, payload)
        resolve('已加入购物车')
      }
    })
  }
}

export default actions

