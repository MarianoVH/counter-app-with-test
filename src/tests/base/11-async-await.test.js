import { getImage } from "../../base-testing/11-async-await";

describe("Testing with async-await and Fetch", () => {
  test("It should return the url of the image", async () => {
    const url = await getImage();
    expect(url.includes("https://")).toBe(true);
  });
});
