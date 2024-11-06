import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <nav className="text-orange-950 p-4 flex flex-row items-center">
                <Image src="/logo.png" width="80" height="50"></Image>
                <ul className="flex flex-row">
                    <Link href='/' legacyBehavior passHref>
                        <li className="cursor-pointer bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Home</li> 
                    </Link>
                    <Link href='/classic' legacyBehavior passHref>
                        <li className="cursor-pointer bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Clássicos</li>
                    </Link>
                    <Link href='' legacyBehaviour passHref>
                        <li className="cursor-pointer bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Especiais</li>
                    </Link>
                    <Link href='/gourmet' legacyBehavior passHref>
                        <li className="cursor-pointer bg-slate-100 text-orange-950 rounded-[10px] p-2 h-10 w-30 hover:bg-orange-950 hover:text-orange-950 text-opacity-60 hover:font-bold hover:bg-opacity-10">Gourmet</li>
                    </Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;