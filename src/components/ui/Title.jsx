import React from 'react'

const Title = ({ title, descr }) => {
    return (
        <div className='font-medium text-[20px] mb-5 descr-xl:mb-0'>
            <h3 className='text-[#0C0D0D]'>{title}</h3>
            <p className='text-[#7D8082]'>{descr}</p>
        </div>
    )
}

export default Title
