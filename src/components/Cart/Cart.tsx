import React, { useEffect, useState } from 'react';
import { TrashIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Producto {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    foto: string;
    modelo: string;
    marca: string;
}

const Carrito: React.FC = () => {
    const [total, setTotal] = useState<number>();
    const [precios, setPrecios] = useState<Producto[]>([]);
    const [items, setItems] = useState<boolean>(false);
    const router = useRouter();
    const [noLoggeado, setNoLoggeado] = useState<boolean>(true);
    const [dataExample, setDataExample] = useState<Producto[]>(JSON.parse(localStorage.getItem('cart') || '[]'));

    useEffect(() => {
        const usuario = localStorage.getItem('logged');
        if (usuario != null) {
            setNoLoggeado(false);
            setPrecios(dataExample);
            if (dataExample.length > 0) {
                setItems(true);
            } else {
                setItems(false);
            }
        }
    }, [dataExample]);

    useEffect(() => {
        const nuevoTotal = precios.reduce((acumulador, producto) => {
            return acumulador + (producto.precio * producto.cantidad);
        }, 0);
        setTotal(nuevoTotal);
    }, [precios]);

    const handleIncrement = (data: Producto) => {
        const updatedData = dataExample.map((producto) =>
            producto.id === data.id && data.nombre === producto.nombre ? { ...producto, cantidad: producto.cantidad + 1 } : producto
        );
        setDataExample(updatedData);
        localStorage.setItem('cart', JSON.stringify(updatedData));

        const totalArticulos = updatedData.reduce((total, producto) => total + producto.cantidad, 0);
        localStorage.setItem('numeroArticulos', JSON.stringify(totalArticulos));
    };

    const handleDecrement = (data: Producto) => {
        const updatedData = dataExample.map((producto) =>
            producto.id === data.id && data.nombre === producto.nombre && producto.cantidad > 1 ? { ...producto, cantidad: producto.cantidad - 1 } : producto
        );
        setDataExample(updatedData);
        localStorage.setItem('cart', JSON.stringify(updatedData));

        const totalArticulos = updatedData.reduce((total, producto) => total + producto.cantidad, 0);
        localStorage.setItem('numeroArticulos', JSON.stringify(totalArticulos));
    };

    const handleRemove = (data: Producto) => {
        const updatedData = dataExample.filter((producto) => !(producto.id === data.id && producto.nombre === data.nombre));
        setDataExample(updatedData);
        localStorage.setItem('cart', JSON.stringify(updatedData));

        const totalArticulos = updatedData.reduce((total, producto) => total + producto.cantidad, 0);
        localStorage.setItem('numeroArticulos', JSON.stringify(totalArticulos));
    };

    const handleBuy = () => {
        localStorage.setItem('total', JSON.stringify(total));
        setDataExample([]);
        router.push("/resumen");
    };

    if (noLoggeado) {
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
        );
    }

    return (
        <div className="flex justify-center p-8 w-full max-w-6xl flex-col mx-auto mb-4">
            <div className='flex justify-between items-center w-full mt-12'>
                <div>
                    <h3 className='text-4xl font-normal text-gray-500'>Tus apartados</h3>
                </div>
                <div>
                    <a href='/' className='underline text-gray-500'>Seguir viendo artículos</a>
                </div>
            </div>
            <div className='flex justify-between w-full mt-12 uppercase text-[0.6rem] text-gray-400 border-b-[0.5px] pb-3 border-gray-200'>
                <div className='w-2/3'>
                    <p className='tracking-widest'>Producto</p>
                </div>
                <div className='flex justify-between items-center w-1/2 sm:w-1/3'>
                    <p className='tracking-widest hidden md:block'>Cantidad</p>
                    <p className='tracking-widest'>Total</p>
                </div>
            </div>
            {!items ? (
                <div className='flex mt-12 justify-center items-center'>
                    <h2 className='text-gray-500'>Lo sentimos, aún no has agregado ningún producto:(</h2>
                </div>
            ) : (
                <div className='border-b-[0.6px] border-gray-200'>
                    {dataExample.map((data, index) => {
                        return (
                            <div key={index} className='flex justify-between items-center mb-14 mt-6'>
                                <div className='flex justify-start items-center md:w-2/3 w-1/2'>
                                    <img className='h-24 min-h-[6rem] w-24 object-cover hidden sm:block' src={`/articulos/${data.foto}.jpg`} alt="item" />
                                    <div className='flex flex-col text-sm md:ml-12 space-y-1 text-gray-500'>
                                        <p>{data.nombre}</p>
                                        <p>$ {data.precio}.00</p>
                                        <p>Modelo: {data.modelo}</p>
                                        <p>Marca: {data.marca}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between items-center sm:w-1/3 w-1/2 text-gray-500'>
                                    <div className='md:flex items-center justify-around gap-x-4 hidden '>
                                        <MinusIcon
                                            onClick={() => handleDecrement(data)}
                                            className='h-4 w-auto cursor-pointer'
                                        />
                                        <p>{data.cantidad}</p>
                                        <PlusIcon
                                            onClick={() => handleIncrement(data)}
                                            className='h-4 w-auto cursor-pointer'
                                        />
                                        <TrashIcon
                                            onClick={() => handleRemove(data)}
                                            className='md:ml-12 h-4 w-auto cursor-pointer'
                                        />
                                    </div>
                                    <p>$ {data.precio}.00</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            {!items ? (
                <></>
            ) : (
                <div className='mt-10 flex justify-end items-center gap-x-8 text-gray-500'>
                    <div className='flex flex-col'>
                        <div className='flex gap-x-2 justify-end'>
                            <p>Subtotal </p>
                            <p>$ {total}.00 MXN</p>
                        </div>
                        <div>
                            <button onClick={handleBuy} className='px-20 py-2 bg-[#22874a] text-center font-light text-white hover:bg-[#489a69]text-sm mt-2 text-sm tracking-widest'>Apartar pedido</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carrito;
