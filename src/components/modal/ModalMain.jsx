import React from 'react'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import Button from '@mui/material/Button'
import { DataProvider } from './ModalContext'
import ContenedorNavegacion from './ContenedorNavegacion'

const ModalMain = () => {
  // // Estados y comportamiento para abrir y cerrar la ventana modal
  // const [abrirModal, setAbrirModal] = React.useState(false)
  // const modalAbierto = () => setAbrirModal(true)
  // const modalCerrado = () => setAbrirModal(false)

  // // Lista de los componentes internos de la ventana modal
  // let listaPaginasModal = [PageOne, PageTwo, PageThree]

  // // Estado inicial de la pagina interna de la ventana modal
  // const [paginaModalActiva, setPaginaModalActiva] = React.useState(0)

  // // Funcion que devuelve el tamaño de la lista de componentes
  // const totalPaginas = () => {
  //   return listaPaginasModal.length
  // }

  // // Funcion que comprueba si se encuentra en la iteracion final de la lista de componentes
  // const comprobarFinalPaginas = () => {
  //   return paginaModalActiva === totalPaginas() - 1
  // }

  // // Funcion en bucle que itera sobre la lista de componentes en forma positiva
  // const siguientePagina = () => {
  //   const establecePaginaActual = comprobarFinalPaginas()
  //     ? paginaModalActiva - (totalPaginas() - 1)
  //     : paginaModalActiva + 1
  //   setPaginaModalActiva(establecePaginaActual)
  // }

  // // Funcion en bucle que itera sobre la lista de componentes en forma negativa
  // const anteriorPagina = () => {
  //   const establecePaginaActual = comprobarFinalPaginas()
  //     ? paginaModalActiva - 1
  //     : paginaModalActiva === 0
  //     ? paginaModalActiva + (totalPaginas() - 1)
  //     : paginaModalActiva - 1
  //   setPaginaModalActiva(establecePaginaActual)
  // }

  // const ContenedorNavegacion = ({ children }) => {
  //   const { prueba } = React.useContext(ModalContext)
  //   return (
  //     <div
  //       style={{
  //         display: 'flex',
  //         flexDirection: 'row',
  //         alignContent: 'center',
  //         gap: '20px'
  //       }}
  //     >
  //       <Button
  //         onClick={anteriorPagina}
  //         aria-label='anterior pagina'
  //         component='button'
  //       >
  //         <ArrowLeftOutlinedIcon sx={{ ...botonesNavegacion }} />
  //       </Button>
  //       {prueba}
  //       {children}
  //       <Button
  //         onClick={siguientePagina}
  //         aria-label='siguiente pagina'
  //         component='button'
  //         sx={{ width: '40px' }}
  //       >
  //         <ArrowRightOutlinedIcon sx={{ ...botonesNavegacion }} />
  //       </Button>
  //     </div>
  //   )
  // }

  const IndicadorPaginaActual = () => {
    // Comprueba si la pagina actual es la misma que se ha renderizado
    const compIndicadorActual = (numero) => {
      return listaPaginasModal[paginaModalActiva] === listaPaginasModal[numero]
    }

    // Agrega estilos al indicador dependiendo si es la pagina actual o no
    const estiloIndicador = (numero) => {
      return {
        backgroundColor: compIndicadorActual(numero)
          ? '#29E8E8'
          : 'rgba(42, 74, 128, 0.4)',
        width: '41px',
        height: '10px'
      }
    }
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            height: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              gap: 15
            }}
          >
            <div style={estiloIndicador(0)} />
            <div style={estiloIndicador(1)} />
            <div style={estiloIndicador(2)} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <DataProvider>
        <Button
          onClick={modalAbierto}
          variant='outlined'
          color='primary'
          sx={{ ...botonMUI }}
        >
          Acerca de nosotros
        </Button>
        <Modal
          open={abrirModal}
          onClose={modalCerrado}
          sx={{
            '& .MuiBackdrop-root': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(4px)'
            }
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '38.214vw',
              background:
                'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)',
              boxShadow: 24,
              borderRadius: '6px',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              alignContent: 'center'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'flex-end',
                width: '100%'
              }}
            >
              <Button
                onClick={modalCerrado}
                aria-label='cerrar ventana'
                component='span'
              >
                <CloseOutlinedIcon sx={{ ...botonCerrar }} />
              </Button>
            </div>
            <ContenedorNavegacion>
              <Box component={listaPaginasModal[paginaModalActiva]} />
            </ContenedorNavegacion>
            <IndicadorPaginaActual />
          </Box>
        </Modal>
      </DataProvider>
    </>
  )
}

let botonMUI = {
  fontFamily: 'Assistant',
  fontStyle: 'normal',
  fontWeight: 700,
  fontSize: '24px',
  color: '#cccccc',
  textTransform: 'initial',
  border: '3px solid rgba(175, 6, 159, 0.7)',
  boxSizing: 'border-box',
  borderRadius: '4px',
  '&:hover': {
    color: '#F2F2F2',
    border: '3px solid #AF069F',
    boxSizing: 'border-box',
    boxShadow: '0px 0px 7px 4px rgba(175, 40, 162, 0.25)',
    borderRadius: '4px'
  }
}

// const botonesNavegacion = {
//   color: '#A7E5E5',
//   fontSize: '5.5rem',
//   '&:hover': {
//     color: '#29E8E8'
//   }
// }

const botonCerrar = {
  color: '#CCCCCC',
  fontSize: '2.680rem',
  '&:hover': {
    color: '#F2F2F2'
  }
}

export default ModalMain
