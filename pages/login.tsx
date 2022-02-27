import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Authenticate from '../components/authenticate'
import Footer from '../components/Footer';

export interface ILoginProps {
}

export default function Login (props: ILoginProps) {
  const [width, chWidth] = useState(0);
  
  useEffect(()=>{
    // To risize login image on window risizing
    chWidth(window.innerWidth/2.4);
    function handleResize() {
      chWidth(window.innerWidth/2.4);
    }
    window.addEventListener('resize', handleResize);
  }, [chWidth]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Momentum | PelotonU</title>
        <meta name="Momentum by PelotonU" content="A Hybrid College management platform made by students, for students." />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#f7f7f6" />
        <meta name="msapplication-TileColor" content="#f7f7f6" />
        <meta name="theme-color" content="#f7f7f6"></meta>
      </Head>

      <main className={styles.main}>
        <span className={styles.logoMomentum}>
          <Image src="/momentum.png" alt="Momentum Logo" width={250} height={75}/>
        </span>


        <div className={styles.content}>
          <span className={styles.element1}>
            <Image src="/element-1.png" alt="Avianne, holding a laptop, laughing."  width={width} height={width} />
          </span>
        </div>
        <div className={styles.backdrop}>
          <span className={styles.space}/>
          <div className={styles.signInContainer}>
            <Authenticate />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
