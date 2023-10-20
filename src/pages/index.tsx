import Layout from '@/components/Layout'
import { Inter } from 'next/font/google'
import {pokemon} from "../mocks/pokemon.json"
import {Products} from "@/components/Products/index"
//LIBS
import { useState, useContext } from 'react'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


    return (
    <Layout>
      <div className='active:bg-green-200 flex flex-col  gap-[64px] items-center justify-center pt-[64px]'>
      <Link href="/playground" className=" rounded-xl max-w-fit bg-primary-main hover:border-green-500 border-2 border-primary-main hover:text-green-500 active:bg-pink-700 px-[12px] py-[8px]">Playground</Link>
      <Products pokemon={pokemon}/>
      </div>
    </Layout>
  )
}
