import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import BaseCurrencySelector from "./BaseCurrencySelector"
import styles from "../CSS/styles.module.sass"
import pageStyles from "../CSS/page.module.sass"
import Styles from "../components/styles"

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
          <div className={pageStyles.content}>  
            {props.children}        
          </div>
        </main>

        <footer className={pageStyles.footer} style={{display: "none"}}>
          Created by&nbsp;<strong>Alessandro Piccione</strong>
          {" - "}
          Running on{' '}<span className={pageStyles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
}