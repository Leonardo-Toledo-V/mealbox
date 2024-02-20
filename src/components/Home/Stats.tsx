import { UsersIcon } from '@heroicons/react/24/outline'

export default function Stats() {
    return (
        <div className="relative bg-white  mb-20">
            <div className="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
                <img
                    className="h-full w-full object-cover"
                    src="img2.jpeg"
                    alt="Support team"
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-8 px-6 sm:py-12 lg:py-16">
                <div className="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
                    <div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#22874a] text-white">
                            <UsersIcon className="h-6 w-6" aria-hidden="true" />
                        </div>
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Ofrecemos lo que nuestros clientes quieren.
                    </h2>
                    <p className="mt-6 text-lg text-gray-500">
                        Descarga la aplicación Meal Box y descubre una nueva forma de alimentarte de manera saludable y conveniente. Con Meal Box, puedes personalizar tus planes de alimentación, recibir entregas directamente en tu puerta y disfrutar de comidas deliciosas y equilibradas sin el estrés de la planificación. ¡Haz de la alimentación saludable una parte fácil y deliciosa de tu vida con Meal Box!
                    </p>
                    <div className="mt-16 flex items-center justify-center overflow-hidden">
                        <dl className="-mx-8 -mt-8 flex flex-wrap">
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-gray-500">Entregas</dt>
                                <dd className="order-1 text-2xl font-bold text-[#22874a] sm:text-3xl sm:tracking-tight">24/7</dd>
                            </div>
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-gray-500">Puntuales</dt>
                                <dd className="order-1 text-2xl font-bold text-[#22874a] sm:text-3xl sm:tracking-tight">100%</dd>
                            </div>
                            <div className="flex flex-col px-8 pt-8">
                                <dt className="order-2 text-base font-medium text-gray-500">Recetas</dt>
                                <dd className="order-1 text-2xl font-bold text-[#22874a] sm:text-3xl sm:tracking-tight">30+</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
