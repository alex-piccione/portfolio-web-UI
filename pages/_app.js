import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/globals.css'
import {NotificationProvider} from '../containers/Notifications'
import global from "../CSS/global.module.sass"

function MyApp({ Component, pageProps }) {

  //console.log("colors.alternative:", colors.alternative)
  console.log("global.html:", global.html_color)
  console.log("global.html:", global.html_font_size)

  return <>

    <NotificationProvider >
    <style global jsx>{`
        html, body {
          color: ${global.html_color};
          font-size: ${global.html_font_size};
        }
      `}</style>
      <Component {...pageProps} />
    </NotificationProvider>
  </>
}

export default MyApp