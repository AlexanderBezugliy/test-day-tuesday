import React from 'react'
import { RotatingTriangles } from 'react-loader-spinner'


const Preloader = () => {
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-[#F1F1F1]'>
            <RotatingTriangles
                visible={true}
                height="180"
                width="180"
                color="#4fa94d"
                ariaLabel="rotating-triangles-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}

export default Preloader

