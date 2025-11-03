import axios from "axios";
import type { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

export class Pokemon {
  public readonly id: number;
  public name: string;
  public age?: number;
  public isAlive?: boolean;

  get imageUrl(): string {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.id}.png`;
  }

  constructor(id: number, name: string, age?: number, isAlive?: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.isAlive = isAlive;
  }

  async getMoves(): Promise<PokeapiResponse["moves"]> {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${this.id}`
    );
    return response.data.moves.map((move: any) => move.move.name);
  }
}

export const bulbasaur = new Pokemon(1, "Bulbasaur", 15, true);
