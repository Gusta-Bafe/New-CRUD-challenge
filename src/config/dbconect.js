import mongoose from "mongoose";


mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://CRUD:058412@crud.6c6nnkt.mongodb.net/CRUD");

const db = mongoose.connection

export default db;