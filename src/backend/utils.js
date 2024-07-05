export class Utils {

    static updateDisplayValue(initialValue, input){
        
        if (input === "." && initialValue.includes(".")){
            return initialValue;
        }
        else if (initialValue === "0"){
            return input;
        }
        else 
            return initialValue + input;
    }

    static isForDisplay(buttonClicked){
        return /[\d\.]/.test(buttonClicked);
    }

    static removeLastCharFromString(string){
        return string = string.slice(0, -1); 
    }

    static addNegativeCharBeforeString(string){
        return "-" + string;
    }

    static removeFirstCharFromString(string){
        return string.slice(1);
    }
   
}

