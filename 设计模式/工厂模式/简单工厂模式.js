class Animal {
    constructor(type) {
        this.type = type;
    }
    setName(name) {
        this.name = name;
    }
    // getName() {
    //   return this.name;
    // }
    detail() {
        if (!this.name) {
            console.log(`First of all, let's give its a name. `);
            return;
        }
        console.log(`this is a ${this.type},its name is ${this.name}`);
    }
    static getInstance(type) {
        return new Animal(type);
    }
}

let cat = Animal.getInstance('cat');
cat.setName('tom');
cat.detail();