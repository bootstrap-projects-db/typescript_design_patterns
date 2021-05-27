import { NumbersCollection } from "./NumbersCollection";

class SorterBad {
  // bad code since need to note supported type in the union operator
  // --> code duplication
  constructor(public collection: number[] | string) {}

  sort(): void {
    for (let i: number = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        // typeguard
        if (this.collection instanceof Array) {
          // type of collection is number[]
          if (this.collection[j + 1] < this.collection[j]) {
            let tmp = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = tmp;
          }
        }

        // typeguard
        if (typeof this.collection === "string") {
        }
      }
    }
  }
}

// const sorterBad = new SorterBad([10, 3, -5, 0]);
// sorterBad.sort();

// console.log(sorterBad.collection);

// good code -----------------------------------------
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(eftIndex: number, rightIndex: number): void;
}

export class Sorter {
  constructor(public collection: Sortable) {}

  sort(): void {
    for (let i: number = 0; i < this.collection.length; i++) {
      for (let j = 0; j < this.collection.length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}

// const sorter = new SorterBad([10, 3, -5, 0]);
// sorter.sort();

// console.log(sorter.collection);
