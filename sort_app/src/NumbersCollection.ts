export class NumbersCollection {
  // cuz of get you can call length as an attribute
  // --> new NumbersCollecton([1, 2, 3]).length
  get length(): number {
    return this.data.length;
  }

  constructor(public data: number[]) {}
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1, 2, 3]);
const colLength = collection.length;
