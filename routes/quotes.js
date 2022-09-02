import express from "express";
import { getAllQuotes } from "../models/quotes.js";
const quoteRouter = express.Router();

/* GET users listing. */
quoteRouter.get("/", async function (req, res, next) {
  const body = req.body;
  const response = await getAllQuotes(body);
  //   res.json({ message: "I wish we had some information to give you ☹️" });
  const responseObject = {
    success: true,
    message: "Returned price quote for all pets",
    payload: response,
  };
  res.status(200).json(responseObject);
});

// - get info from postman
// - destructure it to get no of breeds, different post codes, multi pet discount
// - how old is the pet

export default quoteRouter;

// [
//   {
//  "petID": 1,
//   "Species" : "Dog/ Cat",
//   "Breed": "String",
//   "Age": 5,
//   "Address": "String",
//   "Postcode": "String"
//     }
//  ]
