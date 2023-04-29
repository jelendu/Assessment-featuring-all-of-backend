const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)


// Adding a fortune button

const fortuneButton = document.getElementById("fortuneButton");

fortuneButton.addEventListener("click", () => {
  axios.get("http://localhost:4000/api/fortune")
    .then((res) => {
      alert(res.data);
    })
    .catch((err) => console.error(err));
});


// adding an inspirational quote button

const quoteButton = document.getElementById("quoteButton");
const quoteElement = document.getElementById("quote");

quoteButton.addEventListener("click", () => {
  axios.get("http://localhost:4000/api/quote")
    .then((response) => {
      quoteElement.textContent = response.data.quote;
    })
    .catch((error) => {
      console.error(error);
    });
});

// Creating a goal tracker
const goalForm = document.getElementById("goalForm");
const goalInputElement = document.getElementById("goal");
const dueDateInputElement = document.getElementById("dueDate");
const goalListElement = document.getElementById("goalList");

// Getting goals from server and displaying them
const fetchGoals = () => {
  axios.get("http://localhost:4000/api/goals")
    .then((response) => {
      const goals = response.data;
      goalListElement.innerHTML = "";
      goals.forEach((goal) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${goal.goal} (Due: ${goal.dueDate})`;
        goalListElement.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

// Add new goal
goalForm.addEventListener("submit", event => {
  event.preventDefault();
  const goalData = {
    goal: goalInputElement.value,
    dueDate: dueDateInputElement.value
  };

  axios.post("http://localhost:4000/api/goals", goalData)
    .then(() => {
      goalInputElement.value = "";
      dueDateInputElement.value = "";
      fetchGoals();
    })
    .catch((error) => {
      console.error(error);
    });
});


// Creating a daily affirmation reminder
   const affirmationForm = document.getElementById("affirmationForm");
   const affirmationInputElement = document.getElementById("affirmation");
   const reminderTimeInputElement = document.getElementById("reminderTime");

   // Adding affirmation and reminder time
   affirmationForm.addEventListener("submit", (event) => {
     event.preventDefault();
     const affirmationData = {
       affirmation: affirmationInputElement.value,
       reminderTime: reminderTimeInputElement.value,
     };

     axios.post("http://localhost:4000/api/affirmations", affirmationData)
       .then(() => {
         affirmationInputElement.value = "";
         reminderTimeInputElement.value = "";
       })
       .catch((error) => {
         console.error(error);
       });
   });
