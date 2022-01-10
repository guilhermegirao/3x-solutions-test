import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import routes from "./routes";
import connection from "./db";

dotenv.config();
connection();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Servidor rodando na porta :${PORT}`));
