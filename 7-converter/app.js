function converter(money, val1, val2) {
    const usdToRub = money => money * 74.90;
    const rubToUsd = money => money * 0.013;
    const eurToRub = money => money * 85.06;
    const rubToEur = money => money * 0.012;
    const eurToUsd = money => money * 1.14;
    const usdToEur = money => money * 0.88;

    if (val1 === 'руб' && val2 === '$') {
        return rubToUsd(money);
    }
    else if (val1 === '$' && val2 === 'руб') {
        return usdToRub(money);
    }
    else if (val1 === '$' && val2 === 'eur') {
        return usdToEur(money);
    }
    else if (val1 === 'eur' && val2 === '$') {
        return eurToUsd(money);
    }
    else if (val1 === 'eur' && val2 === 'руб') {
        return eurToRub(money);
    }
    else if (val1 === 'руб' && val2 === 'eur') {
        return rubToEur(money);
    }
    else {
        return null;
    }
}

let money = prompt('Enter your money:')
let val1 = prompt('Enter valute first:')
let val2 = prompt('Enter valute second:')

console.log(converter(money, val1, val2));