<template>
  <div
    id="home"
    class="d-flex w-100 justify-content-center justify-content-around align-items-center flex-wrap"
  >
    <CoolButton
      v-for="route in getRoutes()"
      :key="route.path"
      :route="route"
    />
  </div>
</template>

<script>
import CoolButton from "../components/Button.vue";

export default {
  name: "app",
  components: { CoolButton },
  data() {
    return {};
  },
  computed: {
    routes() {
      return this.$router.options.routes;
    },
  },
  methods: {
    getRoutes() {
      return this.routes.filter(r => r.homepage === true);
    }
  },
};
</script>

<style scoped>
#home {
  height: 93vh;
}
</style>
