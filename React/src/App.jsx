import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
