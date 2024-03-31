import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
});

const getStory = async () => {
  return await (await axiosInstance.get("/stories")).data;
};
const getSeasons = async () => {
  return await (await axiosInstance.get("/seasons")).data;
};

const getEpisodes = async () => {
  return await (await axiosInstance.get("/episodes")).data;
};

const getEpisodesBySeason = async (id) => {
  return await (await axiosInstance.get(`/episodes/season/${id}`)).data;
};

export { getStory, getSeasons, getEpisodes, getEpisodesBySeason };
