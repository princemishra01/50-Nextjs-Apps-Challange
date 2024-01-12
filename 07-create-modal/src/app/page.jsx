"use client"

import { useState } from "react";
import myImage from "../../public/image.jpg"
import Image from "next/image"
import Link from 'next/link'

export default function Home() {

  const [displayModal, setDisplayModal] = useState(false);

  const toggleDisplayModel = () => setDisplayModal(displayModal => !displayModal)

  const [name , setName] = useState("")

  return (
    <main className={`flex justify-center items-center h-screen ${ displayModal && "bg-[#666565]" }`}>
      {displayModal ?
        <div className="flex flex-col bg-white w-1/3 p-6 text-black gap-6 rounded-lg">
          <div className="flex justify-between">
            <Image className="w-12 rounded-full " src={myImage}></Image>
            <span className="rounded-full text-white text-xl h-[30px] w-[30px] bg-blue-400 pl-[9px]" onClick={toggleDisplayModel}>x</span>
          </div>
          <div className="text-4xl font-bold">Stay in Touch</div>
          <div onClick={() => {console.log(namehere.current.val)}} className="text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus corrupti repellat vero fugit tenetur,
            soluta magni accusamus earum in natus? Molestias, excepturi amet. Ratione dignissimos 
            vitae eum dolorum iste rerum.
          </div>
          <input type="text" onChange={(e) => (setName(e.target.value))} className="w-full border-2 p-3 rounded-lg "/>
          <Link href = {`/${name}`} >
            <button className="w-full text-white bg-black p-3">Say Hello</button>
          </Link>
        </div>
      : <button className="text-black bg-slate-100 w-1/5 rounded-3xl p-3" onClick={toggleDisplayModel} >Get a Modal</button>}
    </main>
  )
}
