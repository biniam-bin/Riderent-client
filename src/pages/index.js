import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout/index.jsx'
import HomePage from '@/Screen/HomePage'


export default function Home() {
  return (
    <>
      <Head>
        <title>Rentride | Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Layout>
        <HomePage/>
     </Layout>
    </>
  )
}
