import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/globals.css'
import {NotificationProvider} from '../containers/Notifications'
import styles from "../CSS/styles.module.sass"

function MyApp({ Component, pageProps }) {

  return <>

    <NotificationProvider >
    <style global jsx>{`
        html, body {
          ${styles.html_color};
        }
      `}</style>
      <Component {...pageProps} />
    </NotificationProvider>
  </>
}

export default MyApp