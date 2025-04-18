import React, { useContext } from 'react'
import NumberButton from '../atoms/NumberButton'
import OperationButton from '../atoms/OperationButton'
import ButtonsLayout from '../Layouts/ButtonsLayout'
import { CalcContext } from '../context/CalculatorContext'

function ButtonsCard() {
    const [operations, setOperations, values, setValues] = useContext(CalcContext);
    const handleNumClick = (e) => {
        setValues((prev) => [...prev, e.target.textContent]);
    }
    const handleCLS = () => {
        setValues(() => []);
        setOperations(() => []);
    }
    const handleRemove = ()=>{
        setValues((prev)=> prev.slice(0,prev.length - 1));
    }
    return (
        <ButtonsLayout>
            {[1, 2, 3].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton handler={handleCLS} type="clear">CLS</OperationButton>
            {[4, 5, 6].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton handler={handleRemove} type="clear">RM</OperationButton>
            {[7, 8, 9].map((num, index) => <NumberButton key={index} handler={handleNumClick} >{num}</NumberButton>)}
            <OperationButton type="operator">*</OperationButton>
            <OperationButton type="operator">/</OperationButton>
            <OperationButton type="operator">+</OperationButton>
            <OperationButton type="operator">-</OperationButton>
            <OperationButton type="equals">=</OperationButton>
        </ButtonsLayout>
    )
}

export default ButtonsCard