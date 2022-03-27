import 'bootstrap/dist/css/bootstrap.min.css'
import '../CSS/globals.css'
import NotificationBarContainer from '../containers/NotificationBarContainer'
import { AppContext } from 'next/app'
import {NotifierContext} from '../containers/Notifier'
import NotificationBar from '../components/NotificationBar'

function MyApp({ Component, pageProps }) {

  return <>
    <Component {...pageProps} />
    
  </>

  /*return <AppContext.Provider value={{
      notifier: Notifier,      
    }}>
  <NotificationBarContainer>{ ({showMessage}) =>
  <>    
    <Component {...pageProps} />
    <NotificationBar ></NotificationBar>
    </>
  }</NotificationBarContainer>
  </AppContext.Provider>*/
}

export default MyApp