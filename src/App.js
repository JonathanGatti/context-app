import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageContent from './PageContent';
import Navbar from './Navbar';
import Form from './Form';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <PageContent>
          <Navbar />
          <Form />
        </PageContent>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
