"use client"
import { useState } from "react";
import qrcode from 'qrcode';
import Image from "next/image";

export default function Home() {

  // text -> Qr Code;
  // image if possible

  const [text, setText] = useState('');
  const [qrUrl, setQrUrl] = useState('');
  // const [image, setImage] = useState('')

  const handleClick = () => {
    console.log('clicked');
    qrcode.toDataURL(text, function (err, url) {
      console.log(url)
      setQrUrl(url);
    })
  }

  return (
    <main className="flex flex-col items-center gap-8 pt-12">
      <h1 className="text-4xl font-bold">QR CODE GENERATOR</h1>
      <label htmlFor="" className="text-2xl">Enter the text you need to generate QR code for ?</label>
      <input className="text-black p-4 w-1/2 rounded-lg" type="text" onChange={e => setText(e.target.value)}/>
      <button onClick={handleClick} className="rounded-lg text-black bg-white p-4">Generate</button>
      <div>
        {qrUrl && <Image width={300} height={300} src={qrUrl} alt="" />}
      </div>
    </main> 
  )
}