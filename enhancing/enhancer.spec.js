const enhancer = require("./enhancer.js");
// test away!

describe("repair(item)", () => {
  const item = {
    name: "Nimbus",
    enhancement: 20,
    durability: 50,
  };

  it("returns restored 100 durability", () => {
    const expectedOutput = 100;
    const actualOutput = enhancer.repair(item);
    expect(actualOutput.durability).toBe(expectedOutput);
  });
});

describe("success(item)", () => {
  const item = {
    name: "Nimbus",
    enhancement: 15,
    durability: 50,
  };

  it("enhance item ++ 1", () => {
    const expectedOutput = 16;
    const actualOutput = enhancer.success(item);
    expect(actualOutput.enhancement).toBe(expectedOutput);
    expect(actualOutput.durability).toBe(50);
  });

  it("will not enhance an item already at the max enhancement", () => {
    const maxEnhancement = {
      name: "Nimbus",
      enhancement: 20,
      durability: 50,
    };

    const expectedOutput = 20;
    const actualOutput = enhancer.success(maxEnhancement);
    expect(actualOutput.enhancement).toBe(expectedOutput);
  });
});

describe("fail", () => {
  it("durability will decrease by 5 if enhancement is < 15", () => {
    const item = {
      name: "Nimbus",
      enhancement: 10,
      durability: 35,
    };
    const expected = 5;
    const actual = enhancer.fail(item);
    expect(actual.enhancement).toBe(expected);
  });

  it("decreases durability by 10 if enhancement is > 15", () => {
    const item = {
      name: "Nimbus",
      enhancement: 16,
      durability: 35,
    };
    const expected = 6;
    const actual = enhancer.fail(item);
    expect(actual.enhancement).toBe(expected);
  });
});

it("will decrease durability by 1 if enhancement > than 16", () => {
  const item = {
    name: "Nimbus",
    enhancement: 17,
    durability: 35,
  };
  const expected = 16;
  const actual = enhancer.fail(item);
  expect(actual.enhancement).toBe(expected);
});

// // STRETCH
describe("get", () => {
  it("if the enhancement level is 0, the the name is not modified", () => {
    const item = {
      name: "Nimbus",
      enhancement: 0,
      durability: 35,
    };
    const expected = "Nimbus";
    const actual = enhancer.get(item);
    expect(actual.name).toBe(expected);
  });

  it("modifies the name to include enhancement level if it is greater than 0", () => {
    const item = {
      name: "Iron Sword",
      enhancement: 5,
      durability: 35,
    };
    const expected = "[+5] Iron Sword";
    const actual = enhancer.get(item);
    expect(actual.name).toBe(expected);
  });
});
