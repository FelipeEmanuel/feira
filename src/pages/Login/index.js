import React from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import FormLogin from '../../components/FormLogin'

export default function index() {
  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Faça login e comece sua feira!</p>
      </section>

      <section>
        <FormLogin />
      </section>
    </>
  )
}
