"use client"

import Image from 'next/image'
import { useState } from 'react';

// length of the pw slider -> 8 - 50
// default -> only a to z
// checkbox -> include numbers
// checkbox -> include special characters
// button -> generate password


export default function Home() {

  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const nums = '1234567890';
  const special = '!@#$%^&*()_+';

  
  const [length, setLength] = useState(10);
  const [numbers, setNumbers] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState('');
  
  
  function changeLength(e) {
    // console.log(e.target.value);
    setLength(e.target.value);
    generatePassword();
  }
  
  
  const createPassword = (chars) => {
    let password = '';
    for(let i = 0 ; i < length ; i++){
      const RandomIndex = Math.floor(Math.random() * chars.length);
      password += chars[RandomIndex];
    }
    return password;
  }

  function generatePassword() {
    let chars = alphabets;
    if (numbers) chars += nums;
    if (specialChar) chars += special;
    setPassword(createPassword(chars));
    console.log(length, numbers, specialChar);
  }
  
  async function toggleNum () {
      await setNumbers(numbers => !numbers);
      console.log(numbers);
      generatePassword();
  }
  
  async function toggleSpecialChars() {
      await setSpecialChar(specialChar => !specialChar);
      generatePassword();
  }


  useState(() => {
    generatePassword();
  })
  
  
  return (
    <main className='flex flex-col my-[100px] mx-[400px] space-y-[10px] text-2xl'>
      <h1 className='text-5xl'>Random Password Generator</h1>

      <div>
        <label htmlFor="length"> Select the length of the password : {length} </label>
        <input
          className='w-[300px]'
          type="range"
          min="8"
          max="50"
          step="1"
          onInput={changeLength}
          onChange={changeLength}
        />
      </div>

      <div>
        <label htmlFor="numbers">Include Numbers</label>
        <input className='mx-[10px]' type="checkbox" id="numbers" name="number"  onChange={toggleNum} />
      </div>

      <div>
        <label htmlFor="specialchar">Include Special Characters</label>
        <input className='mx-[10px]' type="checkbox" id="specialchar" name="specialchar" onChange={toggleSpecialChars} />
      </div>

      <button className='w-fit bg-white text-black rounded-full p-[15px]' onClick={generatePassword}>Generate Password</button>

      <div>Generated Password : {password} </div>

    </main>
  )
}


