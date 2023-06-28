<template>
  <div class="home">
    <a-layout style="height: 100%; width: 100%">
      <a-layout-sider style="height: 100%" theme="light">
        <a-menu :openKeys="data.openKeys" style="width: 100%" mode="inline">
          <a-sub-menu v-for="item in data.menu" :key="item.key">
            <template #icon>
              <AppstoreOutlined />
            </template>
            <template #title>{{ item.name }}</template>
            <a-menu-item
              v-for="item2 in item.childrens"
              :key="item2.key"
              @click="toPath(item2.path)"
              >{{ item2.name }}</a-menu-item
            >
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background-color: #fff"
          >Canvans练习</a-layout-header
        >
        <a-layout-content>
          <router-view />
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  openKeys: ["demo1"],
  menu: [
    {
      name: "demo1",
      key: "demo1",
      childrens: [{ name: "移动图片", key: "move1", path: "move1" }],
    },
  ],
});

// 跳转路由
function toPath(e: string): void {
  router.push({ path: e });
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
