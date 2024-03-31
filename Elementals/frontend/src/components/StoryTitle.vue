<template>
  <div id="story-title" class="d-flex justify-content-center p-3">
    <div class="story-title text-center">
      <p class="m-0">{{ story.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "story-title",
  components: {},
  props: {
    story: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

.story-title {
  top: 0;
  left: 0;
  width: 500px;
  height: 70px;
  margin: 0;
  align-items: center;
}
.story-title p {
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
.story-title:hover p {
  letter-spacing: 3px;
}
.story-title p::before {
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
</style>
