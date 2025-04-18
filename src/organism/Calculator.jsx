import React from 'react'
import CalculatorCard from '../Layouts/CalculatorCard'
import CalculatorDisplay from '../molecules/CalculatorDisplay'

function Calculator() {
    return (
        <>
            <CalculatorCard>
                <CalculatorDisplay/>
            </CalculatorCard>
        </>

    )
}

export default Calculator