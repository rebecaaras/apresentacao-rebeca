import React from "react";
import Image from "next/image";

const Navbar = () => {
    return (
        <>
            <nav className="text-orange-950 p-4 flex flex-row items-center">
                <Image src="/logo.png" width="80" height="50"></Image>
                <ul className="flex flex-row">
                    <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Clássicos</li>
                    <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Especiais</li>
                    <li className="bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Gourmet</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;