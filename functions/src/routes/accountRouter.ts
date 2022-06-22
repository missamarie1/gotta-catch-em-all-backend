import express from "express";
import { ObjectId } from "mongodb";
import { getClient } from "../db";
import { Account, Pokemon } from "../models/Account";
import { errorResponse } from "./pokemonRouter";

const accountRouter = express.Router();

accountRouter.get("/account/:uid", async (req, res) => {
  const uid = req.params.uid;
  try {
    const client = await getClient();
    const results = await client
      .db()
      .collection<Account>("accounts")
      .find({ uid })
      .toArray();
    res.json(results);
  } catch (err) {
    errorResponse(err, res);
  }
});

accountRouter.put("/account/:id", async (req, res) => {
  const id: string = req.params.id;
  const newPokemon: Pokemon = req.body;
  try {
    const client = await getClient();
    const result = await client
      .db()
      .collection<Account>("accounts")
      .updateOne({ _id: new ObjectId(id) }, { $push: { caught: newPokemon } });
    if (result.modifiedCount) {
      res.status(200).json(newPokemon);
    } else {
      res.status(404).json({ message: "ID not found" });
    }
  } catch (err) {
    errorResponse(err, res);
  }
});

accountRouter.post("/account", async (req, res) => {
  const newAccount: Account = req.body;
  try {
    const client = await getClient();
    await client.db().collection<Account>("accounts").insertOne(newAccount);
    res.status(201).json(newAccount);
  } catch (err) {
    errorResponse(err, res);
  }
});

export default accountRouter;
