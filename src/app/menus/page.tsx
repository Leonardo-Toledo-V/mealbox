'use client'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import Main from '@/components/Menus/Main'
import Menus from '@/components/Menus/Menus'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar isActive={true} isActive2={false}/>
                <Main/>
                <Menus/>
            <Footer/>
        </div>
    )
}
