
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="theme-color" content="#36d1dc"/>
            <meta name="msapplication-navbutton-color" content="#36d1dc"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#36d1dc"/>
            <meta name="mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="google-site-verification" content="T69Ao_T0Ps8pkRbluKzW179qvd_aCsWISCApeSsIhRU" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
            <link rel="icon" sizes="192x192" href="/favicon.ico" />
            <link rel="icon" sizes="128x128" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800|Open+Sans:300,400,600,700,800&display=swap" rel="stylesheet"></link>
          </Head>
          <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument