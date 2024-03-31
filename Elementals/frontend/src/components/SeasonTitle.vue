<template>
  <div id="season-title" class="d-flex justify-content-center flex-row">
    <div class="align-items-top mr-2">
      <div class="season-title text-center d-flex mb-2">
        <p
          class="mb-2"
          :class="season.color"
          @click="showEpisodes = !showEpisodes"
        >
          {{ season.title }}
        </p>
      </div>
    </div>
    <div v-show="showEpisodes">
      <div v-for="episode in episodes" :key="episode.id" class="mb-2">
        <EpisodeTitle :episode="episode" />
      </div>
    </div>
  </div>
</template>

<script>
import { getEpisodes } from "../api/api.js";
import EpisodeTitle from "../components/EpisodeTitle.vue";

export default {
  name: "season-title",
  components: { EpisodeTitle },
  props: {
    season: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showEpisodes: false,
      episodes: [],
    };
  },
  created() {
    this.initEpisodes();
  },
  methods: {
    async initEpisodes() {
      this.episodes = (await getEpisodes()).filter(
        (ep) => ep.seasonId === this.season.id
      );
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

.season-title {
  top: 0;
  left: 0;
  min-width: 350px;
  min-height: 70px;
  margin: 0;
  align-items: center;
}
.season-title p {
  top: 0;
  left: 0;
  width: 100%;
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
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
.season-title:hover p {
  letter-spacing: 3px;
}
.season-title p::before {
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
.red {
  background: rgba(222, 21, 21, 0.942);
}
.crimson {
  background: rgba(164, 17, 17, 0.713);
}
.blue {
  background: rgb(11, 127, 222);
}
.white-blue {
  background: rgba(198, 240, 244, 0.88);
}
.green {
  background: rgb(7, 127, 13);
}
.brown {
  background: rgba(255, 123, 0, 0.918);
}
.white-purple {
  background: rgb(227, 188, 245);
}
.dark-blue {
  background: rgba(5, 19, 176, 0.961);
}
.yellow {
  background: rgba(238, 188, 24, 0.995);
}
</style>
