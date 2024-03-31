import {
  getEpisodesFromDB,
  getEpisodesBySeasonFromDB,
} from "../repositories/episodeRepository.js";

const getEpisodes = async () => await getEpisodesFromDB();

const getEpisodesBySeason = async (id) => await getEpisodesBySeasonFromDB(id);

export { getEpisodes, getEpisodesBySeason };
