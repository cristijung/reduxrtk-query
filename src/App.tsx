import React from 'react';
import './App.css';
import CatList from './app/components/CatList';
import DogList from './app/components/DogList';
import PokemonList from './app/components/PokemonList';
import PostsList from './app/components/PostList';
import UserComponent from './app/components/UserComponent';
import Counter from './app/components/Counter';



function App() {
  return (
    <>
    <CatList/>
    <hr/>
    <DogList/>
    <hr/>
    <Counter/>
    <hr/>
    <PokemonList/>
    <hr/>
    <PostsList/>
    <hr/>
    <UserComponent/>    
    <br/>
    
    </>
  );
}

export default App;
