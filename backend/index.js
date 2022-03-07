import express from "express";
import db from "./config/database";
import bookRoutes from "./routes/index";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Database Connected ...');
} catch (error) {
    console.error('Connection Error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/books', bookRoutes);

app.listen(5000, () => console.log('Server is running at port 5000'));
