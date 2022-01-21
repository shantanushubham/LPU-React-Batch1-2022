// Promise is a class in JS
// constructor (function)
// let num1 = 10;
// let num2 = 5;

function addTwoNumbers(num1, num2) {
  return new Promise((fulfilled) => {
    setTimeout(() => {
      console.log("Inside setTimeout");
      fulfilled(() => {
        console.log(`The sum is ${num1 + num2}`);
      });
    }, 5000);
    console.log("Outside setTimeout");
  });
}

addTwoNumbers(10, 5)
  .then((foundFunction) => {
    foundFunction();
  })
  .catch((error) => {
    console.log("Promise was not fulfilled");
  })
  .finally(() => {
    console.log("Inside finally");
  });

function getAllUsersFromDatabase() {
  return new Promise((fulfilled, rejected) => {
    let allUsers = [1, 2, 3, 4, 5];
    fulfilled(allUsers);
  });
}

let allUsers = [];
getAllUsersFromDatabase()
  .then((foundUsers) => {
    allUsers = [...foundUsers];
  })
  .catch();



/// NPM stands for node package manager
