const accountId = 144556;
let accountEmail = "abc@google.com";
var accountPass = "1234";
accountCity = "wardha";
let accountState;

// accountId = 232323; //not allowed to change the constant

accountEmail = "hk@faceboom.com";
accountPass = "4444";
accountCity = "Jaipur";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([
  accountId,
  accountEmail,
  accountPass,
  accountCity,
  accountState,
]);
