import React from 'react'

function DisplayLayout({children}) {
  return (
    <div className='bg-[#87CEEB] text-[#1F1F1F] h-25 flex items-center justify-center mb-4'>{children}</div>
  )
}

export default DisplayLayout