import Link from 'next/link'
import styles from '../../styles.module.css'


function Home() {
  return (
    <ul>
      <li>
        <Link href="/">
          <a className={styles.hello}>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
    </ul>
  )
}

export default Home