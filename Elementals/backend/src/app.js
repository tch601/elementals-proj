import cors from "cors";
import express from "express";
import { errorLogger, errorMiddleware } from "./middlewares/errorMiddleware.js";
import storyRouter from "./routers/storyRouter.js";
import seasonRouter from "./routers/seasonsRouter.js";
import episodeRouter from "./routers/episodeRouter.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use("/stories", storyRouter);
app.use("/seasons", seasonRouter);
app.use("/episodes", episodeRouter);
app.use(errorLogger);
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
