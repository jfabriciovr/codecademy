// Returns the number of hours slept for a given day
const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 9;
    case "tuesday":
      return 8;
    case "wednesday":
      return 8;
    case "thursday":
      return 8;
    case "friday":
      return 8;
    case "saturday":
      return 8;
    case "sunday":
      return 8;
    default:
      return "error";
  }
};

// this function uses implicit return
// where you can omit the return keyword
const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

/* const getActualSleepHours = () => {
  return (
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday")
  );
}; */

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);

  console.log(
    "Idealy, you should sleep: " + idealSleepHours + " hours every week"
  );
  console.log("This week you slept " + actualSleepHours + " hours.");

  if (actualSleepHours === idealSleepHours) {
    console.log("No sleep debt!");
  } else if (actualSleepHours < idealSleepHours) {
    actualDebt = idealSleepHours - actualSleepHours;
    console.log(
      "You should get more rest because you've slept " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less than you should have this week"
    );
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You over slept " +
        (actualSleepHours - idealSleepHours) +
        " hour(s) more this week."
    );
  } else {
    console.log("Error! Something went wrong, check your code.");
  }
};

calculateSleepDebt();
