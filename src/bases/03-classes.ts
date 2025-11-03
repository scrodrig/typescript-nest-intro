export class Pokemon {
  private readonly id: number;
  private name: string;
  private age?: number;
  private isAlive?: boolean;
  constructor(id: number, name: string, age?: number, isAlive?: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }
}

export const bulbasaur = new Pokemon(1, "Bulbasaur", 15, true);
