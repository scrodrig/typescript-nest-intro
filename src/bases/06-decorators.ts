function Deprecated(deprecationReason: string) {
  return (
    target: any,
    memberName: string,
    descriptor: PropertyDescriptor
  ): void => {
    console.log({ target });
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      console.warn(
        `⚠️ Method "${memberName}" is deprecated. Reason: ${deprecationReason}`
      );
      return originalMethod.apply(this, args);
    };
  };
}

export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    return `${this.name.toUpperCase()}!!!`;
  }

  @Deprecated("Use scream method instead")
  speak() {
    return `${this.name}, ${this.name}`;
  }
}

export const charmander = new Pokemon(4, "Charmander");
console.log(charmander.scream());
console.log(charmander.speak());
