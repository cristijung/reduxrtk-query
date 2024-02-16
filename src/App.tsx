import './App.css';
import CatList from './app/components/CatList';
import DogList from './app/components/DogList';
import PokemonList from './app/components/PokemonList';
import PostsList from './app/components/PostList';
import UserComponent from './app/components/UserComponent';
import Counter from './app/components/Counter';
import TodoApp from './app/components/TodoApp';



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
    <TodoApp/>
    <hr/>
    <PostsList/>
    <hr/>
    <UserComponent/>    
    <br/>    
    </>
  );
}

export default App;
