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
  if (lowKey === 'w') {
    connection.write("Move: up");
  }
  if (lowKey === 'a') {
    connection.write("Move: left");
  }
  if (lowKey === 's') {
    connection.write("Move: down");
  }
  if (lowKey === 'd') {
    connection.write("Move: right");
  }
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