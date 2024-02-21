'use client'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Prices from '@/components/Home/Prices'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar isActive={false} isActive2={true}/>
            <Prices/>
            <Footer/>
        </div>
    )
}
