export default {
  cartListLength(state) {
    return state.cartList.length;
  },
  totalPrice(state) {
    let totalPrice = 0;
    state.cartList.forEach(item => {
      if (item.isChecked) {
        totalPrice += item.price * item.count;
      }
    });
    // console.log(totalPrice);
    return totalPrice.toFixed(2);
  },
  checkCounts(state) {
    return state.cartList.filter(item => {
      return item.isChecked;
    }).length;
  },
  isItemAllCheck(state) {
    let isItemAllCheck = false;
    let length = state.cartList.length;
    // let count = state.cartList.filter(item => {
    //   return item.isChecked;
    // }).length;
    // if (count === length && length != 0) {
    //   isItemAllCheck = true;
    // }
    // return isItemAllCheck;
    if (length !== 0) {
      isItemAllCheck = !state.cartList.find(item => !item.isChecked);
    }
    return isItemAllCheck;
  }
};
