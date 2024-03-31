import { getStroiesFromDB } from "../repositories/storyRepository.js";

const getStories = () => getStroiesFromDB();

export { getStories };
