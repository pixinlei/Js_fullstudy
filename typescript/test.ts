function Fn(a: string | number, b: string | number) {
    if(typeof a === 'string') {
        return a + ':' + b
    } else {
        return a + b
    }
}

Fn(2, 3); // Ok
Fn(1, 'a'); // Error
Fn('a', 2); // Error
Fn('a', 'b') // Ok