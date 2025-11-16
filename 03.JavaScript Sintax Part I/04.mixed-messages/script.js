function generateRandomNumber(num) {
  //Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
}

function formatWisdom(wisdom) {
  const formatted = wisdom.join("\n");
  console.log(formatted);
}

// Define an object with all the possibilities to choose randomly
const collectiveWisdom = {
  signInfo: ["star", "moon", "sun", "comet"],
  fortuneOutput: ["terrible luck", "bad luck", "ok luck", "good luck", "great luck"],
  advice: ["go out and eat", "not read this", "play more", "trust no one"],
};
// Store the 'wisdom' in an array
// This is what will be outputed in the terminal
let personalWisdom = [];
// Iterate over the object
for (let key in collectiveWisdom) {
  // generates a random number between the elements of the arrays
  let optionIdx = generateRandomNumber(collectiveWisdom[key].length);

  //use object's properties to customize the message being added to personalWisdom
  switch(key) {
    case "signInfo":
      personalWisdom.push(`Your sign right now is a "${collectiveWisdom[key][optionIdx]}".`);
      break;
    case "fortuneOutput":
      personalWisdom.push(`You are having: "${collectiveWisdom[key][optionIdx]}"`);
      break;
    case "advice":
      personalWisdom.push(`You should: "${collectiveWisdom[key][optionIdx]}"`);
      break;
    default:
      personalWisdom.push("There is not enough info.");
  }
}

formatWisdom(personalWisdom);