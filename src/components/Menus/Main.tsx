import Image from "next/image";

export default function Main() {
    return (
        <div className="relative bg-[#222222]">
            <div className="relative h-80 overflow-hidden bg-[#22874a] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
                <Image
                    width="2000"
                    height="2000"
                    className=" h-full w-full object-cover"
                    src="/img5.jpeg"
                    alt=""
                />
            </div>
            <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-40 lg:px-8">
                <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-20 lg:pr-0 xl:pl-24">
                    <h2 className="text-base font-semibold leading-7 text-[#22874a]">Tu elección, tu estilo, tu comida.</h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white">Menús a tu Medida</p>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                    Explora nuestra variedad de opciones de menús y alimentos para crear la combinación perfecta que se adapte a tus gustos y necesidades. Desde platos clásicos hasta opciones vegetarianas y veganas, aquí tienes el control total sobre lo que comes. ¡Empieza a diseñar tu plan de comidas ideal hoy mismo!
                    </p>
                </div>
            </div>
        </div>
    )
}
