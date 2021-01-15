import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import TodayPage from '@/pages/TodayPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodayPage />
    </ThemeProvider>
  );
}

export default App;
