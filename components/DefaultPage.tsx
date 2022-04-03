import React from "react"
import Link from "next/link"
import styles from "../CSS/styles.module.sass"
import pageStyles from "../CSS/page.module.sass"
import { useRouter } from "next/router"
import BaseCurrencySelector from "./BaseCurrencySelector"

type DefaultPageProps = {
    title?:string | undefined,
    description?:string | undefined,
    children: any
}

export function DefaultPage(props:DefaultPageProps) {
    const {title, description} = props
    const router = useRouter()
    const isHome = router.pathname === "/"

    return <div className={pageStyles.container}>

        {!isHome && <div className={pageStyles.link_to_home}>
            <Link href="/"><a>&larr; home</a></Link>
        </div> }
        {isHome && <div className={pageStyles.basecurrency_selector}>
            <BaseCurrencySelector />
        </div> }

        {title && <h1 className={pageStyles.title}>{title}</h1>}
        {description && <div className={pageStyles.description}>{description}</div>}

        <main>
            <div className="content">
                {props.children}
            </div>            
        </main>

        <footer className={styles.footer} style={{display: "none"}}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
}