import Login from '@/Screen/Login'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout/index.jsx'

function login() {
    return (
        <>
            <Head>
                <title>Riderent | Login</title>
                <meta name="description" content="Login to riderent" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Logo.png" />
            </Head>
            <Layout>
                d
                <Login />
            </Layout>
        </>
    )
}

export default login