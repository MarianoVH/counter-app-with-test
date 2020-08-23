describe("Testing demo.test.js", () => {
  test("strings should match", () => {
    const message = "Hello World";

    const message2 = `Hello World`;

    expect(message).toBe(message2);
  });
});
