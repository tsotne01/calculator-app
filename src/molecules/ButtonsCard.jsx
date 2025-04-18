import React, { useContext } from 'react'
import NumberButton from '../atoms/NumberButton'
import OperationButton from '../atoms/OperationButton'
import ButtonsLayout from '../Layouts/ButtonsLayout'
import { CalcContext } from '../context/CalculatorContext'

function ButtonsCard() {
    const [operations, setOperations, values, setValues] = useContext(CalcContext);
    const handleNumClick = (e) => {
        if (values.length === operations.length) {
            setValues((prev) => [...prev, e.target.textContent]);
        }
    }
    const handleCLS = () => {
        setValues(() => []);
        setOperations(() => []);
    }
    const handleRemove = () => {
        if(values.length == operations.length){
            setOperations((prev)=> prev.slice(0,prev.length-1));
        }
        setValues((prev) => prev.slice(0, prev.length - 1));
    }
    const handleOperation = (e) => {
        if (operations.length + 1 === values.length) {
            setOperations((prev) => [...prev, e.target.textContent]);
        }
    }

    const handleEquals = ()=>{
        console.log("handle calc equals button");
    }
    
    return (
        <ButtonsLayout>
            {[1, 2, 3].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton handler={handleCLS} type="clear">CLS</OperationButton>
            {[4, 5, 6].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton handler={handleRemove} type="clear">RM</OperationButton>
            {[7, 8, 9].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton handler={handleOperation} type="operator">*</OperationButton>
            <OperationButton handler={handleOperation} type="operator">/</OperationButton>
            <OperationButton handler={handleOperation} type="operator">+</OperationButton>
            <OperationButton handler={handleOperation} type="operator">-</OperationButton>
            <OperationButton handler={handleEquals} type="equals">=</OperationButton>
        </ButtonsLayout>
    )
}

export default ButtonsCard