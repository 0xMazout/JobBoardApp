import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import CardProject from '../components/Cards/CardProject'
import SearchBar from '../components/searchBar'
import {IProject} from '../interfaces/iProject'
import CardsManager from '../components/Cards/CardsManager'
import MainLayout from '../components/MainLayout'
import { ReactElement } from 'react'
// import type { ComponentWithPageLayout } from './_app'


function Home ()  {

  return (
    <div className={styles.container}>
      <Head>
        <title>Booking Event App</title>
        <meta name="description" content="Book your Event here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SearchBar>

      </SearchBar>

      <CardsManager>
        
      </CardsManager>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>CryptoBuildZone</a>
        </h1>

      <section className={styles.SectionIndexDashboard}>
        <h3 className={styles.IntroDashBoardText}>
          Find your next project who can change the world 
        </h3>
      </section>
      <p>

      </p>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


Home.PageLayout = MainLayout;

export default Home
