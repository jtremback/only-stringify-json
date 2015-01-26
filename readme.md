# only-stringify-json

This module will not attempt to stringify Numbers, Strings, or Booleans. This is useful in cases where stringifying these values would result in a double quote situation.

```javascript
var onlyStringifyJSON = require('only-stringify-json')

var normal = [JSON.stringify("fooberry"), JSON.stringify("fooberry")]
var only = [onlyStringifyJSON("fooberry"), onlyStringifyJSON("fooberry")]

console.log(normal) // [""fooberry"", ""fooberry""]
console.log(only) // ["fooberry", "fooberry"]
```

You can also pass your own stringify function.

```javascript
var stringify = require('stable-stringify')

var only = [onlyStringifyJSON("fooberry", stringify), onlyStringifyJSON("fooberry", stringify)]

console.log(only) // ["fooberry", "fooberry"]
```