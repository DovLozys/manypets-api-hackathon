import express from "express";
const quoteRouter = express.Router();

/* GET users listing. */
quoteRouter.get("/", function (req, res, next) {
  res.json({ message: "I wish we had some information to give you ☹️" });
});

export default quoteRouter;
