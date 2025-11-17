const readline = require("readline");

// Setup input interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let temperatures = [];
let count = 0;

// Ask how many temperatures
rl.question("How many temperatures? ", (num) => {
  num = Number(num);

  function askForTemperature() {
    if (count < num) {
      rl.question(`Enter temperature #${count + 1}: `, (value) => {
        temperatures.push(Number(value));
        count++;
        askForTemperature();
      });
    } else {
      // Calculate average
      const average =
        temperatures.reduce((a, b) => a + b, 0) / temperatures.length;

      // Count temps above average
      const aboveAvg = temperatures.filter(t => t > average).length;

      console.log("\n--- Results ---");
      console.log(`Average temperature: ${average.toFixed(2)}`);
      console.log(`Number of days above average: ${aboveAvg}`);

      rl.close();
    }
  }

  askForTemperature();
});
