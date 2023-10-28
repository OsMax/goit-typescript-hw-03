class Key {
  someKey: Object;
}

class MyHouse {
  constructor(private key: Key) {}
  public openDoor(key: Key) {
    console.log("Door is open.");
  }
  public comeIn(person: Person) {
    console.log("Come into the house");
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
