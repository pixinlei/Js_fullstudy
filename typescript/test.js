function say(arg) {
    return arg === null || arg === void 0 ? void 0 : arg.length;
}
console.log(say('hello'));
