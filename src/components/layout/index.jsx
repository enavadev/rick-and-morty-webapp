import React from 'react'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/global'

const Main = styled.main`
  padding-top: 0px;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Main>{children}</Main>
  </>
)

export default Layout
