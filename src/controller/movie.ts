import commonCRUD from "./common";
import movie from "../model/movie";

class MovieController extends commonCRUD {
  constructor(model: any) {
    super(model);
  }
}

export default new MovieController(movie);
