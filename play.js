const { connect } = require('./client');

// check user key input and terminate if the input is ctrl+c
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

// setup interface to handle user input from stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();