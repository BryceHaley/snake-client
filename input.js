const {
  MOVE_KEY_UP, 
  MOVE_KEY_DOWN,
  MOVE_KEY_RIGHT,
  MOVE_KEY_LEFT,
  ESCAPE_KEY,
  SAY_BYE_KEY,
  SAY_HI_KEY } = require('./constants');


let connection;

const handleUserInput = function (key) {
  switch (key) {
    case ESCAPE_KEY:
     process.exit();
     break;
    case MOVE_KEY_UP:
      connection.write('Move: up');
      break;
    case MOVE_KEY_LEFT:
      connection.write('Move: left');
      break;
    case MOVE_KEY_DOWN:
      connection.write('Move: down');
      break;
    case MOVE_KEY_RIGHT:
      connection.write('Move: right');
      break;
    case SAY_HI_KEY:
      connection.write('Say: Hello');
      break;
    case SAY_BYE_KEY:
      connection.write('Say: goodbye');
      break;
    default:
     console.log('invalid key pressed');
  };
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;