import '../styles/globals.css'

import Head from "next/head";
import Router from "next/router";
import App from "next/app";
import { Provider } from "next-auth/client"
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import { PersistGate } from "redux-persist/integration/react";

import { Loader, MaterialThemeProvider } from "../app/layouts";

import { persistor, wrapper } from "./../redux/store";

import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/flaticon/flaticon.css";
import "../styles/flaticon2/flaticon.css";


 //Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

class MyApp extends App {

  render() {
      const {Component, pageProps} = this.props;
      return (
        <>
          <Head>
            <title>Klasroom</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </Head>
          <Provider session={pageProps.session} 
            options={{ 
              clientMaxAge: 60 * 60, // Re-fetch session if cache is older than 1 hours
              keepAlive: 60 * 60 // Send keepAlive message every hour
            }}
          >
            {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
            <PersistGate persistor={persistor} loading={<Loader />}>
              {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
              {/* <React.Suspense fallback={<LayoutSplashScreen />}> */}
                <MaterialThemeProvider>
                  {/* Provide `react-intl` context synchronized with Redux state.  */}
                    <Component {...pageProps} />
                </MaterialThemeProvider>
              {/* </React.Suspense> */}
            </PersistGate>
          </Provider>
        </>
      );
  }

}

export default wrapper.withRedux(MyApp);
