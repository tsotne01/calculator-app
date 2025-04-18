import React, { useContext } from 'react'
import NumberButton from '../atoms/NumberButton'
import OperationButton from '../atoms/OperationButton'
import ButtonsLayout from '../Layouts/ButtonsLayout'
import { CalcContext } from '../context/CalculatorContext'

function ButtonsCard() {
    const [operations,setOperations,values,setValues] = useContext(CalcContext);

    console.log(operations);
    return (
        <ButtonsLayout>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <OperationButton type="clear">CLS</OperationButton>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <OperationButton type="clear">RM</OperationButton>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <OperationButton type="operator">*</OperationButton>
            <OperationButton type="operator">/</OperationButton>
            <OperationButton type="operator">+</OperationButton>
            <OperationButton type="operator">-</OperationButton>
            <OperationButton type="equals">=</OperationButton>
        </ButtonsLayout>
    )
}

export default ButtonsCard