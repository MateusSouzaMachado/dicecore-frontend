import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
    <div className="hero-section">
      <h1>Bem-vindo ao DiceCore</h1>
      <p>Um sistema de RPG online para mestres e jogadores se conectarem...</p>
      <img src="/dadoEstilhacado.jpg-removebg-preview.png" alt="Logo Estilhaços" className="logo-img" />
    </div>
  
    <div className="content">
      {/* Aqui começa o restante da página */}
    </div>
  </div>
  );
}

export default Home;