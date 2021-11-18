interface lengthWish {
    length: number
}

function say<T extends lengthWish>(arg: T) {
    return arg?.length
}

console.log(say('hello'));
