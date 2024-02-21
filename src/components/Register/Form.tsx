import Link from "next/link"
import Image from "next/image"
export default function Form() {
    return (
        <>
            <div className="flex min-h-full">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div className="flex justify-center flex-col items-center">
                            <Link
                                href="/home"
                            >
                                <Image
                                    width="1080"
                                    height="1080"
                                    className="h-14 w-auto"
                                    src="/logo-white.png"
                                    alt="Your Company"
                                />
                            </Link>
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Inicia sesión</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                O{' '}
                                <Link href="/home" className="font-medium text-[#22874a] hover:text-[#489a69]">
                                    empieza tu prueba gratuita de 14 días
                                </Link>
                            </p>
                        </div>

                        <div className="mt-8">
                            <div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">Ingresa con</p>

                                    <div className="mt-1 grid grid-cols-2 gap-3">
                                        <div>
                                            <a
                                                href="#"
                                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Facebook</span>
                                                <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </a>
                                        </div>

                                        <div>
                                            <a
                                                href="#"
                                                className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                            >
                                                <span className="sr-only">Sign in with GitHub</span>
                                                <Image
                                                width={10}
                                                height={10}
                                                alt="none"
                                                src="/google.png"
                                                className="h-5 w-5 grayscale"
                                                >

                                                </Image>

                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="relative mt-6">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="bg-white px-2 text-gray-500">O</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Correo electrónico
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="off"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#489a69] focus:outline-none focus:ring-[#489a69] sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Contraseña
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="off"
                                                required
                                                className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#489a69] focus:outline-none focus:ring-[#489a69] sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <input
                                                id="remember-me"
                                                name="remember-me"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-gray-300 text-[#22874a] focus:ring-[#489a69]"
                                            />
                                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                                Recuérdame
                                            </label>
                                        </div>

                                        <div className="text-sm">
                                            <a href="#" className="font-medium text-[#22874a] hover:text-[#489a69]">
                                                ¿Olvidaste tu contraseña?
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md border border-transparent bg-[#22874a] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#489a69] focus:outline-none focus:ring-2 focus:ring-[#489a69] focus:ring-offset-2"
                                        >
                                            Ingresar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block object-center">
                    <Image
                        width="1080"
                        height="1080"
                        className="absolute inset-0 h-full w-full object-cover"
                        src="/img4.jpeg"
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}
