import { getHeroById, getHeroByOwner } from "../../base-testing/08-imp-exp";
import { heroesData } from "../../data/heroes";

describe("Testing heroes functions", () => {
  test("It should return a hero by id", () => {
    const id = 1;
    const hero = getHeroById(id);

    const heroData = heroesData.find((h) => h.id === id);

    expect(hero).toEqual(heroData);
  });

  test("It should return undefined if hero dosent exist", () => {
    const id = 10;
    const hero = getHeroById(id);
    expect(hero).toBe(undefined);
  });

  test("It should return all DC heroes", () => {
    const owner = "DC";

    const arrDC = getHeroByOwner(owner);

    const dcData = heroesData.filter((h) => h.owner === owner);

    expect(arrDC).toEqual(dcData);
  });

  test("It should return all Marvel heroes", () => {
    const owner = "Marvel";

    const arrMarvel = getHeroByOwner(owner);

    expect(arrMarvel.length).toBe(2);
  });
});
