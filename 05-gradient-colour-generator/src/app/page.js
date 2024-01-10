"use client"

import arrowIcon from '../../public/arrow.png';
import copyIcon from '../../public/copy.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useRef } from 'react';

export default function Home() {

  const [angle , setAngle] = useState("0");
  const [color1 , setColor1] = useState('#000000');
  const [color2 , setColor2] = useState('#000000');

  const mymap = {
    "-90": "-90deg",
    "-45": "-45deg",
    "0": "0deg",
    "45": "45deg",
  }

  const csss = useRef(null);

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(csss.current.innerText);
  }

  return (
    <main className='bg-white text-black flex flex-col items-center gap-4 pt-12 h-screen'>
      <h1 className='text-6xl'>Gradient Colour Generator</h1>
      <div className='flex gap-x-3'>
        <Image src={arrowIcon} id='-90' onClick={() => setAngle("-90")} className='h-10 w-10 rotate-[-90deg]' alt="arrow" />
        <Image src={arrowIcon} id='-45' onClick={() => setAngle("-45")} className='h-10 w-10 rotate-[-45deg]' alt="arrow" />
        <Image src={arrowIcon} id='0' onClick={() => setAngle("0")} className='h-10 w-10' alt="arrow" />
        <Image src={arrowIcon} id='45' onClick={() => setAngle("45")} className='h-10 w-10 rotate-[45deg]' alt="arrow" />
      </div>
      <div className='flex gap-4'>
        <input type='color' id='color1' onChange={(e) => setColor1(e.target.value)} className='h-10 w-10' />
        <input type='color' id='color2' onChange={(e) => setColor2(e.target.value)} className='h-10 w-10' />
      </div>
      <div className='flex p-2 bg-gray-400 rounded-lg'>
        <div ref={csss} className='text-2xl p-2 pr-4'>{`background-image: linear-gradient(${mymap[angle]} , ${color1} , ${color2}});`}</div>
        <Image src={copyIcon} onClick={copyToClipBoard} className='h-10 w-10 my-1' alt="gradient" />
      </div>
    </main>
  )
}
