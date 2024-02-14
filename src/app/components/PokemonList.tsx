import { useGetPokemonsQuery } from '../services/pokeApi';

const PokemonList = () => {
  const { data, error, isLoading } = useGetPokemonsQuery(20); // 20 pokes

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Ocorreu um erro</div>;

  return (
    <div>
      <h1>Fofos Pokémons</h1>
      <ul style={{ listStyle: 'none' }}>
        {data?.results.map((pokemon) => {
          // tirando o ID do Pokemon da URL
          const pokemonId = pokemon.url.split('/').filter(Boolean).pop(); 
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
          return (
            <li key={pokemon.name} style={{ marginBottom: '10px' }}>
              <img src={imageUrl} alt={pokemon.name} style={{ marginRight: '10px' }} />
              {pokemon.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PokemonList;
