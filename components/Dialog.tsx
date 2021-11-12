import { FC } from "react";
import { render } from "react-dom";

// https://getbootstrap.com/docs/5.0/components/modal/

interface Props {
  title: string
}

export const Dialog:FC<Props> = (props) => {
  let {title, children} = props

  //render() {
    return <div>
      {title}
      <div>{children}</div>
    </div>
  //}
}