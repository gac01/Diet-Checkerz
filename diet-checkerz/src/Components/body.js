import { useState, useEffect } from "react";
import "../Stylesheet/main-page.css";
import "../Stylesheet/body.module.css";
import { Button, TextField, Grid, Paper } from "@material-ui/core";
import fire from "../Config/fire.js";
import firebase from "firebase";

function InputBox(props) {
  const { Meal, setMeal, Calories, setCalories, Date, setDate } = props;
  const [newMeal, setNewMeal] = useState("e.g. Chicken Rice");
  const [newCalories, setNewCalories] = useState("");
  const [newDate, setNewDate] = useState("");
  const handleSubmitMeal = () => {
    const MealRef = fire.database().ref("Meal");
    const Meals = {
      Meal,
      Calories,
      Date,
    };
    MealRef.push(Meals);
  };
  /*
(event) => {
    event.preventDefault();
    const CaloriesData = [...Calories, Number(newCalories)];
    setCalories(CaloriesData);
    const MealsData = [
      ...Meal,
      {
        description: newMeal,
        calories: newCalories,
        date: newDate,
      },
    ];
    const DateData = [
      ...Date,
      {
        description: newDate,
      },
    ];
    setMeal(MealsData);
    setDate(DateData);
  };
*/
  return (
    <Paper className="InputBox" elevation={3}>
      <h3> Input your meal here!</h3>
      <form onSubmit={handleSubmitMeal}>
        <Grid
          container
          spacing={24}
          alignContent={"center"}
          alignItems={"center"}
          justify="center"
        >
          <TextField
            id="filled-basic"
            label="Meal"
            variant="filled"
            class="input"
            type="text"
            style={{ margin: "0   1rem" }}
            value={newMeal}
            onChange={(event) => {
              setNewMeal(event.target.value);
            }}
          />
          <TextField
            id="filled-basic"
            label="Calories"
            variant="filled"
            class="input"
            type="number"
            min="0"
            style={{ margin: "0 1 rem" }}
            value={newCalories}
            onChange={(event) => {
              setNewCalories(event.target.value);
            }}
          />
          <TextField
            class="input"
            id="date"
            label="Date"
            type="date"
            defaultValue="2017-05-24"
            value={newDate}
            onChange={(event) => {
              setNewDate(event.target.value);
            }}
          />
          <Button type="submit" variant="contained" color="primary">
            Add
          </Button>{" "}
        </Grid>
      </form>
    </Paper>
  );
}

function RecommendedMeal() {
  return (
    <>
      <table style={{ margin: "0 auto", width: "100%" }}>
        <thead>
          <tr>
            <th> No. </th>
            <th> Meal </th>
            <th> Calories </th>
          </tr>
        </thead>
        <tr>
          <td> 1 </td>
          <td class="content"> Chicken Rice</td>
          <td> 700 </td>
        </tr>
        <tr>
          <td> 2 </td>
          <td class="content"> Mixed Greens </td>
          <td> 400 </td>
        </tr>
        <tr>
          <td> 3 </td>
          <td class="content"> KFC </td>
          <td> 900 </td>
        </tr>
      </table>
    </>
  );
}

function CurrentMeal(props) {
  const { Meal } = props;
  return (
    <>
      <table style={{ margin: "0 auto", width: "100%" }}>
        <thead>
          <tr>
            <th> No. </th>
            <th> Meal </th>
            <th> Calories </th>
          </tr>
        </thead>
        {Meal.map((Meal, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td> {Meal.description}</td>
            <td> {Meal.calories}</td>
          </tr>
        ))}
      </table>
    </>
  );
}

function DietProgress() {
  return (
    <>
      <table style={{ margin: "0 auto", width: "100%" }}>
        <thead>
          <tr>
            <th> No. </th>
            <th> Statistic </th>
            <th> Progress </th>
          </tr>
        </thead>
        <tr>
          <td> 1 </td>
          <td class="content"> Calorie Intake Days Fulfilled in the Week </td>
          <td> 4/7 </td>
        </tr>
        <tr>
          <td> 2 </td>
          <td class="content"> Diet Progress </td>
          <td> Okay </td>
        </tr>
        <tr>
          <td> 3 </td>
          <td class="content"> Expected Weight Loss Within 1 Month</td>
          <td> 0.5 </td>
        </tr>
      </table>
    </>
  );
}

function Body(props) {
  const { Meal, setMeal, Calories, setCalories, Date, setDate } = props;
  return (
    <body>
      <InputBox
        Meal={Meal}
        setMeal={setMeal}
        Calories={Calories}
        setCalories={setCalories}
        Date={Date}
        setDate={setDate}
      />
      <Paper className="RecommendedMeal" elevation={3}>
        <h3> Your Recommended Daily Meal Plan </h3>
        <RecommendedMeal />
      </Paper>
      <Paper className="CurrentMeal" elevation={3}>
        <h3> Your Meals Throughout the Day </h3>
        {Meal.length > 0 ? (
          <CurrentMeal Meal={Meal} Calories={Calories} Date={Date} />
        ) : (
          <p> You haven't eaten any meals today!</p>
        )}
      </Paper>
      <Paper className="DietProgress" elevation={3}>
        <h3> Your Diet Progress </h3>
        <DietProgress />
      </Paper>
    </body>
  );
}

export default Body;
