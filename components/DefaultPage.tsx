import React from "react"
import Link from "next/link"
import styles from "../CSS/styles.module.sass"

type DefaultPageProps = {
    title?:string | undefined,
    description?:string | undefined,
    children: any
}

export function DefaultPage(props:DefaultPageProps) {
    const {title, description} = props
    return <div className={styles.page_container}>
        <div className={styles.link_to_home}>
            <Link href="/"><a>&larr; home</a></Link>
        </div>
        {title && <h1 className={styles.page_title}>{title}</h1>}
        {description && <div className={styles.page_description}>{description}</div>}
        <div className="content">
            {props.children}
        </div>            
    </div>
}