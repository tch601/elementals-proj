import { getSeasonsFromDB } from "../repositories/seasonRepository.js";

const getSeasons = async () => await getSeasonsFromDB();

export { getSeasons };
