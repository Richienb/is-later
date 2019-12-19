# Is Later [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/is-later/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/is-later)

Check if a version is later than another.

[![NPM Badge](https://nodei.co/npm/is-later.png)](https://npmjs.com/package/is-later)

## Install

```sh
npm install is-later
```

## Usage

```js
const isLater = require("is-later");

isLater("1.0.0", "2.0.0");
//=> false

isLater("1.0.0", "1.0.0");
//=> false

isLater("1.0.0", "0.0.0");
//=> true
```

## API

### isLater(a, b)

#### a

Type: `string`

The first version to compare.

#### b

Type: `string`

The second version to compare.
