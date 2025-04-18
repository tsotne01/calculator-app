import React from 'react'
import CalculatorCard from '../Layouts/CalculatorCard'
import CalculatorDisplay from '../molecules/CalculatorDisplay'
import NumberButton from '../atoms/NumberButton'
import ButtonsCard from '../molecules/ButtonsCard'
import { CalcProvider } from '../context/CalculatorContext'

function Calculator() {
    return (
        <CalcProvider>
            <CalculatorCard>
                <CalculatorDisplay />
                <ButtonsCard></ButtonsCard>
            </CalculatorCard>
        </CalcProvider>

    )
}

export default Calculator