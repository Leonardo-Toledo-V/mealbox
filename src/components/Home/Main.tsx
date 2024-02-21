import React from 'react'
import Prices from '@/components/Home/Prices'
import Stats from '@/components/Home/Stats'
import Image from 'next/image';

const offers = [
    { name: 'Personaliza tu caja', description: 'Crea tu propio plan personalizado', href: '#' },
    { name: 'Programa de fidelidad', description: 'Obtén descuentos exclusivos', href: '#' },
    { name: 'Envío express gratuito', description: 'Recibe tu primera caja con envío express', href: '#' },
];

export default function Main() {
    return (
        <main>
            {/* Hero */}
            <div className="flex flex-col border-b border-gray-200 lg:border-0">
                <nav aria-label="Offers" className="order-last lg:order-first">
                    <div className="mx-auto max-w-7xl lg:px-8">
                        <ul
                            role="list"
                            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                        >
                            {offers.map((offer) => (
                                <li key={offer.name} className="flex flex-col">
                                    <a
                                        href={offer.href}
                                        className="relative flex flex-1 flex-col justify-center bg-white py-6 px-4 text-center focus:z-10"
                                    >
                                        <p className="text-sm text-gray-500">{offer.name}</p>
                                        <p className="font-semibold text-gray-900">{offer.description}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                <div className="relative">
                    <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
                    <div className="relative bg-gray-100 lg:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                                <div className="lg:pr-16">
                                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
                                        Tu solución de alimentación saludable.
                                    </h1>
                                    <p className="mt-4 text-lg text-gray-600">
                                        Deja que MealBox sea tu aliado en la búsqueda de una alimentación saludable y sin preocupaciones.
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-block rounded-md border border-transparent bg-[#22874a] py-3 px-8 font-medium text-white hover:bg-[#489a69] duration-300"
                                        >
                                            Ver más
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
                        <Image
                            width="1080"
                            height="1080"
                            src="/img1.jpeg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
            <Prices />
            <Stats />
        </main>
    )
}
