import Footer from '@/web/Footer'
import Navbar from '@/web/Navbar'
import React from 'react'


const HomeLayout = () => {
    return (
        <>
            <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
                <Navbar />
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout