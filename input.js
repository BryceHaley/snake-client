const handleUserInput = function (key) {
  switch (key) {
   case '\u0003':
     process.exit();
     break;
   default:
     
  };
};

const setupInput = function () {
 const stdin = process.stdin;
 stdin.setRawMode(true);
 stdin.setEncoding("utf8");
 stdin.resume();
 stdin.on("data", handleUserInput);
 return stdin;
};

module.exports = setupInput;