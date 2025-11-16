function generateRandomNumber(num) {
  //Gets # from 0 -> num - 1
  return Math.floor(Math.random() * num);
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
for (let prop in collectiveWisdom) {
  // generates a random number between the elements of the arrays
  let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

  //use object's properties to customize the message being added to personalWisdom
  switch(prop) {
    case "signInfo":
      personalWisdom.push
  }
  console.log(collectiveWisdom[prop][optionIdx]);

}
