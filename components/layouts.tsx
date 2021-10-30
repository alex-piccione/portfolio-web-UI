import { prependOnceListener } from "process"
import React from "react"

class DefaultPageLayout extends React.Component {
    render() {
        return <></>
    }
}

export default DefaultPageLayout

type DefaultPageProps = {
    title:string | undefined
}

export function DefaultPage(props) {
    const {title} = props
    return <div className="default-page">
        {title && <h1 className="title">{title}</h1>}
        <div className="content">
            {props.children}
        </div>            
    </div>
}