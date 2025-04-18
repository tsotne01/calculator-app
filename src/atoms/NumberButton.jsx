import React from 'react'

function NumberButton({children}) {
  return (
    <button className='bg-white text-[#1F1F1F] p-3 cursor-pointer'>{children}</button>
  )
}

export default NumberButton