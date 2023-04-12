import { useAllPrismicDocumentsByType, useFirstPrismicDocument } from '@prismicio/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsFillHouseDoorFill,BsBookFill } from 'react-icons/bs';
import { GiPrayer } from 'react-icons/gi';

const Services = () => {
  const [documents] = useAllPrismicDocumentsByType('servicos');

  function showMenu(){
    let btnMenu = document.querySelector("#menu_mobile")
    btnMenu.classList.toggle('show_menu')
 }

  console.log(documents)
  return (
    <div>
      <div className='list_cards'>
        {documents && documents.map(item => (
          <div className='cards_services' onClick={() => showMenu()}>
            <NavLink to={item.data.rota_da_pagina[0].text}>
            <div className='icon_service'>
              <img src={item.data.icone.url}/>
            </div>
            <h3>{item.data.titulo[0].text}</h3>
            </NavLink>
          </div>
          ))}
      </div>
    </div>
  )
}

export default Services