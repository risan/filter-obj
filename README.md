# NPM Boilerplate

[![Build Status](https://flat.badgen.net/travis/risan/filter-obj)](https://travis-ci.org/risan/filter-obj)
[![Test Coverage](https://flat.badgen.net/codeclimate/coverage/risan/filter-obj)](https://codeclimate.com/github/risan/filter-obj)
[![Maintainability](https://flat.badgen.net/codeclimate/maintainability/risan/filter-obj)](https://codeclimate.com/github/risan/filter-obj)
[![Latest Stable Version](https://flat.badgen.net/npm/v/@risan/filter-obj)](https://www.npmjs.com/package/@risan/filter-obj)
[![Node Version](https://flat.badgen.net/npm/node/@risan/filter-obj)](https://www.npmjs.com/package/@risan/filter-obj)
[![Code Style: Prettier](https://flat.badgen.net/badge/code%20style/prettier/ff69b4)](https://github.com/prettier/prettier)
[![License](https://flat.badgen.net/npm/license/@risan/filter-obj)](https://github.com/risan/filter-obj/blob/master/LICENSE)

Filter object by its property names or values or both.

## Install

```bash
$ npm install @risan/filter-obj

# Or if you use Yarn
$ yarn add @risan/filter-obj
```

Use this library directly on the browser:

```html
<!-- For development -->
<script src="https://unpkg.com/@risan/filter-obj@latest/dist/filter-obj.umd.js"></script>

<!-- Minified version for production -->
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

MIT © [Risan Bagja Pradana](https://bagja.net)
