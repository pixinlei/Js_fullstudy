type User = {
    id: number,
    kind: string
}

function makeCustomer<T extends User>(user: T): User {

    return {
        id: user.id,
        kind: user.kind
    }
}

console.log(makeCustomer({id:1, kind: 'customer'}));
