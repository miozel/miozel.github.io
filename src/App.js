import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Home from 'components/Home/Home';

function App() {
  return (
    <div>
      <Layout>
          <Routes>
            <Route path="/" element={ <Home/> } />
          </Routes>
        </Layout>
    </div>
  );
}

export default App;
