const add = (a, b) => {
  return a + b;
};

const higherOrder = (a, referenceFunction) => {
  return referenceFunction(a, 20);
};

console.log(higherOrder(30, add));

// When a function is passed as a functional argument to a function, then the function which is passed is a callback
// and the function to which it is passed is a higher order function.

// const NewComponent = higherOrderComponent(WrappedComponent) -> Syntax
