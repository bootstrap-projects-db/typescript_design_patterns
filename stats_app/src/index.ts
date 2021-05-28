// import { MatchReader } from "./inheritance/MatchReader";
// import { MatchResult } from "./MatchResult";

// const reader = new MatchReader("football.csv");
// reader.read();
// // console.log(matches);

// let manUnitedWins = 0;

// for (let match of reader.data) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);

// compositon approach
import { MatchReader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { MatchResult } from "./MatchResult";

// create an pbject that satisfies the DataReader interface
const csvFileReader = new CsvFileReader("football.csv");

// create an instance of MachtReader and pass in something
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
