<template>
  <router-view />
</template>

<style lang="less">
#app {
  height: 100%;
  width: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html,
body {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
div {
  box-sizing: border-box;
}
</style>
