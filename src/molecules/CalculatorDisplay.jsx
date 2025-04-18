import React, { useContext, useEffect } from 'react'
import DisplayLayout from '../Layouts/DisplayLayout'
import { CalcContext } from '../context/CalculatorContext';

function CalculatorDisplay() {
    const [operations, setOperations, values, setValues] = useContext(CalcContext);
    useEffect(() => {
        console.log("rerendered display!")
        console.log(values);
        console.log(operations);
    }, []);
    return (
        <DisplayLayout>
            {values.length == 0 && <span>Tab On Buttons To Start</span>}
            {values && values.map((val, idx) => <span key={idx}>{`${val} `} {operations[idx]}</span>)}
        </DisplayLayout>
    )
}

export default CalculatorDisplay