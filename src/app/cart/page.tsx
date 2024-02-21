'use client'
import Carrito from '@/components/Cart/Cart'
import Footer from '@/components/Home/Footer'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar/>
            <Carrito/>
            <Footer/>
        </>
    )
}
