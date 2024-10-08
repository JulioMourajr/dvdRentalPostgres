import "reflect-metadata";
import "./config/database/typeorm";
import "./config/tsyringe"

import express from "express";
import router from "./shared/api/routes";

const app = express();

app.use(express.json());

app.use("/api", router);



export default app;