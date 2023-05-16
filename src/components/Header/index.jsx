import React from 'react'
import './styles.js'
import { ContainerHeader } from './styles.js'
import { Link } from 'react-router-dom'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'
function Header() {
  return (
    
    <ContainerHeader>

       <nav className='container'>
              <Link className='logo' to='/' aria-label='Dogs - Home'>
                <Dogs/>
              </Link>
              <Link className='login' to='/login'>Login/Criar</Link>
       </nav>
    </ContainerHeader>
  )
}

export default Header