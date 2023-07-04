<template>
  <div class="box">
    <canvas
      id="myCanvans"
      :height="data.canvasH"
      :width="data.canvasW"
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
  imgX: 800,
  imgY: 800,
  canvasW: 0,
  canvasH: 0,
  shotNum: 0,
  shotArr: [
    { w: 10, h: 50, x: 0, y: 0 },
    { w: 10, h: 50, x: 41, y: 0 },
    { w: 10, h: 50, x: 120, y: 0 },
    { w: 10, h: 50, x: 290, y: 0 },
  ],
});

function init(): void {
  shotMove();
  data.canvasH = document.querySelector(".box").offsetHeight;
  data.canvasW = document.querySelector(".box").offsetWidth;
  const canvas: any = document.getElementById("myCanvans");
  //   console.log(canvas);

  if (canvas.getContext) {
    data.ctx = canvas.getContext("2d");
    data.img = new Image();

    data.img.src =
      "https://marketplace.canva.cn/PV_bk/MACFtLPV_bk/2/tl/canva-MACFtLPV_bk.png";
    data.img.onload = () => {
      data.ctx.drawImage(data.img, data.imgX, data.imgY, data.imgW, data.imgH);
    };
  }

  //   按键控制飞机移动
  document.onkeydown = function (event) {
    if (event.keyCode == "38") {
      console.log("按下:上键:");
      data.imgY -= 10;
      check();
      clear();
      draw();
    } else if (event.keyCode == "37") {
      console.log("按下:左键:");
      data.imgX -= 10;
      check();
      clear();
      draw();
    } else if (event.keyCode == "39") {
      console.log("按下:右键:");
      data.imgX += 10;
      check();
      clear();
      draw();
    } else if (event.keyCode == "40") {
      console.log("按下:下键:");
      data.imgY += 10;
      check();
      clear();
      draw();
    }
  };

  //   随机子弹数量
}

function shotMove() {
  //   setInterval(() => {
  //     clear();
  //     draw();
  //     data.ctx.fillRect(Math.round(Math.random() * (800 - 0) + 800), 0, 10, 50);
  //     data.ctx.fillStyle = "green";
  //     data.ctx.fill();
  //   }, 1000);
}

function check() {
  // 边框的限制，如果图形的坐标超出范围则重定向位置
  if (data.imgX < 0) {
    data.imgX = 0;
    clear();
    draw();
  }
  if (data.imgX > data.canvasW - data.imgW) {
    data.imgX = data.canvasW - data.imgW;
    clear();
    draw();
  }
  if (data.imgY < 0) {
    data.imgY = 0;
    clear();
    draw();
  }
  if (data.imgY > data.canvasH - data.imgH) {
    data.imgY = data.canvasH - data.imgH;
    clear();
    draw();
  }
}

// 封装绘画
function draw() {
  data.ctx.drawImage(data.img, data.imgX, data.imgY, data.imgW, data.imgH);
}

// 清除画布封装
function clear() {
  data.ctx.clearRect(0, 0, data.canvasW, data.canvasH);
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
