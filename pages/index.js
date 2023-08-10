import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Login from '@/Components/LoginComp'
import Signup from '@/Components/Signup'
import Pricing from '@/Components/Pricing'
import CardInfo from '@/Components/CardInfo'
import State from '@/Components/State'

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Signup SignupDetailHandler={props.SignupDetailHandler} SignupDetails={props.SignupDetails} SignupHandler={props.SignupHandler} />
      </main>
    </>
  )
}