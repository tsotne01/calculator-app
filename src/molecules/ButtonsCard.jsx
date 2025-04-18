import React from 'react'
import NumberButton from '../atoms/NumberButton'
import OperationButton from '../atoms/OperationButton'

function ButtonsCard() {
    return (
        <div className='grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)] gap-x-2 gap-y-2'>
            <NumberButton>1</NumberButton>
            <NumberButton>2</NumberButton>
            <NumberButton>3</NumberButton>
            <OperationButton type="clear">CLS</OperationButton>
            <NumberButton>4</NumberButton>
            <NumberButton>5</NumberButton>
            <NumberButton>6</NumberButton>
            <OperationButton type="operator">+</OperationButton>
            <NumberButton>7</NumberButton>
            <NumberButton>8</NumberButton>
            <NumberButton>9</NumberButton>
            <OperationButton type="operator">-</OperationButton>
            <OperationButton type="equals">=</OperationButton>
        </div>
    )
}

export default ButtonsCard