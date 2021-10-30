import React from "react"
import Link from "next/link"

type DefaultPageProps = {
    title?:string | undefined,
    children: any
}

export function DefaultPage(props:DefaultPageProps) {
    const {title} = props
    return <div className="default-page">
        <div className="link-to-home">
            <Link href="/"><a>&larr; home</a></Link>
        </div>
        {title && <h1 className="title">{title}</h1>}
        <div className="content">
            {props.children}
        </div>            
    </div>
}