import * as math from 'mathjs';

export class MathOperations {

    static calculateTwoValues(value, operandValue, operator){
        return math.evaluate(value + operator + operandValue);
    };

    static calculateSquare(value){
        return math.pow(value, 2);
    };

    static calculateSquareRoot(value){
        return math.sqrt(value);
    };

}


