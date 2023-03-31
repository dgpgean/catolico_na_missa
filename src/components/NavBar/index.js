import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../img/teste.svg'
import { BsFillHouseDoorFill,BsBookFill } from 'react-icons/bs';
import { GiCandleLight } from 'react-icons/gi';

const Index = () => {
  return (
    <nav className='navbar'>
      <NavLink to="/">
        <img src={logo} />
      </NavLink>

      {/* MENU DESKTOP */}

      <ul id='menu_desktop'>
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
        <li>
            <NavLink to='/'>
                <BsFillHouseDoorFill />
            </NavLink>
        </li>

        <li>
            <NavLink to='/oracoes'>
                <GiCandleLight />
            </NavLink>
        </li>

        <li>
            <NavLink to='/liturgia'>
                <BsBookFill />
            </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Index