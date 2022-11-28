const net = require("net");

// establishes a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: "172.25.223.217", // IP address here,
    port: "50541" // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("NAME: JHK");
  });

  conn.on("data", data => {
    console.log(`Server: ${data}`);
  });

  return conn;
};


module.exports = { connect };