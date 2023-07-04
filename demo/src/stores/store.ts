import { defineStore } from "pinia";

const useUserStore = defineStore("user", {
  // 存储库，他必须以一个函数的形式存在，在函数里面返回具体要存储的数据或者对象
  state: () => ({
    name: "Jerry",
    age: 20,
    userInfo: "",
  }),
  // 当前存储库的唯一键
  persist: {
    enabled: true,
    strategies: [
      {
        key: "message",
        storage: localStorage,
        paths: ["age"],
      },
    ],
  },
  // 相当于计算属性 computed
  getters: {
    userInfo: (state) => {
      return state.age + 1;
    },
  },

  // 可以处理异步或者同步方法逻辑
  actions: {
    ageAdd() {
      this.age += 1;
    },
  },
});

const useGoodsStore = defineStore({
  // 当前存储库的唯一键
  id: "goods",

  // 存储库，他必须以一个函数的形式存在，在函数里面返回具体要存储的数据或者对象
  state: () => ({
    name: "衣服",
    price: 100,
    goodsInfo: "",
  }),

  // 相当于计算属性 computed
  getters: {
    goodsInfo: (state: any) => "名称：" + state.name + "--价格：" + state.price,
  },

  // 可以处理异步或者同步方法逻辑
  actions: {},
});

export { useGoodsStore, useUserStore };
