import Link from 'next/link'
import Head from 'next/head'

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <img src="/vercel.svg" alt="my image" />
    </>
  )
}