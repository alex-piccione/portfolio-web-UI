import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import React from 'react'
import BalanceTable from '../components/tables/BalanceTable'
import homeStyles from '../CSS/Home.module.sass'
import { DefaultPage } from '../components/DefaultPage'
import Panel from '../components/Panel'

export default function Home() {

  return <>
    <Head>
      <title>Portfolio</title>
      <meta name="description" content="Manage your portfolio of fiat and crypto currencies" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <DefaultPage title="Your Portfolio!">
      <main className={homeStyles.main}>
        <Panel>
          <BalanceTable />
        </Panel>
        <div className={homeStyles.grid}>          
          <Link href="/currencies">
            <a className={homeStyles.card}> 
              <h2>Currencies &rarr;</h2>
              <p>Fiat and Crypto currencies.</p>
            </a>
          </Link>
          <Link href="/companies">
            <a className={homeStyles.card}> 
              <h2>Companies &rarr;</h2>
              <p>Banks, Exchanges and other companies where you can store funds.</p>
            </a>
          </Link>
          <Link href="/settings">
            <a className={homeStyles.card}> 
              <h2>Settings &rarr;</h2>
              <p>Application and user settings.</p>
            </a>
          </Link>
        </div>
    </main>
  </DefaultPage>
  </>
}
