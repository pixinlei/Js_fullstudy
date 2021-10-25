var _ = require('lodash');


var obj = {a: {b: {c: 1}}}

// get
// console.log(_.get(obj, "a.b.c"));
// console.log(_.get(obj, "a.b.c.d", 'default'));

// getObjArray
var objs = [
    {"a": {b: {c:1}}},
    {"a": {b: {c:2}}},
] 
// console.log(_.getObjArray);
// console.log(_.getObjArray(objs,"a.b,c"));

// uniq
var a = [1,2,2,3]
// console.log(_.uniq(a));

// pick
var pickObj = {a:1,b:2,c:3}
// console.log(_.pick(pickObj, ["a", 'b']));

// omit
var omitObj = {}