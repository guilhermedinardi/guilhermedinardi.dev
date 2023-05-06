import Head from 'next/head'
import Image from 'next/image'

import CareerItem from '../components/CareerItem/CareerItem'
import Main from '../layout/Main'
import items from '../data/about'
import styles from '../styles/About.module.css'

function About(props) {
  const { title, description } = props

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://guilhermedinardi.dev/about/" />
      </Head>

      <section className={styles.section__about}>
        <div className={styles.section__about__image}>
          <Image
            src="https://github.com/guilhermedinardi.png"
            height={250}
            width={250}
            alt="Foto de perfil"
          />
        </div>
        <div>
          <h1 className={`${styles.section__about__title} gradient`}>
            I'm thrilled to welcome you here!
          </h1>
          <p>
            Pleasure. I'm Guilherme Dinardi,
            Frontend Developer from Brazil.
            
          </p>
          <p>
            As a specialized front-end developer in ReactJS, I possess 
            a comprehensive set of UI/UX skills to craft top-notch user experiences.
            With a wealth of experience in web interface development, I collaborate 
            closely with product teams and designers to ensure that the interfaces 
            I create are visually captivating, intuitive, and high-performing. 
            I take pride in crafting highly responsive and interactive projects 
            that deliver exceptional user experiences across both desktop 
            and mobile devices.
          </p>
          <p>
            You can find examples of my work by visiting my profiles on both <a href="https://github.com/guilhermedinardi">GitHub </a>
            and <a href="https://behance.net/guilherdinardito">Behance.</a> I am constantly seeking to expand my knowledge and remain 
            up-to-date with the latest industry standards and practices, so I can 
            deliver innovative and high-quality solutions to my clients and end-users 
            alike.
          </p>
        </div>
      </section>

      <section className={styles.section__career}>
        <h1>A brief overview of my career</h1>
        {items.map((item) => (
          <CareerItem key={item.occupation} {...item} />
        ))}
      </section>
    </div>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       title: 'About | Guilherme Dinardi',
//       description: 'A little more about Guilherme Dinardi',
//     },
//   }


About.Layout = Main

export default About
