import { ObjectId } from "mongodb";

interface Pokemon {
  name: string;
  image: string;
}

export interface Account {
  _id?: ObjectId;
  uid: string;
  userName: string;
  avatar?: string;
  caught: Pokemon[];
}
