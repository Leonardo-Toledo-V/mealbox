import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Image from 'next/image'


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <>
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-[#22874a] border-[#22874a]' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                    )
                                                }
                                            >
                                                Menús & Recetas
                                            </Tab>
                                            <Tab
                                                className={({ selected }) =>
                                                    classNames(
                                                        selected ? 'text-[#22874a] border-[#22874a]' : 'text-gray-900 border-transparent',
                                                        'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                    )
                                                }
                                            >
                                                Precios
                                            </Tab>
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        <Tab.Panel className="space-y-12 px-4 pt-10 pb-40">
                                            <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            Menús
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                                            Recetas
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>

                                    <Tab.Panels as={Fragment}>
                                        <Tab.Panel className="space-y-12 px-4 pt-10 pb-40">
                                            <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                                <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                                    <div>
                                                        <p className="font-medium text-gray-900">
                                                            Precios
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                                            Paquetes
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Panel>
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    <div className="flow-root">
                                        <Link href="/register" className="-m-2 block p-2 font-medium text-green-900">
                                            Regístrate
                                        </Link>
                                    </div>
                                    <div className="flow-root">
                                        <Link href="/login" className="-m-2 block p-2 font-medium text-gray-900">
                                            Iniciar sesión
                                        </Link>
                                    </div>
                                </div>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {/* Currency selector */}
                                    <form className='inline-block'>
                                        <div className="flex flex-row justify-center items-center gap-x-4">
                                            <Image
                                                width="20"
                                                height="20"
                                                src="/mexico.svg"
                                                alt="mexico-flag"
                                                className="h-auto w-8 flex-shrink-0"
                                            />
                                            <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                                                <select
                                                    id="mobile-currency"
                                                    name="currency"
                                                    className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                                                >
                                                    <option>MXN</option>
                                                    <option>USD</option>
                                                    <option>EUR</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                                    <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative z-10">
                <nav aria-label="Top">
                    {/* Top navigation */}
                    <div className="bg-[#222222]">
                        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                            {/* Currency selector */}
                            <form className="hidden lg:block lg:flex-1">
                                <div className="flex">
                                    <label htmlFor="desktop-currency" className="sr-only">
                                        Currency
                                    </label>
                                    <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                                        <select
                                            id="desktop-currency"
                                            name="currency"
                                            className="flex items-center rounded-md border-transparent bg-[#222222] bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-50"
                                        >
                                            <option>MXN</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                                            <ChevronDownIcon className="h-5 w-5 text-gray-300" aria-hidden="true" />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                                Obtén un descuento de $50 en tu primer mes
                            </p>

                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <Link href="/register" className="text-sm font-medium text-white hover:text-gray-100">
                                    Regístrate
                                </Link>
                                <span className="h-6 w-px bg-gray-600" aria-hidden="true" />
                                <Link href="/login" className="text-sm font-medium text-white hover:text-gray-100">
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Secondary navigation */}
                    <div className="bg-white">
                        <div className="border-b border-gray-200">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                    {/* Logo (lg+) */}
                                    <div className="hidden lg:flex lg:items-center">
                                        <a href="#">
                                            <Image
                                                width="628"
                                                height="397"
                                                className="h-10 w-auto"
                                                src="/logo-white.png"
                                                alt=""
                                            />
                                        </a>
                                    </div>

                                    <div className="hidden h-full lg:flex">
                                        <div className="ml-8">
                                            <div className="flex h-full justify-center space-x-8">
                                                <div className="relative flex">
                                                    <Link
                                                        href="/menus"
                                                        className="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:border-b-[#22874a] focus:text-[#22874a] hover:text-gray-800 border-transparent text-gray-700" >
                                                        Menús y recetas
                                                    </Link>
                                                </div>
                                                <div className="relative flex">
                                                    <Link
                                                        href="/prices"
                                                        className="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:border-b-[#22874a] focus:text-[#22874a] hover:text-gray-800 border-transparent text-gray-700" >
                                                        Precios
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex flex-1 items-center lg:hidden">
                                        <button
                                            type="button"
                                            className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                                            onClick={() => setMobileMenuOpen(true)}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Logo (lg-) */}
                                    <a href="#" className="lg:hidden">
                                        <span className="sr-only">Your Company</span>
                                        <Image
                                            width="628"
                                            height="397"
                                            src="/logo-white.png"
                                            alt=""
                                            className="h-10 w-auto"
                                        />
                                    </a>

                                    <div className="flex flex-1 items-center justify-end">
                                        <div className="flex items-center lg:ml-8">
                                            <div className="flex space-x-8">

                                                <div className="flex">
                                                    <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Account</span>
                                                        <UserIcon className="h-6 w-6" aria-hidden="true" />
                                                    </a>
                                                </div>
                                            </div>

                                            <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                                            <div className="flow-root">
                                                <a href="#" className="group -m-2 flex items-center p-2">
                                                    <ShoppingCartIcon
                                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                                    <span className="sr-only">items in cart, view bag</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
