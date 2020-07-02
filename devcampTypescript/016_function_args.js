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
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard("Astros", "ALtuve", "Pimienta", "Chabelo");
//# sourceMappingURL=016_function_args.js.map