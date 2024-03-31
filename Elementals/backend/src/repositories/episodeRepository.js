import { episodes } from "../data/episodeData.js";

const getEpisodesFromDB = async () => episodes;

const getEpisodesBySeasonFromDB = async (id) => episodes.filter((ep) => ep.seasonId === id);

export { getEpisodesFromDB, getEpisodesBySeasonFromDB };
