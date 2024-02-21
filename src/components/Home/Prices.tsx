import { CheckIcon } from '@heroicons/react/24/outline'

const basicFeatures = ['Desayuno', 'Comida', 'Plan de alimentación personalizado']
const premiumFeatures = ['Desayuno', 'Comida', 'Cena', '1 colación y jugo','Plan de alimentación basadado en tus objetivos', 'Plan de entrenamiento']
const totalFeatures = ['Desayuno', 'Comida', 'Cena','Plan de alimentación personalizado']

export default function Prices() {
    return (
        <div className="bg-[#222222]">
            <div className="px-6 pt-12 lg:px-8 lg:pt-24">
                <div className="text-center">
                    <h2 className="text-lg font-semibold leading-6 text-gray-300">Descubre nuestros precios</h2>
                    <p className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-4xl">
                    La mejor oferta para todos, sin excepción   
                    </p>
                    <p className="mx-auto mt-3 max-w-4xl text-xl text-gray-300 sm:mt-5 sm:text-lg">
                    Meal Box te ofrece precios justos y asequibles, independientemente de quién seas o cuáles sean tus necesidades nutricionales. Nuestro objetivo es brindarte acceso a una alimentación saludable sin comprometer tu bolsillo.
                    </p>
                </div>
            </div>
            <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-28">
                <div className="relative z-0">
                    <div className="absolute inset-0 h-5/6 bg-[#222222] lg:h-2/3" />
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative lg:grid lg:grid-cols-7">
                            <div className="mx-auto max-w-md lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3 lg:mx-0 lg:max-w-none">
                                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                                    <div className="flex flex-1 flex-col">
                                        <div className="bg-white px-6 py-10">
                                            <div>
                                                <h3 className="text-center text-xl font-medium text-gray-900" id="tier-hobby">
                                                    Básico
                                                </h3>
                                                <div className="mt-4 flex items-center justify-center">
                                                    <span className="flex items-start px-3 text-3xl tracking-tight text-gray-900">
                                                        <span className="mr-0.5 text-2xl font-medium tracking-tight">$</span>
                                                        <span className="font-bold ">1199</span>
                                                    </span>
                                                    <span className="text-lg font-medium text-gray-500">/semanales</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                                            <ul role="list" className="space-y-4">
                                                {basicFeatures.map((feature) => (
                                                    <li key={feature} className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <div className="rounded-lg shadow-md">
                                                    <a
                                                        href="#"
                                                        className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-[#22874a] hover:bg-gray-50 duration-300"
                                                        aria-describedby="tier-hobby"
                                                    >
                                                        Suscríbete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mt-10 max-w-lg lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4 lg:mx-0 lg:mt-0 lg:max-w-none">
                                <div className="relative z-10 rounded-lg shadow-xl">
                                    <div
                                        className="pointer-events-none absolute inset-0 rounded-lg border-2 border-[#22874a]"
                                        aria-hidden="true"
                                    />
                                    <div className="absolute inset-x-0 top-0 translate-y-px transform">
                                        <div className="flex -translate-y-1/2 transform justify-center">
                                            <span className="inline-flex rounded-full bg-[#22874a] px-4 py-1 text-base font-semibold text-white">
                                                Más vendido
                                            </span>
                                        </div>
                                    </div>
                                    <div className="rounded-t-lg bg-white px-6 pt-12 pb-10">
                                        <div>
                                            <h3
                                                className="text-center text-2xl font-semibold tracking-tight text-gray-900 sm:-mx-6"
                                                id="tier-growth"
                                            >
                                                Premium
                                            </h3>
                                            <div className="mt-4 flex items-center justify-center">
                                                <span className="flex items-start px-3 text-5xl tracking-tight text-gray-900 sm:text-5xl">
                                                    <span className="mt-2 mr-2 text-3xl font-medium tracking-tight">$</span>
                                                    <span className="font-bold">1,799</span>
                                                </span>
                                                <span className="text-xl font-medium text-gray-500">/semanales</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-b-lg border-t-2 border-gray-100 bg-gray-50 px-6 pt-10 pb-8 sm:px-10 sm:py-10">
                                        <ul role="list" className="space-y-4">
                                            {premiumFeatures.map((feature) => (
                                                <li key={feature} className="flex items-start">
                                                    <div className="flex-shrink-0">
                                                        <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                    </div>
                                                    <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-10">
                                            <div className="rounded-lg shadow-md">
                                                <a
                                                    href="#"
                                                    className="block w-full rounded-lg border border-transparent bg-[#22874a] px-6 py-4 text-center text-xl font-medium leading-6 text-white hover:bg-[#489a69] duration-300 "
                                                    aria-describedby="tier-growth"
                                                >
                                                    Suscríbete
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-auto mt-10 max-w-md lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3 lg:m-0 lg:max-w-none">
                                <div className="flex h-full flex-col overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                                    <div className="flex flex-1 flex-col">
                                        <div className="bg-white px-6 py-10">
                                            <div>
                                                <h3 className="text-center text-xl font-medium text-gray-900" id="tier-scale">
                                                    Total
                                                </h3>
                                                <div className="mt-4 flex items-center justify-center">
                                                    <span className="flex items-start px-3 text-3xl tracking-tight text-gray-900">
                                                        <span className="mr-0.5 text-2xl font-medium tracking-tight">$</span>
                                                        <span className="font-bold ">1,499</span>
                                                    </span>
                                                    <span className="text-lg font-medium text-gray-500">/semanales</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between border-t-2 border-gray-100 bg-gray-50 p-6 sm:p-10 lg:p-6 xl:p-10">
                                            <ul role="list" className="space-y-4">
                                                {totalFeatures.map((feature) => (
                                                    <li key={feature} className="flex items-start">
                                                        <div className="flex-shrink-0">
                                                            <CheckIcon className="h-6 w-6 flex-shrink-0 text-green-500" aria-hidden="true" />
                                                        </div>
                                                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-8">
                                                <div className="rounded-lg shadow-md">
                                                    <a
                                                        href="#"
                                                        className="block w-full rounded-lg border border-transparent bg-white px-6 py-3 text-center text-base font-medium text-[#22874a] hover:bg-gray-50 duration-300"
                                                        aria-describedby="tier-scale"
                                                    >
                                                        Suscríbete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
