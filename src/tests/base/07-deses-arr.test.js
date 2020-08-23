import { returnArray } from "../../base-testing/07-deses-arr";

describe("Testing destructuring", () => {
  test("It should return a string and a number", () => {
    const arr = returnArray();

    expect(arr).toEqual(["ABC", 123]);
  });

  test("It should return a string and a number, another approach", () => {
    const [letter, number] = returnArray();

    expect(letter).toBe("ABC");
    expect(typeof letter).toBe("string");

    expect(number).toBe(123);
    expect(typeof number).toBe("number");
  });
});
