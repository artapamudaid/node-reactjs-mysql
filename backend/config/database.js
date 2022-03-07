import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'arta', 'ArtaArta_1', {
    host: "localhost",
    dialect: "mysql"
})

export default db;