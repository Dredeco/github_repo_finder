import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import Input from '@/components/Input'
import Button from '@/components/Button'
import ItemRepo from '@/components/ItemRepo'
import { api } from './api/api'

import styles from '@/styles/Home.module.css'
import styled from 'styled-components'
import gitLogo from '../../public/github.png'

const inter = Inter({ subsets: ['latin'] })

const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 20px 0 0 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    h2 {
      color: #fff;
      margin-top: .2rem;
    }
`

export default function Home() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    let { data } = await api.get(`users/${currentRepo}/repos`)
    .then((res) => (res))
    .catch((err) => {
      alert('Usuário não encontrado')
      return ''
    })
    
    setRepos(data);
    setCurrentRepo('')
    return
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    // utilizar filter.
  }


  return (
    <>
      <Head>
        <title>Github Repository Finder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Container>
          <Image src={gitLogo} width={72} height={72} alt="github logo"/>
          <h2>Github Repository Finder</h2>
          <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
          <Button onClick={handleSearchRepo}/>
          {repos?.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
        </Container>
      </main>
    </>
  )
}
