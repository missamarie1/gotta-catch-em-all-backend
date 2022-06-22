import express from "express";
import { getClient } from "../db";
import { Account } from "../models/Account";
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
  const id = req.params.id;
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
