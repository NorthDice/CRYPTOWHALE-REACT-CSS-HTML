import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Section from './components/Section/Section'
import Title from './components/Title/Title'
import CryptoCurrency from './components/CryptoCurrency/CryptoCurrency'
import Wallets from './components/Wallets/Wallets'
import Blockchain from './components/Blockchain/Blockchain'



function App() {
  return (
    <div className="App">
      <Header/>
      <Title title="Start your journey in CRYPTO"/>
      <CryptoCurrency/>
      <Wallets/>
      <Blockchain/>
    </div>
  )
}

export default App
