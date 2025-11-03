export const pokemonIds = [1, 20, 30, 40, 50];

pokemonIds.push(+"60");

console.log("🚀 ~ pokemonIds:", pokemonIds);

type Pokemon = {
  id: number;
  name: string;
  age?: number;
  isAlive?: boolean;
};

export const bulbasaur: Pokemon = {
  id: 1,
  name: "Bulbasaur",
  age: 15,
  isAlive: true,
};

export const charmander: Pokemon = {
  id: 4,
  name: "Charmander",
};

export const pokemons:Pokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log("🚀 ~ pokemons:", pokemons);