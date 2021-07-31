import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { Routing } from './App.Routing'

const Global = createGlobalStyle`
  overflow-x: hidden;
  overflow-y: scroll;
`

export const App = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Routing />
    </StylesProvider>
  )
}

export default App