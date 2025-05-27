import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao DiceCore</h1>
      <p>Um sistema de RPG online para mestres e jogadores se conectarem, criarem personagens e registrarem aventuras!</p>
      <img src="/rpg-banner.jpg" alt="Banner RPG" className="home-banner" />
    </div>
  );
}

export default Home;