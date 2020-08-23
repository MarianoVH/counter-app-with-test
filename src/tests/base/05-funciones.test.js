import { getActiveUser, getUser } from "../../base-testing/05-functions";

describe("Testing user functions", () => {
  test("getUser should return an object", () => {
    const userData = {
      uid: "ABC123",
      username: "The_user_1502",
    };

    const user = getUser();

    expect(user).toEqual(userData);
  });

  test("getActiveUser should return an object with the username updated", () => {
    const name = "Pepito";
    const userData = {
      uid: "ABC1234",
      username: name,
    };

    const user = getActiveUser(name);

    expect(user).toEqual(userData);
  });
});
