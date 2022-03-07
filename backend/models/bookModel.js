import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Book = db.define('books', {
    title:{
        type: DataTypes.STRING
    },
    writer: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
});

export default Book;