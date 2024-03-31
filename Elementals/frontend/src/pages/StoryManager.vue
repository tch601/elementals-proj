<template>
  <div class="d-flex justify-content-center align-center flex-column">
    <StoryTitle :story="story" />
    <div id="seasons_container">
      <div v-for="season in seasons" :key="season.id">
        <SeasonTitle :season="season" />
      </div>
    </div>
  </div>
</template>

<script>
import { getStory, getSeasons } from "../api/api.js";
import StoryTitle from "../components/StoryTitle.vue";
import SeasonTitle from "../components/SeasonTitle.vue";
export default {
  name: "app",
  components: { StoryTitle, SeasonTitle },
  data() {
    return {
      story: {},
      seasons: [],
    };
  },
  created() {
    this.initStroy();
    this.initSeasons();
  },
  methods: {
    async initStroy() {
      this.story = (await getStory())[0];
    },
    async initSeasons() {
      this.seasons = await getSeasons();
    }
  },
};
</script>

<style scoped>
#seasons_container {
  height: 80vh;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
