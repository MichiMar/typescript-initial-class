let email: string = "test@test.com";
let password: string = "asdasd";

// if (password == "asdasd" && email == "test@test.com") {
if (password == "asdasd" || password == "qweqwe") {
  console.log("You are authorized");
} else {
  console.log("Permission denied");
}

if (!(email == "test@test.com")) {
  console.log("You are authorized");
}
