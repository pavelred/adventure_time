function exceptNull(num1, num2) {
    try {
        if (num2 === 0) {
            throw new Error('на ноль делить нельзя');
        } else {
            console.log(num1 / num2);
        }
    } catch (e) {
        console.log(e);
    }
}

exceptNull(1,0);
exceptNull(2,1);