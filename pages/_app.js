import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/globals.css'
import {NotificationProvider} from '../containers/Notifications'
import {BaseCurrencyProvider} from '../containers/BaseCurrencyContainer'
import global from "../CSS/global.module.sass"

function MyApp({ Component, pageProps }) {

  BaseCurrencyProvider

  return <>
    <NotificationProvider>
    <BaseCurrencyProvider>
      <style global jsx>{`
        html, body {
          min-height: 100vh;
          color: ${global.html_color};
          font-size: ${global.html_font_size};
        }`}
      </style>
      <Component {...pageProps} />
    </BaseCurrencyProvider>
    </NotificationProvider>
  </>
}

export default MyApp