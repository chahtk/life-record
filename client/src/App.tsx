import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Welcome to React with Typescript</h1>
        <p>The color of this page is: </p>
      </div>
    </ThemeProvider>
  );
}

export default App;
