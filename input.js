
let connection;

const handleUserInput = function (key) {
  switch (key) {
    case '\u0003':
     process.exit();
     break;
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
      break;
    case '1':
      connection.write('Say: Hello');
      break;
    case '2':
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