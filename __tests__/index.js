/* global expect:false, test:false */
import filterObj from "../src";

test("it can remove falsy property values", () => {
  const obj = {
    name: "john",
    name_empty: "",
    awesome: true,
    awesome_empty: false,
    num: 100,
    num_empty: 0,
    null_value: null,
    undefined_value: undefined
  };

  expect(filterObj(obj)).toEqual({
    name: "john",
    awesome: true,
    num: 100
  });
});

test("it can receive list of property name to keep", () => {
  const obj = {
    name: "john",
    active: false,
    age: 20,
    status: null
  };

  const result = filterObj(obj, ["name", "status"]);

  expect(result).toEqual({
    name: "john",
    status: null
  });
});

test("it can filter by property values", () => {
  const obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4
  };

  const result = filterObj(obj, value => value % 2 === 0);

  expect(result).toEqual({
    num2: 2,
    num4: 4
  });
});

test("it can filter by property keys", () => {
  const obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4
  };

  const result = filterObj(obj, (value, key) => key === "num3");

  expect(result).toEqual({
    num3: 3
  });
});

test("it throws error if predicate argument is not an array or function", () => {
  expect(() => filterObj({}, 123)).toThrowError(/array or function/i);
  expect(() => filterObj({}, "foo")).toThrowError(/array or function/i);
});
