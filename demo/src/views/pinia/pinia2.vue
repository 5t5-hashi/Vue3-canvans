<template>
  <div>
    <button @click="test">测试2</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useGoodsStore, useUserStore } from "@/stores/store";

const userStore = useUserStore();
const goodsStore = useGoodsStore();
const data = reactive({
  count: 0,
});

function test() {
  userStore.ageAdd();
  //   console.log(userStore.userInfo);
  console.log(userStore.age);
}
</script>
