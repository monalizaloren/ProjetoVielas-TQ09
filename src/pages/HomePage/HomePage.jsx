import React from 'react'
import Header, { Busca, Hashtags } from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Colecoes from '../../components/Colecoes/Colecoes'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <Busca></Busca>
        <Hashtags></Hashtags>
        <Banner></Banner>
        <Colecoes></Colecoes> 
        <Footer></Footer>
    </div>
  )
}

export default HomePage