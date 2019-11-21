export default {
  addCart(state, obj) {
    // return new Promise((resolve, reject) => {
    let flag = true;
    state.cartList.forEach(item => {
      //添加之前就存在要添加的商品
      if (item.iid === obj.iid) {
        item.count++;
        flag = false;
      }
    });
    //添加之前，没有相同的商品
    if (flag) {
      state.cartList.push(obj);
    }
    // });
  },
  checkAll(state) {
    state.cartList.forEach(item => {
      item.isChecked = !item.isChecked;
    });
  }
};

//p217
