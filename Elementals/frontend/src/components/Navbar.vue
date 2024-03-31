<template>
  <nav id="navbar" class="navbar navbar-expand-lg navbar-dark bg-dark">
    <p id="logo" class="logo navbar-brand text-bold mb-0 br-2">ELEMENTALS</p>
    <div id="routes" class="d-flex flex-row">
      <div v-for="route in getRoutes()" :key="route.name">
        <router-link
          :to="route.path"
          class="text-light pr-2 pl-2 text-decoration-none route"
          :class="route.color"
          exact
          exact-active-class="font-weight-bold"
        >
          {{ route.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  created() {},
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
      return this.routes.filter(r => r.navbar === true);
    }},
};
</script>

<style scoped>
#navbar {
  height: 7vh;
}
.route {
  position: relative;
  transition: color 0.3s ease-in-out;
}
.route::before {
  content: "";
  position: absolute;
  top: 100%;
  left: 2%;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.route:hover::before {
  transform: scaleX(1);
}

.red:hover {
  color: #ff1f71 !important;
}
.red::before {
  background-color: #ff1f71 !important;
}
.blue:hover {
  color: #2db2ff !important;
}
.blue::before {
  background-color: #2db2ff !important;
}
.dark-blue:hover {
  color: #0345ca !important;
}
.dark-blue::before {
  background-color: #0345ca !important;
}
.green:hover {
  color: #1eff45 !important;
}
.green::before {
  background-color: #1eff45 !important;
}
.purple:hover {
  color: #bf1eff !important;
}
.purple::before {
  background-color: #bf1eff !important;
}
.yellow:hover {
  color: #fff01e !important;
}
.yellow::before {
  background-color: #fff01e !important;
}
</style>
