import { useAllPrismicDocumentsByType, useFirstPrismicDocument } from '@prismicio/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = () => {
  const [documents] = useAllPrismicDocumentsByType('servicos');

  console.log(documents)
  return (
    <div>
      <div className='divider-1'></div>
      <div className='list_cards'>
        {documents && documents.map(item => (
          <NavLink to={item.data.rota_da_pagina[0].text}>
            <div className='cards_services'>
              <h3>{item.data.titulo[0].text}</h3>
              <img src={item.data.imagem_do_servico.url}/>
              <p>{item.data.descricao[0].text}</p>
            </div>
          </NavLink>
          
        ))}
      </div>
    </div>
  )
}

export default Card