import React from "react"

type DefaultPageProps = {
    title?:string | undefined,
    children: any
}

export function DefaultPage(props:DefaultPageProps) {
    const {title} = props
    return <div className="default-page">
        <div className="link-to-home"><a href="/">&larr; home</a></div>
        {title && <h1 className="title">{title}</h1>}
        <div className="content">
            {props.children}
        </div>            
    </div>
}