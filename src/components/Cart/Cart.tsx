import React from 'react'
import Link from 'next/link';

export default function Cart() {
    return (
        <main className="flex justify-center my-36 items-center bg-white px-6 lg:px-8 h-72">
            <div className="text-center">
                <p className=" text-base leading-7 text-gray-600">Lo sentimos, aún no has agregado ningún producto:(</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/home"
                        className="rounded-md bg-[#22874a] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#489a69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 duration-300"
                    >
                        Volver
                    </Link>
                </div>
            </div>
        </main>
    )
}
