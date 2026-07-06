function crypto(password) {
    const len = password.length;
    const mid = len >> 1;          // целочисленное деление на 2 (без Math)

    // Первая половина переворачивается
    const firstHalf = password
        .slice(0, mid)
        .split('')
        .reverse()
        .join('');

    // Вторая половина — меняем первый и последний символы местами
    let secondHalf = password.slice(mid);
    if (secondHalf.length >= 2) {
        const first = secondHalf[0];
        const last = secondHalf[secondHalf.length - 1];
        const middle = secondHalf.slice(1, -1);
        secondHalf = last + middle + first;
    }

    return firstHalf + secondHalf;
}


function check(encrypted, password) {
    return encrypted === crypto(password);
}

console.log(crypto('password'));
console.log(check(crypto('password'), 'password'))
console.log(check(crypto('password'), 'wrong'))