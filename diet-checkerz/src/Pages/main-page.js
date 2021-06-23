import "../Stylesheet/main-page.css";
import { useState } from "react";
import Body from "../Components/body.js";
import Header from "../Components/header.js";

export default function MainPage() {
  const [Meal, setMeal] = useState([]); // This is used to store the meals that the user has eater throughout the day
  const [Calories, setCalories] = useState([]); // This is used to store the calories of the meals
  const [Date, setDate] = useState([]); // This is used to store the dates of the input
  return (
    <div className="main-page">
      <Header Meal={Meal} Calories={Calories} Date={Date} />
      <Body
        Meal={Meal}
        setMeal={setMeal}
        Calories={Calories}
        setCalories={setCalories}
        Date={Date}
        setDate={setDate}
      />
    </div>
  );
}