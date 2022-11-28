const net = require("net");
const { IP, PORT, NAME, CHAT } = require("./constants");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // display initial connection success message and send name to server
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write(`NAME: ${NAME}`);
  });

  // send chat content to server
  conn.on("connect", () => {
    conn.write(`Say: ${CHAT}`);
  });

  // setTimeout and setInterval experiments on connect
  // conn.on("connect", () => {
  //   setTimeout(() => conn.write("Move: up"), 50);
  //   setTimeout(() => conn.write("Move: left"), 100);
  //   setInterval(() => conn.write("Move: up"), 50);
  // });

  conn.on("data", data => {
    console.log(`Server: ${data}`);
  });

  return conn;
};


module.exports = { connect };