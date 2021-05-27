import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// array
const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
numbersCollection.sort();
console.log("sorted Array: ", numbersCollection.data);

// string
const charactersCollection = new CharactersCollection("adqfza");
charactersCollection.sort();
console.log("sorted string: ", charactersCollection.data);

// linked list
const linkedList = new LinkedList();
linkedList.add(30);
linkedList.add(3);
linkedList.add(10);
linkedList.add(8);

linkedList.sort();

linkedList.print();
