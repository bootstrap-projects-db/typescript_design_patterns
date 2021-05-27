import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// array
const numbersCollection = new NumbersCollection([100, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log("sorted Array: ", numbersCollection.data);

// string
const charactersCollection = new CharactersCollection("adqfza");
const sorterString = new Sorter(charactersCollection);
sorterString.sort();
console.log("sorted string: ", charactersCollection.data);

// linked list
const linkedList = new LinkedList();
linkedList.add(30);
linkedList.add(3);
linkedList.add(10);
linkedList.add(8);

const sorterLinkedList = new Sorter(linkedList);
sorterLinkedList.sort();

linkedList.print();
