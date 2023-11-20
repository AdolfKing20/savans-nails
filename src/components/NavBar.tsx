import { useState } from 'react';
import Link from 'next/link'
import { IoHomeSharp } from "react-icons/io5";
import { FaCartShopping, FaBagShopping  } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {



  return (
    <nav className='bg-[#7209B7] px-2 w-screen flex justify-around items-center fixed bottom-0 pb-2 rounded-tl-xl rounded-tr-xl'>


        <div className="">
                <Link href='/' className='text-3xl text-slate-100'>
                  <IoHomeSharp/>
                </Link>
        </div>
        <div className=''>
            <Link href='/carrito' className='text-3xl text-slate-100 '>
            <FaCartShopping />
            </Link>
        </div>
        <div className=''>
            <Link href={'/productos'} className='text-3xl text-slate-100 '>
            <FaBagShopping />
            </Link>
        </div>
        <div className=''>
            <Link href={'/sobre-nosotros'} className='text-3xl text-slate-100 '>
            <FaUserCircle />
            </Link>
        </div>
    </nav>
  )
}

export default NavBar