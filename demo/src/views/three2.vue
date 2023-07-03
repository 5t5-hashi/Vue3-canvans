<template>
  <div id="box"></div>
</template>

<script lang="ts" setup>
import * as THREE from "three";
import { onMounted } from "vue";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);

const scene = new THREE.Scene();

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });

var points: any = [];

var geometry = {};
var line = {};
function init() {
  document.querySelector("#box").appendChild(renderer.domElement);
  points.push(new THREE.Vector3(-10, 0, 0));
  points.push(new THREE.Vector3(0, 10, 0));
  points.push(new THREE.Vector3(10, 0, 0));
  geometry = new THREE.BufferGeometry().setFromPoints(points);
  line = new THREE.Line(geometry, material);

  scene.add(line);
  renderer.render(scene, camera);
}

onMounted(() => {
  init();
});
</script>
