(() => {
    const calcTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach((item) => {
            total += item;
        });
        return total.toString();
    }

    console.log(calcTotal([1,2,3,4,5]));
})()