class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  public getSignature(): number {
    return this.signature;
  }
}

abstract class House {
  protected door: boolean;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Come into the house");
    } else {
      console.log("The door is close, you need to open it");
    }
  }
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  public openDoor(key: Key) {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
      console.log("The door is open.");
    } else {
      console.log("Wrong key, try another");
    }
  }
}

class Person {
  constructor(private key: Key) {}
  public getKey(): Key {
    console.log("Take out the keys");
    return this.key;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
