import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "../../../../base/base.routes";

const filmRouter = Router();

const filmController = container.resolve("FilmController");

filmRouter.use('/', baseRoutes(filmController));

export default filmRouter;