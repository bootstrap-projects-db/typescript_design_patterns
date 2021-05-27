import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();
// console.log(matches);

let manUnitedWins = 0;
enum MatchtResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchtResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchtResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
