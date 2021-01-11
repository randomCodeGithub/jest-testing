const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking name...");

describe("Checking names", () => {
  beforeEach(() => nameCheck());

  test("user is Jeff", () => {
    const user = "Jeff";
    expect(user).toBe("Jeff");
  });

  test("user is Karen", () => {
    const user = "Karen";
    expect(user).toBe("Karen");
  });
});

const initDatabase = () => console.log("Databse Initialized...");
const closeDatabase = () => console.log("Databse Closed...");

test("Adds 2 + 2 to equel 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to not equel 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("is Null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("user should be 01 agent", () => {
  expect(functions.createUser()).toEqual({ fName: "01", lName: "agent" });
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test("should be under 1600", () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// test("user fetched name should be Leanne Graham", () => {
//   expect.assertions(1);
//   return functions.fetchUser().then((data) => {
//     expect(data.name).toEqual("Leanne Graham");
//   });
// });

test("user fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
