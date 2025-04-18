import React from 'react'

function ButtonsLayout({children}) {
    return (
        <div className='grid grid-cols-[repeat(4,1fr)] grid-rows-[repeat(4,1fr)] gap-x-2 gap-y-2'>
            {children}</div>
    )
}

export default ButtonsLayout