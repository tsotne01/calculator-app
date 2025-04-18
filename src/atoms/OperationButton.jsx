import React from 'react'

function OperationButton({ type, handler, children }) {
    let classnames;
    if (type === 'operator') {
        classnames = 'bg-[#FFA500] text-white';
    }
    if (type === 'clear') {
        classnames = 'bg-[#E74C3C] text-white';
    }
    if (type === 'equals') {
        classnames = 'bg-[#28B463] text-white';
    }
    return (
        <div onClick={handler} className={`${classnames} flex items-center justify-center cursor-pointer p-4`}>{children}</div>

    )
}

export default OperationButton