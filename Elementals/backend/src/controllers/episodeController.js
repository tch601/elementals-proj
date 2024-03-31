import { StatusCodes } from "http-status-codes";
import { customError } from "../errors/CustomError.js";
import {
  getEpisodes,
  getEpisodesBySeason,
} from "../services/episodeService.js";

const getEpisodesHandler = async (req, res) => {
  try {
    const episodes = await getEpisodes();

    res.status(StatusCodes.OK).send(episodes);
  } catch (error) {
    res.send(
      customError(
        "episode-error",
        `Failed to get episodes`,
        StatusCodes.InternalServerError
      )
    );
  }
};

const getEpisodesBySeasonHandler = async (req, res) => {
  try {
    const episodes = await getEpisodesBySeason(parseInt(req.params.seasonId));

    res.status(StatusCodes.OK).send(episodes);
  } catch (error) {
    res.send(
      customError(
        "episode-error",
        `Failed to get episodes`,
        StatusCodes.InternalServerError
      )
    );
  }
};

export { getEpisodesHandler, getEpisodesBySeasonHandler };
