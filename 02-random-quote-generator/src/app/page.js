"use client"

import randomQuotes from "random-quotes"
import { useState } from "react";
import quoteArray from "./quotes.json"

export default function Home() {

  // Button which display a random quote .
  // 

  const [quote, setQuote] = useState({quote: "Your Quote will apprear here.", author: "Author"});

  const handleGenerateQuote = () => {
    // setQuote(randomQuotes());
    const quote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    setQuote(quote);
    console.log(quote);
  }

  return (
    <main className="flex flex-col m-[200px] justify-center items-center space-y-10">
      <h1 className="text-5xl">Random Code Generator</h1>
      <button onClick={handleGenerateQuote} className="bg-white text-black rounded-2xl p-3" >
        Generate Quote
      </button>
      <div className="text-3xl border-white border p-10 bg-white text-black rounded-lg"> 
        <div className="my-[10px]"> {quote.quote} </div>
        <div className="text-xl text-gray-600 w-full flex flex-row-reverse"> - {quote.author} </div>
      </div>
    </main>
  )
}
