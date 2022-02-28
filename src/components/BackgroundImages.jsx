import React from 'react'
import { Box } from '@mui/material'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

export default function BackgroundImages({ children }) {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bck_img001.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  )
  const imageData = desktop.childImageSharp.fluid
  return (
    <>
      <Box
        component='div'
        id='fondo_color'
        sx={{
          backgroundColor:
            'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)'
        }}
      >
        <BackgroundImage
          Tag='section'
          fluid={imageData}
          backgroundColor={
            'linear-gradient(270deg, #041426 7.34%, #192940 80.71%)'
          }
          preserveStackingContext
          style={{ width: '100vw', height: '90.5vh', opacity: '0.2' }}
        >
          {children}
        </BackgroundImage>
      </Box>
    </>
  )
}
