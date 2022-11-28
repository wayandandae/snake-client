const { keyMap } = require('./constants');
// Stores the active TCP connection object.
let connection;

// check user input to terminate or change snake's direction
const handleUserInput = (key) => {
  // if the input combo is ctrl+c, terminate process
  if (key === '\u0003') {
    process.exit();
  }
  // change every keystroke to lowercase for concise if-clauses
  const lowKey = key.toLowerCase();
  connection.write(keyMap[lowKey]);
};

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // on data input through stdin, callback function is triggered
  stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = { setupInput };