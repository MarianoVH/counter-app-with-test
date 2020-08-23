import { getGreeting } from "../../base-testing/02-template-string";

describe("Testing 02-template-string.js", () => {
  test("Passing value to the function", () => {
    const name = "Rihanna";

    const greeting = getGreeting(name);

    expect(greeting).toBe("Hello " + name);
  });

  test("Without passing value to the function ", () => {
    const greeting = getGreeting();

    expect(greeting).toBe("Hello Stranger");
  });
});
