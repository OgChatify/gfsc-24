import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Our Incredible Classmates & Teachers: Capturing Unforgettable Moments on the Journey to the End of School Life."
          />
          <meta property="og:site_name" content="gfsc-24.vercel.app" />
          <meta
            property="og:description"
            content="Our Incredible Classmates & Teachers: Capturing Unforgettable Moments on the Journey to the End of School Life."
          />
          <meta property="og:title" content="GFSC-24 Batch" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="GFSC-24 Batch" />
          <meta
            name="twitter:description"
            content="Our Incredible Classmates & Teachers: Capturing Unforgettable Moments on the Journey to the End of School Life."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
