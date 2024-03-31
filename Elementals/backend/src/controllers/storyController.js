import { StatusCodes } from "http-status-codes";
import { customError } from "../errors/CustomError.js";
import { getStories } from "../services/storyService.js";

const getStoriesHandler = (req, res) => {
  try {
    const stories = getStories();

    res.status(StatusCodes.OK).send(stories);
  } catch (error) {
    res.send(
      customError(
        "story-error",
        `Failed to get stories`,
        StatusCodes.InternalServerError
      )
    );
  }
};

export { getStoriesHandler };
