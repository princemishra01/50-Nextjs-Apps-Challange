"use client"
import Image from 'next/image'
import { useState } from "react"

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
        return user === 'O' ? "Player 1 wins" : "Player 2 wins";
      }
    }
    
    return null;
  }

  async function markPlayer (e) {
    if(board[e.target.id] !== " ") return;

    await setBoard((board) => {
      return {
        ...board,
        [e.target.id]: user
      }
    });

    const player = isWon();
    console.log(player);

    if(player){
      setMessage(player)
    }
    
    togglePlayer();
  }
  
  return (
    <main>
      <h1>
        Tic Tac Toe
      </h1>
      <div className='grid grid-rows-3 grid-cols-3 text-white'>
        {
          Object.keys(board).map((boardVal, index) =>{
            return (
              // TODO:
              <div className='bg-slate-400' onClick={markPlayer} key={index} id={index + 1}>{board[boardVal] + "+"}</div>
            )
          })
        }
      </div>
      <h1>
        {message}
      </h1>

    </main>
  )
}
