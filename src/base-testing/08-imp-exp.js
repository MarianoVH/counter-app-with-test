import { heroesData } from "../data/heroes";

export const getHeroById = (id) => heroesData.find((hero) => hero.id === id);

export const getHeroByOwner = (owner) =>
  heroesData.filter((hero) => hero.owner === owner);
