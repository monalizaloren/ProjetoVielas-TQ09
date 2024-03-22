import React from 'react'
import Header, { Busca } from '../../components/Header/Header'
import Colecao from '../../components/Colecao/Colecao'
import Banner from '../../components/Banner/Banner'


const HomePage = () => {
  return (
    <div>
        <Header></Header>
        <Busca></Busca>
        <Banner></Banner>
        <Colecao></Colecao>
    </div>
  )
}

export default HomePage