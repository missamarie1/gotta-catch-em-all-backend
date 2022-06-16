import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";
import pokemonRouter from "./routes/pokemonRouter";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/pokemon", pokemonRouter);
export const api = functions.https.onRequest(app);
