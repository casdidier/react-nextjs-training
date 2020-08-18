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
          <a>Blog page</a>
        </Link>
      </h2>
    </>
  )
}