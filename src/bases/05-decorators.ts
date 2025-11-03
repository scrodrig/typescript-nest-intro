
class NewPokemon {
  constructor(public readonly id: number, public name: string) {}
  scream() {
    return `No ${this.name.toUpperCase()}!!!`;
  }
  speak() {
    return `No want to talk ${this.name}, ${this.name}`;
  }
}

const MyDecorator = () => {
  return (target: Function) => {
    return NewPokemon;
  };
};

@MyDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    return `${this.name.toUpperCase()}!!!`;
  }

  speak() {
    return `${this.name}, ${this.name}`;
  }
}

export const charmander = new Pokemon(4, "Charmander");
console.log(charmander.scream());
console.log(charmander.speak());
