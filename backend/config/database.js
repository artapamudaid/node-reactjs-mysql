import { Sequelize } from "sequelize";

const db = new Sequelize('mern_db', 'arta', {
    host: "localhost",
    dialect: "mysql"
})

export default db;