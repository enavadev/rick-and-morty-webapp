import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import Home from '../components/home'
import Layout from '../components/layout'

const Index = () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <Home />
        </Layout>
  </ThemeProvider>
)

export default Index
