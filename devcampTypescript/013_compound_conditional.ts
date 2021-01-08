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

// las dobles lineas significan o, es 
// decir en el ejemplo si cualquiera de los dos 
// password es tal cual la planteacion, se correra el 
// programa, de otro modo simplemente no lo hara
