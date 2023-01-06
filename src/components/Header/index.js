import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUser} from 'react-icons/fa'

export default function Header() {
  return (
    <header className='header'>
        <div className='logo'>
        </div>
        <ul>
            <li>
            <Link to='/'>
                <FaSignInAlt /> Login
            </Link>
            </li>
            <li>
            <Link to='/cadastrar'>
                <FaUser /> Cadastrar
            </Link>
            </li>
        </ul>
        
    </header>

  )
}
