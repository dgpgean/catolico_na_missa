import { useAllPrismicDocumentsByType, useFirstPrismicDocument } from '@prismicio/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Carousel from './Carousel';

const Services = () => {
  const [documents] = useAllPrismicDocumentsByType('servicos');

  console.log(documents)
  return (
    <div>
      <h1>Nossos Serviços</h1>
      <div className='list_cards'>
        <Carousel>
        {documents && documents.map(item => (
          <div className='cards_services swiper-slide'>
                <NavLink to={item.data.rota_da_pagina[0].text}>
                <h3>{item.data.titulo[0].text}</h3>
                <img src={item.data.imagem_do_servico.url}/>
                <p>{item.data.descricao[0].text}</p>
                </NavLink>
              </div>
          
          ))}
          </Carousel>
      </div>
    </div>
  )
}

export default Services