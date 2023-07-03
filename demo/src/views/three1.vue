<template>
  <div id="box"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { onMounted, reactive, ref } from "vue";

const data = reactive({
  geometry: null,
  material: null,
  cube: null,
});

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  500,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.SphereGeometry(15, 32, 16);
const material = new THREE.LineBasicMaterial({
  color: "#FFB6C1",
  linewidth: 2,
  linecap: "round", //ignored by WebGLRenderer
  linejoin: "round", //ignored by WebGLRenderer
});
const cube = new THREE.Mesh(geometry, material);
// 定义一个网格，在网格上放置物体并设置他的材质

function init() {
  renderer.setSize(window.innerWidth, window.innerHeight);

  document.querySelector("#box").appendChild(renderer.domElement);

  //   场景中添加网格
  scene.add(cube);
  camera.position.z = 50;
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  //   渲染场景，添加相机
  renderer.render(scene, camera);
}

onMounted(() => {
  init();
});
</script>

<style scoped></style>
