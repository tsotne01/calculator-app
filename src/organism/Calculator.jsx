import React from 'react'
import CalculatorCard from '../Layouts/CalculatorCard'
import CalculatorDisplay from '../molecules/CalculatorDisplay'
import NumberButton from '../atoms/NumberButton'
import ButtonsCard from '../molecules/ButtonsCard'

function Calculator() {
    return (
        <>
            <CalculatorCard>
                <CalculatorDisplay/>
                <ButtonsCard></ButtonsCard>
            </CalculatorCard>
        </>

    )
}

export default Calculator