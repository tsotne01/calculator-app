import React from 'react'

function CalculatorCard({children}) {
    return (
        <div className='font-bold text-xl w-xs sm:w-2xs bg-[#F4F4F4] rounded p-1.5'>{children}</div>
   )
}

export default CalculatorCard