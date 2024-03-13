'use client'
import Link from "next/link"

export const Header: React.FC = ({}) =>{
    return (
        <header className="mx-auto flex text-white mt-8">
            <ul className="flex m-auto flex-row space-x-10">
                <li>
                    <Link href='/about'>О нас</Link>
                </li>
                <li>
                    <Link href='/example'>Примеры</Link>
                </li>
                <li>
                    <Link href='/tarifs'>Тарифы</Link>
                </li>
                <li>
                    {/* It's timed link for header */}
                    <Link href='/'>Main</Link>
                </li>
            </ul>
        </header>
    )
}