import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

async function fetchProfessions(){
  const res = await fetch("http://localhost:3000/api/getProfessions")
  if(!res.ok){
    console.log("res",res)
  }
  return res.json()

}

export default async function Home() {
  const data = await fetchProfessions()
  console.log("data", data)
  return (
   <main className='py-4 px-48'>
    <Link className="bg-emerald-500 text-black  py-2 px-4 rounded-md" href="/dashboard">Go to the dashboard</Link>
    {/* {data.map(val=><p>{val.title}</p>)} */}

   </main>
  )
}
