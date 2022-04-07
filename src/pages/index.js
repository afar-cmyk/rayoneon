import React from 'react'
import NavBar from '../components/navigation/NavBar'
import FondoIndex from '../components/FondoIndex'
import '../styles/global.css'
import ContactIcon from '../components/ContactIcon.jsx'
import {
  SupportAgentOutlined,
  AccessTimeOutlined,
  LocalShippingOutlined,
  GppGoodOutlined
} from '@mui/icons-material'
import SocialMedia from '../components/SocialMedia'
import ModalMain from '../components/modal/ModalMain'
import { ModalProvider } from '../components/modal/ModalContext'
import Logo from '../images/Logo'

export default function index() {
  return (
    <>
      <main id='contenedor-padre'>
        <NavBar estado={null} />
        <NuevoComponente />
        {/* <SeccionPrincipal />
        <div className='seccion-servicios'>
          <ServciosTexto />
          <ServiciosIconos />
          <SocialMedia />
        </div>
        <ContactIcon /> */}
      </main>
    </>
  )
}

const NuevoComponente = () => {
  // let primero = {
  //   background: 'linear-gradient(270deg, #041426e0 7.34%, #192940e0 80.71%)',
  //   height: '100%',
  //   display: 'flex',
  //   flexDirection: 'column',
  //   overflow: 'auto'
  // }

  let primero = {
    background: '#12151B',
    position: 'relative',
    minHeight: 'calc(100vh - 68px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    clear: 'both',
    zIndex: 0,
    transition: 'padding .6s ease-in-out',
    gap: '160px',
    paddingLeft: '96px',
    paddingRight: '95px'
  }

  // let barra = {
  //   position: 'sticky',
  //   width: '100vw',
  //   top: 0,
  //   margin: 0,
  //   border: 0,
  //   boxSizing: 'border-box',
  //   transition: 'background .3s',
  //   zIndex: 9
  // }

  // let barraDentro = {
  //   backgroundColor: '#0E0F12',
  //   height: '68px',
  //   width: '100%',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // }

  // let padre = {
  //   position: 'relative',
  //   width: '100%',
  //   minHeight: '100%',
  //   background: '#f4f7f6',
  //   zIndex: 1,
  //   transition: 'transform .5s ease-in-out'
  // }

  return (
    <>
      <section style={{ ...primero }}>
        <Logo elemento='completo' />
        <div className='contenido-principal'>
          <h2>Avisos de Neón</h2>
          <p>
            Somos una empresa <strong>100% colombiana</strong>, dedicada a la{' '}
            <strong>fabricación de material publicitario</strong>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{').'}
          </p>
          <br />
          <p>
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <strong>excelente calidad</strong> siempre a tiempo y en el lugar
            donde nos indique.
          </p>
        </div>
      </section>
      <footer>footer</footer>
    </>
  )
}

const SeccionPrincipal = () => {
  return (
    <>
      <FondoIndex>
        <div className='titulo-principal'>
          <Logo elemento='completo' />
        </div>
        <div className='contenido-principal'>
          <h2>Avisos de Neón</h2>
          <p>
            Somos una empresa <strong>100% colombiana</strong>, dedicada a la{' '}
            <strong>fabricación de material publicitario</strong>
            {' ('}neón, avisos en acrílico, letras 3D, material p.o.p{') '}
            Nuestra razón de ser es proporcionarle un servicio puntual y de{' '}
            <strong>excelente calidad</strong> siempre a tiempo y en el lugar
            donde nos indique.
          </p>
        </div>
      </FondoIndex>
    </>
  )
}

const ServciosTexto = () => {
  return (
    <>
      <section id='servicios-texto'>
        <h3>¡Puede contar con nuestros servicios!</h3>
        <p className='contenido-inferior'>
          Todo el <strong>material</strong> utilizado en nuestra producción es
          <strong> Importado</strong> de los EEUU y homologados por las {''}
          <a
            href='https://www.egl-lighting.com/'
            hrefLang='en'
            rel='noreferrer'
            target='_blank'
          >
            <strong>normas Internacionales</strong>
          </a>
          .
        </p>
        <ModalProvider>
          <ModalMain />
        </ModalProvider>
      </section>
    </>
  )
}

const ServiciosIconos = () => {
  return (
    <>
      <section id='servicios-iconos'>
        <div className='contenedor-servicios-iconos'>
          <div className='cuadro-servicio-icono'>
            <SupportAgentOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <AccessTimeOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <LocalShippingOutlined sx={{ ...iconoMUI }} />
          </div>
          <div className='cuadro-servicio-icono'>
            <GppGoodOutlined sx={{ ...iconoMUI }} />
          </div>
        </div>
        <div className='contenedor-servicios-texto'>
          <div className='cuadro-servicio'>
            <p>
              Atención <strong>personalizada</strong> por vía telefónica.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <p>
              Garantía de entrega a <strong>tiempo</strong>.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <p>
              <strong>Envío</strong> e instalación a nivel{' '}
              <strong>nacional</strong>.
            </p>
          </div>
          <div className='cuadro-servicio'>
            <div className='envoltura-servicios'>
              <p>
                Envoltura impermeable y<br />
                <strong>a prueba de golpes. *</strong>
              </p>
              <sub>
                {'('}impactos ligeros durante el transporte{').'}
              </sub>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

let iconoMUI = {
  fontSize: 60,
  color: '#f2f2f2'
}
