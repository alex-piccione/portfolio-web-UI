import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import React from 'react'
import BalanceTable from '../components/BalanceTable'
import NotificationBarContainer from '../containers/NotificationBarContainer'
import styles from '../CSS/Home.module.css'

export default function Home() {

  return (
    <NotificationBarContainer>{ ({showMessage}) =>
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Your Portfolio!
        </h1>

        <BalanceTable />

        <div className={styles.grid}>
          
          <Link href="/currencies">
            <a className={styles.card}> 
            <h2>Currencies &rarr;</h2>
            <p>Fiat and Crypto currencies.</p>
            </a>
          </Link>

          <Link href="/companies">
            <a className={styles.card}> 
              <h2>Companies &rarr;</h2>
              <p>Banks, Exchanges and other companies where you can store funds.</p>
            </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  }</NotificationBarContainer>
  )
}
