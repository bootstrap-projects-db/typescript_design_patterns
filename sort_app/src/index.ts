import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log("sorted Array: ", numbersCollection.data);
const charactersCollection = new CharactersCollection("adqfza");
const sorterString = new Sorter(charactersCollection);
sorterString.sort();

console.log("sorted string: ", charactersCollection.data);
