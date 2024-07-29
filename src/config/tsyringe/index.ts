import { container } from "tsyringe";

import { FilmControllerImpl } from "../../modules/movies/film/api/controllers/impl/FilmControllerImpl";
import { CategoryControllerImpl } from "../../modules/movies/category/api/controllers/impl/CategoryControllerImpl";


import { FilmServiceImpl } from "../../modules/movies/film/business/services/impl/FilmServiceImpl";
import { CategoryServiceImpl } from "../../modules/movies/category/business/services/impl/CategoryServiceImpl";


import { FilmRepositoryImpl } from "../../modules/movies/film/database/repositories/impl/typeorm/repositories/FilmRepositoryImpl";
import { CategoryRepositoryImpl } from "../../modules/movies/category/database/repositories/impl/typeorm/repositories/CategoryRepositoryImpl";


container.register("FilmController", {useClass: FilmControllerImpl});
container.register("CategoryController", {useClass: CategoryControllerImpl});


container.register("FilmService", {useClass: FilmServiceImpl});
container.register("CategoryService", {useClass: CategoryServiceImpl});


container.register("FilmRepository", {useClass: FilmRepositoryImpl});
container.register("CategoryRepository", {useClass: CategoryRepositoryImpl});

