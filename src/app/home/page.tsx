'use client'
import Footer from '@/components/Home/Footer'
import Main from '@/components/Home/Main'
import Navbar from '@/components/Home/Navbar'

export default function Page() {
    return (
        <div className="bg-white w-full">
            <Navbar />
                <Main />
            <Footer />
        </div>
    )
}
