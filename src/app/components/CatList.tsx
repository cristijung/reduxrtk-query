import React from 'react';
import { useGetCatsQuery } from '../services/catsApi';
import { CustomError, Cat } from '../types/types';

const CatList: React.FC = () => {
    const { data: cats, error, isLoading } = useGetCatsQuery();

    if (isLoading) return <div>Carregando ...</div>;
    if (error) {
        const customError = error as CustomError;
        if (customError.status) {
            return <div>Error: {customError.status}</div>;
        } else {
            return <div>Error: {customError.message}</div>;
        }
    }

    return (
        <>
        <h1>Lista de Gatos Lindos!</h1>

        <div>
            {cats && cats.map((cat: Cat) => (
                <img key={cat.id} src={cat.url} alt='Gatoss' style={{ width: '200px', height: '200px', margin: '5px' }}/>
            ))}
        </div>
        </>
    );
};

export default CatList;