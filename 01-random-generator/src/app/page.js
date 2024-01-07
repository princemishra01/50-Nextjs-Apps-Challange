"use client"

import Image from 'next/image'
import { useState } from 'react';

// length of the pw slider -> 8 - 50
// default -> only a to z
// checkbox -> include numbers
// checkbox -> include special characters
// button -> generate password


export default function Home() {
  
  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState('');

  
  function changeLength(e) {
    console.log(e.target.value);
    setLength(e.target.value);
  }

  return (
    <main className='flex flex-col'>
      <h1>Random Password Generator</h1>

      

      <label htmlFor="length"> Select the length of the password : {length} </label>

      <input
        type="range"
        min="8"
        max="50"
        step="1"
        onInput={changeLength}
        onChange={changeLength}
      />

      <label htmlFor="numbers">Include Numbers</label>
      <input type="checkbox" id="numbers" name="number"/>

      <label htmlFor="specialchar">Include Special Characters</label>
      <input type="checkbox" id="specialchar" name="specialchar"/>


      <button>Generate Password</button>
      
      <div>Generated Password : {password}</div>

    </main>
  )
}


