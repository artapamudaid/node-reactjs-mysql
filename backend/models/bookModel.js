import { Sequelize } from "sequelize/types";
import db from "../config/database";

const { DataType } = Sequelize;

const Book = db.define('books', {
    title: {
        type: DataType.STRING
    },
    writer: {
        type: DataType.STRING
    },
}, {
    freezeTableName: true
});

export default Book;