import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


export const Main = (props) => {

    return (
        <main className={styles.main}>
          <div className={styles.description}>
            <p>
                Get started by editing&nbsp;
                <code className={styles.code}>src/pages/index.tsx</code>
            </p>
            <div>
              <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                By{' '}
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
              </Link>
            </div>
          </div>

          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
            <div className={styles.thirteen}>
              <Image
                src="/thirteen.svg"
                alt="13"
                width={40}
                height={31}
                priority
              />
            </div>
          </div>

        <div className={styles.grid}>
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={props.inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={props.inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>

          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={props.inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={props.inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </Link>

          <Link
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={props.inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={props.inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={props.inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={props.inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </Link>
        </div>
      </main>
    );
}