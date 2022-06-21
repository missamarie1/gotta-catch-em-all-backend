import express from "express";
import { getClient } from "../db";
import { PokemonEasy } from "../models/Pokemon";

const pokemonRouter = express.Router();

export const errorResponse = (error: any, res: any) => {
  console.error("FAIL", error);
  res.status(500).json({ message: "Internal Server Error" });
};

//change collectin name when created
pokemonRouter.get("/", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<PokemonEasy>("")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

pokemonRouter.get("/questions", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<PokemonEasy>("")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

pokemonRouter.get("/profile", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<PokemonEasy>("")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

pokemonRouter.get("/leaderboard", async (req, res) => {
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<PokemonEasy>("")
      .find()
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default pokemonRouter;
