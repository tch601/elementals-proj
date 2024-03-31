<template>
  <div id="episode-title" class="d-flex justify-content-center">
    <div
      class="episode-title text-center"
      data-toggle="modal"
      data-target="#episode-modal"
    >
      <p class="m-0">{{ episode.title }}</p>
    </div>

    <div
      class="modal fade"
      id="episode-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="episode-modalTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {{ episode.title }}
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="font-weight-bold">Episode Details:</p>
            <div class="episode-details">{{ episode.details }}</div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" href="/edit">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "episode-title",
  props: {
    episode: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap");

.episode-title {
  top: 0;
  left: 0;
  width: 350px;
  height: 70px;
  margin: 0;
  align-items: center;
}
.episode-title p {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(207, 207, 207, 0.942);
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
.episode-title:hover p {
  letter-spacing: 3px;
}
.episode-title p::before {
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
.episode-details {
  max-height: 20vh;
  overflow: scroll;
}
</style>
