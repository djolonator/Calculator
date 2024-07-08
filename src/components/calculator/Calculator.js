import React, { useState } from 'react';
import Display from "./Display";
import Button from "./Button";
import { Utils } from "../../backend/utils";
import { MathOperations } from "../../backend/mathOperations";

export default function Calculator() {

    const [resetDisplayValue, setResetDisplayValue] = useState(false);
    const [operation, setOperation] = useState("");
    const [value, setValue] = useState(0);
    const [displayValue, setDisplayValue] = useState("0");

    const handleBackSpaceClick = () => {

        if (displayValue.length === 1)
            setDisplayValue("0");
        else
            setDisplayValue(Utils.removeLastCharFromString(displayValue));
    };

    const handleResetClick = () => {
        setDisplayValue("0");
        setOperation("");
    };

    const handleForPeriodClick = (buttonClicked) => {
        setDisplayValue(Utils.updateDisplayValue(displayValue, buttonClicked));
    };

    const handleDigitClick = (buttonClicked) => {
        if (resetDisplayValue){
            setDisplayValue(Utils.updateDisplayValue("0", buttonClicked));
            setResetDisplayValue(false);
        }
        else
            setDisplayValue(Utils.updateDisplayValue(displayValue, buttonClicked));
    };

    const handleOperationForTwoValuesClick = (buttonClicked) => {

        setValue(displayValue);
            let operationClicked = buttonClicked;

            switch(buttonClicked) {
                case "\u00F7":
                    operationClicked = "/";
                break;
                case "x":
                    operationClicked = "*";
                break;
            }

          setOperation(operationClicked);
          setResetDisplayValue(true);
    };

    const handleCalculationOneValueClick = (buttonClicked) => {

        let result = 0;
        switch(buttonClicked) {
            case "x\u00B2":
                result = MathOperations.calculateSquare(displayValue);
            break;
            case "\u221Ax":
                result = MathOperations.calculateSquareRoot(displayValue);
            break;
        }

        setDisplayValue(result);
    };

    const handleEqualClick = () => {

        if (operation !== ""){
            
            let result = MathOperations.calculateTwoValues(value, displayValue, operation);
            setDisplayValue(String(result));
            setOperation("");
        }
    };

    const handleSignClick = () => {
        if (displayValue !== "0"){
            if (displayValue[0] === "-"){
                setDisplayValue(Utils.removeFirstCharFromString(displayValue));
            }
            else{
                setDisplayValue(Utils.addNegativeCharBeforeString(displayValue));
            }
        }
    };
    
    return (
        <div className="calculatorDiv">
            <Display displayValue={displayValue} />
            <div className='operations'>
                <Button symbol={"\u02FF"} onClick={handleBackSpaceClick}></Button>
                <Button symbol={"x\u00B2"} onClick={handleCalculationOneValueClick}></Button>
                <Button symbol={"\u221Ax"} onClick={handleCalculationOneValueClick}></Button>
                <Button symbol={"\u00F7"} onClick={handleOperationForTwoValuesClick}></Button>
                <Button symbol={"CE"} onClick={handleResetClick}></Button>
                <Button symbol={"7"} onClick={handleDigitClick}></Button>
                <Button symbol={"8"} onClick={handleDigitClick}></Button>
                <Button symbol={"9"} onClick={handleDigitClick}></Button>
                <Button symbol={"x"} onClick={handleOperationForTwoValuesClick}></Button>
                <Button symbol={"null"}></Button>
                <Button symbol={"4"} onClick={handleDigitClick}></Button>
                <Button symbol={"5"} onClick={handleDigitClick}></Button>
                <Button symbol={"6"} onClick={handleDigitClick}></Button>
                <Button symbol={"-"} onClick={handleOperationForTwoValuesClick}></Button>
                <Button symbol={"null"}></Button>
                <Button symbol={"1"} onClick={handleDigitClick}></Button>
                <Button symbol={"2"} onClick={handleDigitClick}></Button>
                <Button symbol={"3"} onClick={handleDigitClick}></Button>
                <Button symbol={"+"} onClick={handleOperationForTwoValuesClick}></Button>
                <Button symbol={"null"}></Button>
                <Button symbol={"-/+"} onClick={handleSignClick}></Button>
                <Button symbol={"0"} onClick={handleDigitClick}></Button>
                <Button symbol={"."} onClick={handleForPeriodClick}></Button>
                <Button symbol={"="} onClick={handleEqualClick}></Button>
                <Button symbol={"null"}></Button>
            </div>
        </div>
    );
}