const compliments = [
  "Gee, you're a smart cookie!",
  "Cool shirt!",
  "Your Javascript skills are stellar.",
];

const getCompliment = (req, res) => {
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
};

const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "You miss 100% of the shots you don't take.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
];

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getQuote = (req, res) => {
  res.json({ quote: getRandomQuote() });
};

let goals = [];

const getGoals = (req, res) => {
  res.json(goals);
};

const addGoal = (req, res) => {
  const goalData = {
    goal: req.body.goal,
    dueDate: req.body.dueDate,
  };
  goals.push(goalData);
  res.status(201).json(goalData);
};

let affirmations = [];

const addAffirmation = (req, res) => {
  const affirmationData = {
    affirmation: req.body.affirmation,
    reminderTime: req.body.reminderTime,
  };
  affirmations.push(affirmationData);
  res.status(201).json(affirmationData);
};

module.exports = {
  getCompliment,
  getQuote,
  getGoals,
  addGoal,
  addAffirmation,
  getFortune,
};

// defining our fortune statements
const fortunes = [
  "A beautiful, smart, and loving person will be coming into your life.",
  "A dubious friend may be an enemy in camouflage.",
  "A faithful friend is a strong defense.",
  "A fresh start will put you on your way.",
  "A golden egg of opportunity falls into your lap this month.",
];

function getFortune(req, res) {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
}

// Updating Tracking Progress

const updateProgress = (req, res) => {
  const { id } = req.params;
  const { progress } = req.body;
  const goal = goals.find((g) => g.id === parseInt(id));

  if (!goal) {
    res.status(404).json({ error: "Goal not found" });
  } else {
    goal.progress = progress;
    res.status(200).json(goal);
  }
};

app.put("/api/goals/progress/:id", updateProgress);

// gratitude journal Entries
let gratitudeEntries = [];

const addGratitudeEntry = (req, res) => {
  const gratitudeData = {
    gratitude: req.body.gratitude,
    date: new Date().toLocaleDateString(),
  };
  gratitudeEntries.push(gratitudeData);
  res.status(201).json(gratitudeData);
};

app.post("/api/gratitude", addGratitudeEntry);

// delete
const deleteHabit = (req, res) => {
  const { id } = req.params;

  let habitIndex = habits.findIndex((habit) => habit.id === parseInt(id));
  if (habitIndex !== -1) {
    habits.splice(habitIndex, 1);
    res.status(200).json({ message: "Habit deleted" });
  } else {
    res.status(404).json({ error: "Habit not found" });
  }
};

app.delete("/api/habits/:id", deleteHabit);
