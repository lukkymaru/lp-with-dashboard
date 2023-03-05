import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { Anchor, Breadcrumbs, Button, Container, Navbar, Stack, Tooltip } from '@mantine/core'
import { Main } from 'src/components/Main';
import { ClassNames } from '@emotion/react'
import { Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { AnchorHTMLAttributes, FC, useCallback } from 'react'
import { HomeEco } from 'tabler-icons-react'

import {} from 'tabler-icons-react';

const inter = Inter({ subsets: ['latin'] })

type PageProps = {
};

export default function Home(): FC<PageProps> {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';

  const items = [
    { title: 'index', href: '/' },
    { title: 'dashboard', href: '/dashboard' },
    { title: 'edit', href: '#' },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative">
        <div className="absolute left-3 top-8">
          <Burger className={styles.burger} opened={opened} onClick={toggle} aria-label={label} size={30} />
        </div>
      </div>
      <header className={styles.header}>

        <Link href="/" className={styles.link}>
          index
        </Link>
        <Link href="/dashboard" className={styles.link}>
          dashboard
        </Link>

      </header>

      <div className="grid grid-cols-[250px_minmax(200px,_1fr)]">
        <div className="row-span-1">            
          <Navbar height={750}>
            <Navbar.Section>
            {[
              {label: "ホーム", href: "*", Icon: "HomeEco"},
              {label: "Dash Board", href: "*",Icon: "LayoutBoardSplit"},
              {label: "設定", href: "*",Icon: "HomeEco"},
            ].map(({label, href, icon}) => {
              return (
                  <div>
                    <HomeEco color="black" />
                    <span>{label}</span>
                  </div>
                );
            }
            )}

            </Navbar.Section>

            {/* 閉じる */}
            <Navbar.Section>
            </Navbar.Section>
          </Navbar>
        </div>
        <div className="row-span-1">
          <Breadcrumbs>{items}</Breadcrumbs>
          <Breadcrumbs separator="→" mt="xs">{items}</Breadcrumbs>

          <div>containerテスト</div>
          {/*デフォルトsize*/}
          <Container className="bg-red-900">
            <div>111</div>
          </Container>
          <Container className="bg-red-700" size="xs">
            <div>122</div>
          </Container>
          <Container className="bg-red-500" size="xs">
            <div>133</div>
            <Container className="bg-red-500" size="30rem">
              <div>1333</div>
            </Container>
          </Container>
          <Container className="bg-red-300" size="20rem">
            <div>144</div>
          </Container>
          <Container className="bg-red-300" size={0}>
            <div>size={0}</div>
          </Container>
          <Container className="bg-red-300" size="20rem" size={0}>
            <div>size="20rem" size=0</div>
          </Container>
          <Container className="bg-red-300" size="20rem" px={50}>
            <div>144</div>
          </Container>
        </div>

      </div>
    </>
  )
}