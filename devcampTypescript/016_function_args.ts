// // ? = this argument is optional
// // '=' default arg
// // you can not have a requier value after an optional (?)
// // you can have the default value (=) anywhere
// function printAddress(street: string, streetTwo?: string, state = "AZ") {
//   console.log(street);
//   if (streetTwo) {
//     console.log(streetTwo);
//   }
//   console.log(state);
// }

// printAddress("12 Any St");
// printAddress("123 Any St", "Suit 540");
// printAddress("123 Any St", "Suit 540", "UT");

function lineupCard(team: string, ...players: string[]) {
  console.log("Team: " + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard("Astros", "ALtuve", "Pimienta", "Chabelo");
