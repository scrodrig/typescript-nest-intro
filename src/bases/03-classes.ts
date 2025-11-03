import axios from "axios";

export class Pokemon {
  private readonly id: number;
  private name: string;
  private age?: number;
  private isAlive?: boolean;

  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(id: number, name: string, age?: number, isAlive?: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }

  async getMoves(): Promise<string[]> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return response.data.moves.map((move: any) => move.move.name);
  }
}

export const bulbasaur = new Pokemon(1, "Bulbasaur", 15, true);
