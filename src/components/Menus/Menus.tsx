import Image from "next/image"

const menus = [
    {
        title: 'Desayunos y comidas.',
        href: '#',
        category: { name: 'Menú 1'},
        description:
            'Despierta con energía con nuestro delicioso desayuno energético. Repleto de frutas frescas, granola casera y yogur natural, es la forma perfecta de comenzar tu día.',
        date: 'Mar 16, 2020',
        imageUrl:
            '/menu1.png',
    },
    {
        title: 'Ensaladas y sándiwches.',
        href: '#',
        category: { name: 'Menú 2'},
        description:
            'Disfruta del frescor del Mediterráneo con nuestra ensalada mediterránea. Ingredientes cuidadosamente seleccionados como tomates cherry, pepinos, aceitunas y queso feta te transportarán a las costas griegas en cada bocado.',
        date: 'Mar 10, 2020',
        imageUrl:
            '/menu2.png',
    },
    {
        title: 'Colaciones, jugos y extras.',
        href: '#',
        category: { name: 'Menú 3'},
        description:
            '¿Necesitas un impulso de energía entre comidas? Nuestros snacks saludables son la respuesta perfecta. Desde barras de cereales caseras hasta crudités frescos con hummus, tenemos opciones deliciosas y nutritivas para satisfacer tus antojos.',
        date: 'Feb 12, 2020',
        imageUrl:
            '/menu3.png',
    },
];


export default function Menus() {
    return (
        <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="absolute inset-0">
                <div className="h-1/3 bg-white sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Menú personalizado.</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                        Descubre nuestras últimas creaciones culinarias y deléitate con los sabores únicos de nuestros menús.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                    {menus.map((menu) => (
                        <div key={menu.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div className="flex-shrink-0">
                                <Image
                                width="946"
                                height="1660"
                                className="h-full w-full object-cover" 
                                src={menu.imageUrl} 
                                alt="" />
                            </div>
                            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                <div className="flex-1">
                                    <div className="text-sm font-medium text-[#489a69]">
                                        <p className="hover:animate-pulse cursor-pointer">
                                            {menu.category.name}
                                        </p>
                                    </div>
                                    <div className="mt-2 block">
                                        <p className="text-xl font-semibold text-[#22874a]">{menu.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{menu.description}</p>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="ml-3">
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <p >{menu.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
