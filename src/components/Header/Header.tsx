import Link from 'next/link'

import styles from './Header.module.css'

const pages = ['About']

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          Guilherme <span className={styles.header__logoBold}>Dinardi</span>
        </Link>

        <div>
          {pages.map((page) => {
            const pagePath = page.toLowerCase()
            return (
              <Link key={page} href={pagePath} className={styles.nav__link}>
                {page}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

export default Header
