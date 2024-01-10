"use client"
import Image from 'next/image'
import { useEffect, useState } from "react"

// 1 2 3
// 4 5 6
// 7 8 9

export default function Home() {
  const initialBoard = {
    "1" : " ",
    "2" : " ",
    "3" : " ",
    "4" : " ",
    "5" : " ",
    "6" : " ",
    "7" : " ",
    "8" : " ",
    "9" : " ",
  };
  
  const [ board, setBoard ] = useState(initialBoard);
  const [user, setUser] = useState('O');
  const [message, setMessage] = useState('');

// console.log();

  function togglePlayer() {
    setUser((user) => user === 'O' ? 'X' : 'O');
    console.log(user);
  }

  function isWon() {

    const winingCombos = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
        
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],

      [1, 5, 9],
      [3, 5, 7]
    ]

    for(let i = 0 ; i < winingCombos.length; i++) {
      let [a, b, c] = winingCombos[i];
      console.log(board[a.toString()], board[b.toString()], board[c.toString()]);
      if(board[a.toString()] !== " " && board[a.toString()] === board[b.toString()] && board[a.toString()] === board[c.toString()]) {
        return user === 'O' ? "Player 1 wins 🥳" : "Player 2 wins 🥳";
      }
    }
    
    return null;
  }

  function markPlayer (e) {
    if(board[e.target.id] !== " " || message) return;

    setBoard((board) => {
      return {
        ...board,
        [e.target.id]: user
      }
    });
  }

  const resetGame = () => {
    setBoard(initialBoard);
    setMessage('');
    setUser('O');
  }

  useEffect(() => { 
    const player = isWon();
    console.log(player);
    if(player){
      setMessage(player)
    }
    togglePlayer();
  }, [board] );
  
  return (
    <main className='flex flex-col items-center text-8xl'>
      <h1 className='mt-8'>
        Tic Tac Toe
      </h1>
      <div className='inline-grid grid-rows-3 grid-cols-3 gap-1 text-white mt-[30px]'>
        {
          Object.keys(board).map((boardVal, index) =>{
            return (
              // TODO:
              <div className='bg-slate-400 w-[100px] h-[100px] flex items-center justify-center' onClick={markPlayer} key={index} id={index + 1}>{board[boardVal]}</div>
            )
          })
        }
      </div>
      <h1 className='text-4xl pt-8'>
        {message}
      </h1>

      <button className='text-black bg-white p-3 rounded-2xl text-lg mt-5' onClick={resetGame}>Restart</button>

    </main>
  )
}
