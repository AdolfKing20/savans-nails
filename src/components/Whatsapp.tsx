import React from 'react'
import Link from 'next/link'
import { IoLogoWhatsapp } from "react-icons/io";

function Whatsapp() {
  return (
    <>
    <Link href={"https://wa.me/message/HWCOQJQDR3BON1"} target='_blank' className='fixed right-2 bottom-[4.5rem] text-white text-3xl p-4 rounded-full bg-[#519854]'>
    <IoLogoWhatsapp />
    </Link>
    </>
  )
}

export default Whatsapp