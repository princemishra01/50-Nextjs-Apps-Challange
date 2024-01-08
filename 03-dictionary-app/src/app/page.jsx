"use client"

import { useState } from "react"
import speakerIcon from "./assets/speaker.svg"
import Image from "next/image";



export default function Home() {

  // TODO: Add page content

  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');

  async function handleSearchWord() {
    try{
      let result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
      result = await result.json();
      setMeaning(result);
    } catch {
      console.log('error');
    }
  }

  async function handlePlayAudio() {
    let audio = new Audio(meaning[0].phonetics[0].audio);
    audio.play();
  }

  return (
    <main className="flex flex-col w-2/3 m-auto items-center">
      <h1 className="text-5xl flex justify-center my-[40px]">
        <span>
          Dictionary App 
        </span>
      </h1>

      <input type="text" className="p-[10px] text-black w-1/2 rounded-lg" onChange={e => setWord(e.target.value)}/>

      <button onClick={handleSearchWord} className="bg-white w-fit py-3 px-6 text-xl rounded-full mt-[30px] text-black inline-block">Search</button>

      <h1 className="self-start text-3xl mb-2">
        
        {
          meaning.length > 0 
          &&
          meaning[0].word
        }
        { 
          meaning.length > 0 
          && 
          <Image onClick={handlePlayAudio} src={speakerIcon} alt="Speaker Icon" className="text-[10px] bg-white rounded-full p-1 inline-block ml-4 cursor-pointer"/>
        }
        </h1>

      {
          meaning.length > 0
          &&
          meaning[0].meanings 
          && 
          meaning[0].meanings.map((wordArray, index) => {
            return (
              <div className="self-start mb-5">
                <div className="font-bold"> 
                  {wordArray.partOfSpeech}
                </div>
                <div>
                  {
                    wordArray.definitions.map((def, index) => {
                      return (
                        <div className="text-lg border-b border-[#636363] p-3">
                          <div className="">
                            {def.definition}
                          </div>
                          {
                            def.example && 
                            <div className="italic">
                              Example : {def.example}
                            </div>
                          }
                        </div>
                      )
                    })
                  }
               </div>
              </div>
            )
          })
      }

      {/* [
        ------------
        // noun
        def1
        - example sentence 1
        def2
        - example sentence 2
        ------------
        // verb
        def1
        - example sentence 1
        def2
        - example sentence 2
        ------------
      ] */}
      
    </main>
  )
}
