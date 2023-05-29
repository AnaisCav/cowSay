const Formation = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Salut, moi c'est ${Formation.firstName} du campus ${Formation.campus}`,
    e: "oO",
    T: "U ",
  })
);
