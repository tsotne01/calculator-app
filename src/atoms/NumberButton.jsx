import React from 'react'

function NumberButton({children,handler}) {
  return (
    <button onClick={handler} className='bg-white text-[#1F1F1F] p-4 cursor-pointer'>{children}</button>
  )
}

export default NumberButton