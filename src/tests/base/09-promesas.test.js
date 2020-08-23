import { getHeroByIdAsync } from "../../base-testing/09-promises";
import { heroesData } from "../../data/heroes";

describe("Test with Promises", () => {
  test("getHeroeByIdAsync should return a hero", (done) => {
    const id = 1;

    getHeroByIdAsync(id).then((hero) => {
      expect(hero).toBe(heroesData[0]);
      done();
    });
  });

  test("getHeroByIdAsync should return an error if the hero dosent exist", (done) => {
    const id = 10;

    getHeroByIdAsync(id).catch((error) => {
      expect(error).toBe("The hero was not found");
      done();
    });
  });
});
