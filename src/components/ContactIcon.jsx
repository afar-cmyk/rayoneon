import React from 'react'
import iconoWhatsapp from '../images/whatsapp.svg'
import '../styles/global.css'

export const ContactIcon = () => {
  return (
    <div className='icono-contacto'>
      <img id='icono-svg' alt='Logo whatsapp' href={iconoWhatsapp} />
      <p>¡Contactenos!</p>
    </div>
  )
}
