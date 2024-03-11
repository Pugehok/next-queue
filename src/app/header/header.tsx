'use client'

interface props{
    children?: React.ReactNode
}


export const NavMenu: React.FC<props> = ({children}) =>{
    return (
        <>
        <div className="container h-fit mx-auto flex text-white mt-8">
            <ul className="flex m-auto flex-row space-x-10">
                <li>
                    <p>О нас</p>
                </li>
                <li>
                    <p>Примеры</p>
                </li>
                <li>
                    <p>Тарифы</p>
                </li>
            </ul>
        </div>
        {children}
        </>
    )
}