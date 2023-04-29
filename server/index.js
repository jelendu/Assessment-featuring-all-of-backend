// Rewriting the imported functions via controller.js so it can finally work
const express = require("express");
const cors = require("cors");

const {
  getCompliment,
  getQuote,
  getGoals,
  addGoal,
  addAffirmation,
  getFortune,
} = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/compliment", getCompliment);
app.get("/api/quote", getQuote);
app.get("/api/goals", getGoals);
app.post("/api/goals", addGoal);
app.post("/api/affirmations", addAffirmation);
app.get("/api/fortune", getFortune);


app.listen(4000, () => console.log("Server running on 4000"));



