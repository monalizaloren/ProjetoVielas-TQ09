import React from 'react'
import Header, { Busca, Hashtags } from '../../components/Header/Header'
import Colecoes from '../../components/Colecoes/Colecoes'
import Banner from '../../components/Banner/Banner'


const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <Busca></Busca>
        <Hashtags></Hashtags>
        <Banner></Banner>
        <Colecoes></Colecoes>
    </div>
  )
}

export default HomePage