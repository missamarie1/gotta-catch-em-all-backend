import express from "express";
import { getClient } from "../db";
import { Pokemon } from "../models/Pokemon";

const pokemonRouter = express.Router();

export const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

pokemonRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Pokemon>("").find().toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

pokemonRouter.get("/profile", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Pokemon>("").find().toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

pokemonRouter.get("/leaderboard", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client.db().collection<Pokemon>("").find().toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default pokemonRouter;
