import React from 'react';
import './App.css';
import CatList from './app/components/CatList';
import DogList from './app/components/DogList';
import PokemonList from './app/components/PokemonList';

function App() {
  return (
    <>
    <CatList/>
    <hr/>
    <DogList/>
    <hr/>
    <PokemonList/>
    
    </>
  );
}

export default App;
