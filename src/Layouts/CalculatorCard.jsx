import React from 'react'

function CalculatorCard({children}) {
    return (
        <div className='font-bold text-xl w-[40%] max-w-96 min-w-2xs min-h-1/3 bg-[#F4F4F4] rounded p-6'>{children}</div>
   )
}

export default CalculatorCard