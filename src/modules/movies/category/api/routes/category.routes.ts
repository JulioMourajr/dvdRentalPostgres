import { Router } from "express";
import { container } from "tsyringe";

import baseRoutes from "../../../../base/base.routes";

const categoryRouter = Router();

const categoryController = container.resolve("CategoryController");

categoryRouter.use('/', baseRoutes(categoryController));

export default categoryRouter;