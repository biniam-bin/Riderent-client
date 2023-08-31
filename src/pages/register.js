import Register from '@/Screen/Register'
import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout/index.jsx'
import { RegisterScreen } from '@/Screen/Register'

function register() {
    return (
        <>
            <Head>
                <title>Riderent | Login</title>
                <meta name="description" content="Login to riderent" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Logo.png" />
            </Head>
            <RegisterScreen></RegisterScreen>

        </>
    )
}

export default register