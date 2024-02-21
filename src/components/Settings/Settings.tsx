'use client'
import { useState } from 'react'
import { RadioGroup, Switch } from '@headlessui/react'
import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid'
import {
    BellIcon,
    CogIcon,
    CreditCardIcon,
    KeyIcon,
    SquaresPlusIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline'



const subNavegacion = [
    { nombre: 'Perfil', href: '#', icono: UserCircleIcon, actual: false },
    { nombre: 'Cuenta', href: '#', icono: CogIcon, actual: false },
    { nombre: 'Contraseña', href: '#', icono: KeyIcon, actual: false },
    { nombre: 'Notificaciones', href: '#', icono: BellIcon, actual: false },
    { nombre: 'Plan y Facturación', href: '#', icono: CreditCardIcon, actual: true },
    { nombre: 'Integraciones', href: '#', icono: SquaresPlusIcon, actual: false },
]
const planes = [
    { nombre: 'Básico', precioMensual: 1119, precioAnual: 290, limite: 'Hasta 5 publicaciones de trabajo activas' },
    { nombre: 'Premium', precioMensual: 1799, precioAnual: 990, limite: 'Hasta 25 publicaciones de trabajo activas' },
    { nombre: 'Total', precioMensual: 1499, precioAnual: 2490, limite: 'Publicaciones de trabajo activas ilimitadas' },
]
const pagos = [
    {
        id: 1,
        fecha: '11/01/2024',
        descripcion: 'Plan Premium - Facturación semanal',
        cantidad: 'MXN $1799.00',
        href: '#',
    },
]

function classNames(...clases: string[]) {
    return clases.filter(Boolean).join(' ')
}

export default function Ejemplo() {
    const [planSeleccionado, setPlanSeleccionado] = useState(planes[1])
    const [facturacionAnualHabilitada, setFacturacionAnualHabilitada] = useState(true)

    return (
        <>
            {/*
        Este ejemplo requiere actualizar su plantilla:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
            <div className="h-full">

                <main className="mx-auto max-w-7xl pb-10 lg:py-12 lg:px-8">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                        <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
                            <nav className="space-y-1">
                                {subNavegacion.map((item) => (
                                    <a
                                        key={item.nombre}
                                        href={item.href}
                                        className={classNames(
                                            item.actual
                                                ? 'bg-gray-50 text-[#22874a] hover:bg-white'
                                                : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                                            'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                                        )}
                                        aria-current={item.actual ? 'page' : undefined}
                                    >
                                        <item.icono
                                            className={classNames(
                                                item.actual ? 'text-[#22874a]' : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <span className="truncate">{item.nombre}</span>
                                    </a>
                                ))}
                            </nav>
                        </aside>

                        {/* Detalles de pago */}
                        <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
                            <section aria-labelledby="payment-details-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="bg-white py-6 px-4 sm:p-6">
                                            <div>
                                                <h2 id="payment-details-heading" className="text-lg font-medium leading-6 text-gray-900">
                                                    Detalles del pago
                                                </h2>
                                                <p className="mt-1 text-sm text-gray-500">
                                                    Actualiza tu información de facturación. Ten en cuenta que actualizar tu ubicación podría afectar tus tasas impositivas.
                                                </p>
                                            </div>

                                            <div className="mt-6 grid grid-cols-4 gap-6">
                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                        Nombre
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="first-name"
                                                        id="first-name"
                                                        autoComplete="cc-given-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                        Apellido
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="last-name"
                                                        id="last-name"
                                                        autoComplete="cc-family-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                        Dirección de correo electrónico
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="email-address"
                                                        id="email-address"
                                                        autoComplete="email"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">
                                                        Fecha de vencimiento
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="expiration-date"
                                                        id="expiration-date"
                                                        autoComplete="cc-exp"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                        placeholder="MM / AA"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-1">
                                                    <label
                                                        htmlFor="security-code"
                                                        className="flex items-center text-sm font-medium text-gray-700"
                                                    >
                                                        <span>Código de seguridad</span>
                                                        <QuestionMarkCircleIcon
                                                            className="ml-1 h-5 w-5 flex-shrink-0 text-gray-300"
                                                            aria-hidden="true"
                                                        />
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="security-code"
                                                        id="security-code"
                                                        autoComplete="cc-csc"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    />
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                                        País
                                                    </label>
                                                    <select
                                                        id="country"
                                                        name="country"
                                                        autoComplete="country-name"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    >
                                                        <option>Estados Unidos</option>
                                                        <option>Canadá</option>
                                                        <option>México</option>
                                                    </select>
                                                </div>

                                                <div className="col-span-4 sm:col-span-2">
                                                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                        Código postal
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="postal-code"
                                                        id="postal-code"
                                                        autoComplete="postal-code"
                                                        className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-gray-900 focus:outline-none focus:ring-gray-900 sm:text-sm"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent  bg-[#22874a]  hover:bg-[#489a69]  py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Plan */}
                            <section aria-labelledby="plan-heading">
                                <form action="#" method="POST">
                                    <div className="shadow sm:overflow-hidden sm:rounded-md">
                                        <div className="space-y-6 bg-white py-6 px-4 sm:p-6">
                                            <div>
                                                <h2 id="plan-heading" className="text-lg font-medium leading-6 text-gray-900">
                                                    Plan
                                                </h2>
                                            </div>

                                            <RadioGroup value={planSeleccionado} onChange={setPlanSeleccionado}>
                                                <RadioGroup.Label className="sr-only"> Planes de precios </RadioGroup.Label>
                                                <div className="relative -space-y-px rounded-md bg-white">
                                                    {planes.map((plan, indicePlan) => (
                                                        <RadioGroup.Option
                                                            key={plan.nombre}
                                                            value={plan}
                                                            className={({ checked }) =>
                                                                classNames(
                                                                    indicePlan === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                                                                    indicePlan === planes.length - 1 ? 'rounded-bl-md rounded-br-md' : '',
                                                                    checked ? 'border-[#22874a] z-10' : 'border-gray-200',
                                                                    'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
                                                                )
                                                            }
                                                        >
                                                            {({ active, checked }) => (
                                                                <>
                                                                    <span className="flex items-center text-sm">
                                                                        <span
                                                                            className={classNames(
                                                                                checked ? 'bg-[#22874a] border-transparent' : 'bg-white border-gray-300',
                                                                                active ? 'ring-2 ring-offset-2 ring-gray-900' : '',
                                                                                'h-4 w-4 rounded-full border flex items-center justify-center'
                                                                            )}
                                                                            aria-hidden="true"
                                                                        >
                                                                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                                                                        </span>
                                                                        <RadioGroup.Label as="span" className="ml-3 font-medium text-gray-900">
                                                                            {plan.nombre}
                                                                        </RadioGroup.Label>
                                                                    </span>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center"
                                                                    >
                                                                        <span
                                                                            className={classNames(
                                                                                checked ? 'text-[#22874a]' : 'text-gray-900',
                                                                                'font-medium'
                                                                            )}
                                                                        >
                                                                            ${plan.precioMensual} / semanal
                                                                        </span>
                                                                    </RadioGroup.Description>
                                                                    <RadioGroup.Description
                                                                        as="span"
                                                                        className={classNames(
                                                                            checked ? 'text-[#22874a]' : 'text-gray-500',
                                                                            'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                                                                        )}
                                                                    >
                                                                        {plan.limite}
                                                                    </RadioGroup.Description>
                                                                </>
                                                            )}
                                                        </RadioGroup.Option>
                                                    ))}
                                                </div>
                                            </RadioGroup>

                                            <Switch.Group as="div" className="flex items-center">
                                                <Switch
                                                    checked={facturacionAnualHabilitada}
                                                    onChange={setFacturacionAnualHabilitada}
                                                    className={classNames(
                                                        facturacionAnualHabilitada ? 'bg-[#22874a]' : 'bg-gray-200',
                                                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2'
                                                    )}
                                                >
                                                    <span
                                                        aria-hidden="true"
                                                        className={classNames(
                                                            facturacionAnualHabilitada ? 'translate-x-5' : 'translate-x-0',
                                                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                                                        )}
                                                    />
                                                </Switch>
                                                <Switch.Label as="span" className="ml-3">
                                                    <span className="text-sm font-medium text-gray-900">Facturación anual</span>
                                                    <span className="text-sm text-gray-500">(Ahorra un 10%)</span>
                                                </Switch.Label>
                                            </Switch.Group>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm bg-[#22874a]  hover:bg-[#489a69] focus:outline-none focus:ring-2 focus:ring-[#489a69]  focus:ring-offset-2"
                                            >
                                                Guardar
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </section>

                            {/* Historial de facturación */}
                            <section aria-labelledby="billing-history-heading">
                                <div className="bg-white pt-6 shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="px-4 sm:px-6">
                                        <h2 id="billing-history-heading" className="text-lg font-medium leading-6 text-gray-900">
                                            Historial de facturación
                                        </h2>
                                    </div>
                                    <div className="mt-6 flex flex-col">
                                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                                <div className="overflow-hidden border-t border-gray-200">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                    Fecha
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                    Descripción
                                                                </th>
                                                                <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                                                    Cantidad
                                                                </th>
                                                                {/*
                                  `relative` se agrega aquí debido a un error extraño en Safari que hace que los encabezados `sr-only` introduzcan desbordamiento en el cuerpo en dispositivos móviles.
                                */}
                                                                <th
                                                                    scope="col"
                                                                    className="relative px-6 py-3 text-left text-sm font-medium text-gray-500"
                                                                >
                                                                    <span className="sr-only">Ver recibo</span>
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-200 bg-white">
                                                            {pagos.map((pago) => (
                                                                <tr key={pago.id}>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                                                                        <time dateTime={pago.fecha}>{pago.fecha}</time>
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {pago.descripcion}
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                                                                        {pago.cantidad}
                                                                    </td>
                                                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                                        <a href={pago.href} className="text-[#22874a] hover:text-[#22874a]">
                                                                            Ver recibo
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
