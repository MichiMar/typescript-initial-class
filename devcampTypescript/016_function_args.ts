// ? = this argument is optional
// '=' default arg
function printAddress(street: string, streetTwo?: string, state = "AZ") {
  console.log(street);
  if (streetTwo) {
    console.log(streetTwo);
  }
  console.log(state);
}

printAddress("12 Any St");
printAddress("123 Any St", "Suit 540");
printAddress("123 Any St", "Suit 540", "UT");
