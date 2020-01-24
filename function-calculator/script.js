function createCalculator(operand) {
    return {
        add: value => value + operand,
        sub: value => operand - value
    };
}

function sum(operandA) {
    return operandB => operandA + operandB;
}

const calc = createCalculator(10);

calc.add(45); // 55

console.log(sum(2)(3)); //5
