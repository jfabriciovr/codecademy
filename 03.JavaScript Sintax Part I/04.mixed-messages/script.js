generateWisdom();

function generateWisdom() {
  let personalWisdom = [];
  const wisdom = {
    planet: ["moon", "sun", "mars"],
    luck: ["good luck", "bad luck"],
    when: ["this year", "next year"],
  };

  for (let item in wisdom) {
    personalWisdom.push(item[1][1]);

  }
  
  console.log(personalWisdom);
}

function generateRandomNumber(num) {
  return Math.floor(Math.random() * num); //from 0 to num -1
}
