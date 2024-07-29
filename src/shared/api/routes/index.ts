import { Router } from "express";

import filmRouter from '../../../modules/movies/film/api/routes/film.routes';
import categoryRouter from '../../../modules/movies/category/api/routes/category.routes';

const router = Router();

router.use('/films', filmRouter);
router.use('/categories', categoryRouter);

export default router;