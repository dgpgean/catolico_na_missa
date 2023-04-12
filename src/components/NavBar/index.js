import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/teste.svg'
import { BsFillHouseDoorFill,BsBookFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';

const Index = () => {

  function showMenu(){
     let btnMenu = document.querySelector("#menu_mobile")
     btnMenu.classList.toggle('show_menu')
  }
  return (
    <nav className='navbar'>

      <button onClick={()=>showMenu()} id='menu_btn' className='text-black p-3 rounded-full text-3xl fixed bottom-2 left-[80%] bg-white'>
        <GiHamburgerMenu />
      </button>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>

      {/* MENU DESKTOP */}

      <ul id='menu_desktop' >
          <li>
            <NavLink to='/' >
              Início
            </NavLink>
          </li>

          <li>
            <NavLink to='/oracoes'>
              Orações
            </NavLink>
          </li>

          <li>
            <NavLink to='/liturgia'>
              Liturgia
            </NavLink>
          </li>

          <li>
            <NavLink to='/sobre'>
              Sobre
            </NavLink>
          </li>

      </ul>
  

      {/* MENU MOBILE */}

      <ul id='menu_mobile' className='text-2xl'>
        <li onClick={()=> showMenu()}>
            <NavLink to='/'>
                Home
            </NavLink>
        </li>

        <li onClick={()=> showMenu()}>
            <NavLink to='/oracoes'>
                Contato
            </NavLink>
        </li>

        <li onClick={()=> showMenu()}>
            <NavLink to='/liturgia'>
                Sobre
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Index