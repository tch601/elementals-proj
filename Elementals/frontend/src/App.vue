<template>
  <main id="app">
    <Navbar />
    <RouterView />
  </main>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: { Navbar },
};
</script>

<style scoped>
#app {
  background-color: #212121;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  font-family: "Roboto", sans-serif;
}
</style>
