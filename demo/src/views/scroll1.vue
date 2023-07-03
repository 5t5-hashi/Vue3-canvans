<template>
  <div
    style="overflow-y: scroll; height: 100vh; width: 100vw"
    @scroll="scroll1"
  >
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
import { onMounted, reactive, watch } from "vue";

const data = reactive({
  scrollItem: null,
  height: 300,
});

function init() {
  data.scrollItem = document.querySelector(".scrollItem");
  console.log(data.scrollItem.scrollTop);
}

function scroll1(e: any) {
  // console.log(e);
  console.log(e.target.scrollTop);
  data.height = e.target.scrollTop * 0.5 + 300;
}

onMounted(() => {
  init();
});
</script>

<style scoped lang="less">
@h: 550px;
.videoBox {
  width: 500px;
  height: @h;
  background-color: aquamarine;
  position: relative;
}
</style>
