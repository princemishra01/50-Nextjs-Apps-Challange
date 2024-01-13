"use client"

import { useEffect, useState } from "react"
export default function Home() {
  
  const allList = [
    {
      name: 'clothing',
      content: 'T-shirt',
      color: 'red'
    },
    {
      name: 'clothing',
      content: 'Jacket',
      color: 'red'
    },
    {
      name: 'decor',
      content: 'Fan',
      color: 'blue'
    },
    {
      name: 'bags',
      content: 'American Tourister',
      color: 'green'
    },
    {
      name: 'decor',
      content: 'Light',
      color: 'blue'
    },
    {
      name: 'decor',
      content: 'Tv',
      color: 'blue'
    },
    {
      name: 'bags',
      content: 'Safari',
      color: 'green'
    },
    {
      name: 'clothing',
      content: 'Jeans',
      color: 'red'
    },
    {
      name: 'bags',
      content: 'Skybags',
      color: 'green'
    },
  ];

  const buttonList = [
    {
      name: 'all',
      content: 'ALL',
      color: 'yellow'
    },
    {
      name: 'clothing',
      content: 'CLOTHING',
      color: 'red'
    },
    {
      name: 'decor',
      content: 'DECOR',
      color: 'blue'
    },
    {
      name: 'bags',
      content: 'BAGS',
      color: 'green'
    },
  ]

  const [currentTab, setCurrentTab] = useState('all');
  const [currentList , setCurrentList] = useState(allList);

  useEffect( () => {
      setCurrentList(allList.filter(item => item.name === currentTab || currentTab == "all"))
  },[currentTab])

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-16">
      <div className="flex gap-16">
          {
            buttonList.map((item, index) => {
              return  <button 
                        className={`px-6 py-4 rounded-lg text-black font-bold bg-${item.color}-400`} 
                        key={item.index} 
                        onClick={()=>{
                            setCurrentTab(item.name);
                        }}>{item.content}
                      </button>
            })
          }
      </div>
      <div className="grid grid-cols-3 gap-10 bg-gray-200 p-10 rounded-lg mt-10">
        {
          currentList.map((item, index) => {
            return <div 
                      key={item.index} 
                      className={`bg-${item.color}-400 py-10 px-10 text-2xl rounded-lg`}
                    >
                      {item.content}
                    </div>
          })
        }
      </div>
    </main>
  )
}