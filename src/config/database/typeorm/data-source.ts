import { env } from "process";
import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

const dataSource = new DataSource({
    type: "postgres",
    //host: "172.19.0.2",
    host: env.DB_HOST,
    port: Number(env.DB_PORT),
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: true,
    logging: false,
    namingStrategy: new SnakeNamingStrategy(),
    entities: ["src/modules/**/entities/*.entity.ts"],
});

export default dataSource;
