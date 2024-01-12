"use client"

import { useParams } from 'next/navigation'


const Page = () => {

  let { name } = useParams()

  name = name.split("%20").join(" ");

  return (
    <div>Hello {name}</div>
  )
}

export default Page