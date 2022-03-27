import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/globals.css'
import {NotificationProvider} from '../containers/Notifications'

function MyApp({ Component, pageProps }) {

  return <>
    <NotificationProvider >
      <Component {...pageProps} />
    </NotificationProvider>
  </>
}

export default MyApp