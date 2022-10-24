import React from 'react'
import styled, { css } from 'styled-components'
import RickMortyLogo from '../../assets/Rick-And-Morty-Logo.png'

const Wrapper = styled.section(
  ({ theme }) => css`
    ${theme.mixins.flex}
    flex-direction: column;
    height: calc(40vh - ${theme.navHeight}px);
    text-align: center;
    position: relative;
    background: ${theme.backBlack};
    .hero-image {
      width: 50%;
      height: 130%;

      img {
        width: 100%;
        height: 100%;
        fill: ${theme.whitesmoke};
      }
    }

    ${theme.media.phone(css`
      padding: 0 ${theme.spacing._20};
    `)}
  `,
)

const RockMortyHeader = () => {

  return (
    <Wrapper>
      <div className="hero-image">
        <img src={RickMortyLogo} alt='imagem do nome Rick and Morty'/>
      </div>
    </Wrapper>
  )
}

export default RockMortyHeader
