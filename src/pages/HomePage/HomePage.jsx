import React from 'react'
import "./HomePage.css"
import Header, { Busca, Hashtags } from '../../components/Header/Header'
import Colecoes from '../../components/Colecoes/Colecoes'
import Banner from '../../components/Banner/Banner'
import Links from '../../components/Links/Links'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <main>
          <Busca></Busca>
          <Hashtags></Hashtags>
          <Banner></Banner>
        </main>
        <Colecoes></Colecoes>
        <Footer></Footer>
    </div>
  )
}

export default HomePage