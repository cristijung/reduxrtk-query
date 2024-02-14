import React from 'react';
import { useGetDogsQuery } from '../services/dogsApi';
import { CustomError, Dog } from '../types/types';


const DogList: React.FC = () => {
  const { data: dogs, error, isLoading } = useGetDogsQuery();

  if (isLoading) return <div>Carregando...</div>;
  if (error) {
    const customError = error as CustomError;
    if (customError.status) {
      return <div>Error: {customError.status}</div>;
    } else {
      return <div>Error: {customError.message}</div>;
    }
  }

  // Limita a exibição a apenas 8 raças de cães
  const limitedDogs = dogs ? dogs.slice(0, 8) : [];

  return (
    <div>
      <h1>Raças de Cães</h1>
      <div>
        {limitedDogs.map((dog: Dog) => (
          <div key={dog.id}>
            <h2>{dog.name}</h2>
            <p>{dog.temperament}</p>
            {dog.image && dog.image.url && (
              <img src={dog.image.url} alt={dog.name} style={{ width: '200px', height: '200px', margin: '5px' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogList;
