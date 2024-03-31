<template>
  <div>
    <div class="btn" :class="route.color">
      <a :href="route.path">{{ route.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

.btn {
  position: relative;
  top: 0;
  left: 0;
  width: 325px;
  height: 70px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 45px;
  padding: 10px;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  color: #fff;
  font-weight: 400px;
  font-size: 1.5em;
  z-index: 1;
  transition: 0.5s;
  backdrop-filter: blur(15px);
}
.btn:hover a {
  letter-spacing: 3px;
}
.btn.white:hover a {
  color: black;
}
.btn a::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translate(0);
  transition: 0.5s;
  filter: blur(0px);
}
.btn:hover a::before {
  transform: skewX(45deg) translate(200px);
}
.btn::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
.btn:hover::before /*lightup button*/ {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

.btn::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: #f00;
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}
.btn:hover::after /*lightup button*/ {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}
.red::before,
.red::after {
  background: #ff1f71;
  box-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,
    0 0 60px #ff1f71;
}
.blue::before,
.blue::after {
  background: #2db2ff;
  box-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,
    0 0 60px #2db2ff;
}
.dark-blue::before,
.dark-blue::after {
  background: #0345ca;
  box-shadow: 0 0 5px #0345ca, 0 0 15px #0345ca, 0 0 30px #0345ca,
    0 0 60px #0345ca;
}
.green::before,
.green::after {
  background: #1eff45;
  box-shadow: 0 0 5px #1eff45, 0 0 15px #1eff45, 0 0 30px #1eff45,
    0 0 60px #1eff45;
}
.purple::before,
.purple::after {
  background: #bf1eff;
  box-shadow: 0 0 5px #bf1eff, 0 0 15px #bf1eff, 0 0 30px #bf1eff,
    0 0 60px #bf1eff;
}
.yellow::before,
.yellow::after {
  background: #fff01e;
  box-shadow: 0 0 5px #fff01e, 0 0 15px #fff01e, 0 0 30px #fff01e,
    0 0 60px #fff01e;
}
.white::before,
.white::after {
  background: #ffffff;
  box-shadow: 0 0 5px #ffffff, 0 0 15px #ffffff, 0 0 30px #ffffff,
    0 0 60px #ffffff;
}
</style>
