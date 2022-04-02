import React from "react"
import Link from "next/link"
//import styles from "../CSS/styles.module.sass"
import pageStyles from "../CSS/page.module.sass"

type DefaultPageProps = {
    title?:string | undefined,
    description?:string | undefined,
    children: any
}

export function DefaultPage(props:DefaultPageProps) {
    const {title, description} = props
    return <div className={pageStyles.container}>
        <div className={pageStyles.link_to_home}>
            <Link href="/"><a>&larr; home</a></Link>
        </div>
        {title && <h1 className={pageStyles.title}>{title}</h1>}
        {description && <div className={pageStyles.description}>{description}</div>}
        <div className="content">
            {props.children}
        </div>            
    </div>
}