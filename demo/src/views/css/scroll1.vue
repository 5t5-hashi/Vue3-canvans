<template>
  <div
    style="
      overflow-y: scroll;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
    "
    @scroll="scroll1"
  >
    <button @click="test">测试</button>
    <div style="height: 2000px; width: 1000vw" class="scrollItem">
      <div class="videoBox">
        <video
          style="width: 500px; position: fixed; top: 0; object-fit: cover"
          :style="{ height: data.height + 'px' }"
          loop
          muted
          src="http://vod.v.jstv.com/2022/05/10/JSTV_JSWS_1652191603176_k322vD4_1936.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive } from "vue";
import { useGoodsStore, useUserStore } from "@/stores/store";
const data = reactive({
  scrollItem: null,
  height: 300,
  count: 0,
});

const userStore = useUserStore();
const goodsStore = useGoodsStore();

function init() {
  data.scrollItem = document.querySelector(".scrollItem");
  console.log(data.scrollItem.scrollTop);
}

function scroll1(e: any) {
  // console.log(e);
  console.log(e.target.scrollTop);
  data.height = e.target.scrollTop * 0.5 + 300;
}

function test() {
  // userStore.ageAdd();
  // userStore.userInfo;
  data.count += 10;
}

const addCount = computed(() => {
  return data.count + 1;
});

onMounted(() => {
  init();
});
</script>

<style scoped lang="less">
@h: 550px;
.videoBox {
  width: 500px;
  height: @h;
  // background-color: aquamarine;
  position: relative;
}
</style>
