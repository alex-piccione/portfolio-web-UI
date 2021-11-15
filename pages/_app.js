import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
//import useEffect from "react"
//import "bootstrap/dist/js/bootstrap.min.js"

function MyApp({ Component, pageProps }) {

  // https://www.kindacode.com/article/how-to-correctly-use-bootstrap-5-in-next-js/
  // Next.js render the app both client side and sever side, so "document" and "window" does not exists.
  //useEffect && useEffect(() => {
    //import("bootstrap/dist/js/bootstrap")
  //}, []);

  //react__WEBPACK_IMPORTED_MODULE_3___default(...) is not a function

  return <Component {...pageProps} />
}

export default MyApp
