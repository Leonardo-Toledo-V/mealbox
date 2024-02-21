import Image from 'next/image'
import React from 'react'

const footerNavigation = {
    bottomLinks: [
        { name: 'Accesibilidad', href: '#' },
        { name: 'Privacidad', href: '#' },
        { name: 'Términos', href: '#' },
    ]
}

export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-[#222222]">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="border-t border-gray-200">
                    <div className="pt-16 pb-20">
                        <div className="md:flex md:justify-center">
                            <Image
                                width="1105"
                                height="684"
                                src="logo.png"
                                alt=""
                                className="h-16 w-auto"
                            />
                        </div>
                    </div>
                    <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
                        <div className="flex items-center rounded-lg bg-white opacity-90 p-6 sm:p-10">
                            <div className="mx-auto max-w-sm">
                                <h3 className="font-semibold text-gray-900">Regístrate para enterarte</h3>
                                <p className="mt-2 text-sm text-gray-500">
                                    Las últimas noticias, artículos y recursos, enviados a tu bandeja de entrada semanalmente.
                                </p>
                                <form className="mt-4 sm:mt-6 sm:flex">
                                    <label htmlFor="email-address" className="sr-only">
                                        Correo electrónico
                                    </label>
                                    <input
                                        id="email-address"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-[#489a69] focus:outline-none focus:ring-1 focus:ring-[#489a69]"
                                    />
                                    <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center rounded-md border border-transparent bg-[#22874a] py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-[#489a69] focus:outline-none focus:ring-2 focus:ring-[#489a69] focus:ring-offset-2 focus:ring-offset-white duration-300"
                                        >
                                            Regístrate
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="relative mt-6 flex items-center py-12 px-6 sm:py-16 sm:px-10 lg:mt-0">
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                                <Image
                                    width="3000"
                                    height="2000"
                                    src="img3.jpeg"
                                    alt=""
                                    className="h-full w-full object-cover object-center saturate-0 filter"
                                />
                                <div className="absolute inset-0 bg-[#22874a] bg-opacity-70 hover:bg-opacity-60 duration-300" />
                            </div>
                            <div className="relative mx-auto max-w-sm text-center">
                                <h3 className="text-2xl font-bold tracking-tight text-white">
                                    Obtén acceso a contenido exclusivo
                                </h3>
                                <p className="mt-2 text-gray-200">
                                    ¿Ya te registraste? Si es así, usa la palabra clave que te enviamos para obtener acceso.{' '}
                                    <a href="#" className="whitespace-nowrap font-bold text-white hover:text-gray-200">
                                        Ir ahora
                                        <span aria-hidden="true"> &rarr;</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-10 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">&copy; 2024 todos los derechos reservados</p>
                    </div>

                    <div className="mt-4 flex items-center justify-center md:mt-0">
                        <div className="flex space-x-8">
                            {footerNavigation.bottomLinks.map((item) => (
                                <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="ml-6 border-l border-gray-200 pl-6">
                            <a href="#" className="flex items-center text-gray-500 hover:text-gray-600">
                                <Image
                                    width="100"
                                    height="100"
                                    src="mexico.svg"
                                    alt="mexico-flag"
                                    className="h-auto w-8 flex-shrink-0"
                                />
                                <span className="ml-3 text-sm">Elegir ubicación</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
