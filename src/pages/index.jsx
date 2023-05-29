import Head from 'next/head'

import Main from '../layout/Main'
import styles from '../styles/Home.module.css'

function HomePage(props) {
  const { title, description } = props

  return (
    <div className={styles.home__wrapper}>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="guilhermedinardi" property="og:url" />
      </Head>

      <h1 className={styles.home__title}>Guilherme Dinardi</h1>
      <p className={styles.home__description}>
        Frontend Developer & Freelancer
      </p>
    </div>
  )
}

HomePage.Layout = Main

export default HomePage
