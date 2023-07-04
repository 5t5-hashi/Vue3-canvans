<template>
  <div class="box">
    <canvas
      id="myCanvans"
      @mousedown="mousedown"
      :height="data.canvansH"
      :width="data.canvansW"
      @mouseup="mouseup"
      @mousemove="mousemove"
    ></canvas>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";

const data = reactive({
  ctx: null,
  img: null,
  mouseIn: false,
  imgW: 50,
  imgH: 50,
  imgX: 0,
  imgY: 0,
  canvansW: 0,
  canvansH: 0,
  mouseDown: false,
  inItem: false,
  x: 0, //上一次拖动的x
  y: 0, //上一次拖动的y
});

function init(): void {
  data.canvansH = document.querySelector(".box").offsetHeight;
  data.canvansW = document.querySelector(".box").offsetWidth;
  const canvas: any = document.getElementById("myCanvans");
  console.log(canvas);

  if (canvas.getContext) {
    data.ctx = canvas.getContext("2d");
    // data.ctx.fillStyle = "rgb(200,0,0)";
    // data.ctx.fillRect(0, 0, 10, 10);
    data.img = new Image();

    data.img.src =
      "https://p3-passport.byteimg.com/img/user-avatar/59d1266c29266504887474399dfd4cef~100x100.awebp";
    data.img.onload = () => {
      data.ctx.drawImage(data.img, data.imgX, data.imgY, data.imgW, data.imgH);
    };
  }
}

// 鼠标点击
function mousedown(e: any): void {
  data.mouseDown = true;

  // 判断点击的位置是否在图形里面
  if (
    data.imgX < e.offsetX &&
    e.offsetX < data.imgX + data.imgW &&
    data.imgY < e.offsetY &&
    e.offsetY < data.imgY + data.imgH
  ) {
    data.inItem = true;
    // 此时记录点击的位置
    data.x = e.offsetX;
    data.y = e.offsetY;
  }
}

// 鼠标移动
function mousemove(e: any): void {
  // 如果鼠标在图形里且已经下压了鼠标就触发鼠标移动事件
  if (!data.mouseDown || !data.inItem) {
    return;
  }

  // console.log(
  //   `clientX:${e.clientX}--clientY:${e.clientY}--offsetX:${e.offsetX}--offsetY:${e.offsetY}--pageX:${e.pageX}--pageY:${e.pageY}`
  // );
  // 记录移动的x和y的差值
  let moveX = e.offsetX - data.x;
  let moveY = e.offsetY - data.y;

  // 清除画布

  clear();

  data.ctx.drawImage(
    data.img,
    data.imgX + moveX,
    data.imgY + moveY,
    data.imgW,
    data.imgH
  );
}

// 封装绘画
function draw() {
  data.ctx.drawImage(data.img, data.imgX, data.imgY, data.imgW, data.imgH);
}

// 鼠标抬起
function mouseup(e: any): void {
  // 如果没有点在图上并且抬起的情况
  if (!data.inItem) {
    return;
  }

  data.mouseDown = false;
  data.inItem = false;

  // 记录松手后的图形坐标已便下次点击时找到
  data.imgX = data.imgX + e.offsetX - data.x;
  data.imgY = data.imgY + e.offsetY - data.y;
  console.log(
    `clientX:${e.clientX}--clientY:${e.clientY}--offsetX:${e.offsetX}--offsetY:${e.offsetY}--pageX:${e.pageX}--pageY:${e.pageY}`
  );
  console.log(data.imgX);

  // 边框的限制，如果图形的坐标超出范围则重定向位置
  if (data.imgX < 0) {
    data.imgX = 0;
    clear();
    draw();
  }
  if (data.imgX > data.canvansW - data.imgW) {
    data.imgX = data.canvansW - data.imgW;
    clear();
    draw();
  }
  if (data.imgY < 0) {
    data.imgY = 0;
    clear();
    draw();
  }
  if (data.imgY > data.canvansH - data.imgH) {
    data.imgY = data.canvansH - data.imgH;
    clear();
    draw();
  }
}

// 清除画布封装
function clear() {
  data.ctx.clearRect(0, 0, data.canvansW, data.canvansH);
}

onMounted(() => {
  init();
});
</script>

<style scoped>
.box {
  height: 100%;
  width: 100%;
}
/* #myCanvans {
  height: 100%;
  width: 100%;
} */
</style>
