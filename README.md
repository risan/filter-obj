# Filter Object

[![Build Status](https://badgen.net/travis/risan/filter-obj)](https://travis-ci.org/risan/filter-obj)
[![Test Covarage](https://badgen.net/codecov/c/github/risan/filter-obj)](https://codecov.io/gh/risan/filter-obj)
[![Latest Version](https://badgen.net/npm/v/@risan/filter-obj)](https://www.npmjs.com/package/@risan/filter-obj)

Filter object by its property names or values or both.

## Installation

```bash
$ npm install @risan/filter-obj
```

### CDN

The library is available over a CDN:

```html
<script src="https://unpkg.com/@risan/filter-obj@latest/dist/filter-obj.umd.js"></script>

<!-- Or the minified version -->
<script src="https://unpkg.com/@risan/filter-obj@latest/dist/filter-obj.umd.min.js"></script>
```

## Usage

Filter by property values:

```js
import filterObj from "@risan/filter-obj";

const obj = {
  num1: 1,
  num2: 2,
  num3: 3,
  num4: 4,
};

const filtered = filterObj(obj, value => value % 2 == 0);

// { num2: 2, num4: 4 }
console.log(filtered);
```

Filter by property keys:

```js
import filterObj from "@risan/filter-obj";

const obj = {
  name: "john",
  languages: ["JavaScript"],
  age: 20
};

const filtered = filterObj(obj, (value, key) => key === "languages");

// { languages: [ 'JavaScript' ] }
console.log(filtered);
```

You can pass an array as a predicate argument. It will keep the given property names.

```js
import filterObj from "@risan/filter-obj";

const obj = {
  name: "john",
  languages: ["JavaScript"],
  age: 20
};

const filtered = filterObj(obj, ["name", "age"]);

// { name: 'john', age: 20 }
console.log(filtered);
```

If no `predicate` argument is passed, it will use `Boolean` function against each property values.

```js
import filterObj from "@risan/filter-obj";

const obj = {
  str: "foo",
  empty_str: "",
  awesome: true,
  not_awesome: false,
  number: 123,
  zero: 0,
  arr: [],
  otherObj: {}
};

const filtered = filterObj(obj);

// { str: "foo", awesome: true, number: 123, arr: [], otherObj: {} }
console.log(filtered);
```

You can get the reference to the entire object from the third argument of the `predicate` function.

```js
import filterObj from "@risan/filter-obj";

const myObj = {
  name: "john",
  languages: ["JavaScript"],
  status: false
};

const filtered = filterObj(myObj, (value, key, obj) => {
  return obj.name === "john" && Boolean(value);
});

// { name: 'john', languages: [ 'JavaScript' ] }
console.log(filtered);
```

## API

```js
filterObj(obj, [predicate])
```

### Parameters

* `obj` (`Object`): The object to filter.
* `predicate` (optional `Function|Array`): The function to invoke on each iteration to filter the object. If `Array` is given, it will keep all property names listed on that array. If none is given, it will use `Boolean` function against each property values.

The `predicate` function will receive three arguments with the following order:

* `value`: The object property value.
* `key`: The object property key.
* `obj`: The object to filter.

### Returns

It returns a filtered `Object`.

## License

[MIT](https://github.com/risan/filter-obj/blob/master/LICENSE) © [Risan Bagja Pradana](https://bagja.net)
