import { StatusCodes } from "http-status-codes";
import { customError } from "../errors/CustomError.js";
import { getSeasons } from "../services/seasonService.js";

const getSeasonsHandler = async (req, res) => {
  try {
    const users = await getSeasons();

    res.status(StatusCodes.OK).send(users);
  } catch (error) {
    res.send(
      customError(
        "season-error",
        `Failed to get seasons`,
        StatusCodes.InternalServerError
      )
    );
  }
};

export { getSeasonsHandler };
