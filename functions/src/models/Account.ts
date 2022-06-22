import { ObjectId } from "mongodb";

export interface Pokemon {
  id: number;
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
