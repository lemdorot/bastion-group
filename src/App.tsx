import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './pages/Main';


import './sass/styles.sass';

function App() {
  return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
