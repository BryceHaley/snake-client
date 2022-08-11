/**Module to handle connecting to server */

const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Starting Snek');
    conn.write("Name: SNK"); //name of snake played in game
  });

  conn.on("data", (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = connect;