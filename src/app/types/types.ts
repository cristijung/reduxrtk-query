import { SerializedError } from '@reduxjs/toolkit';

export interface CustomError extends SerializedError {
    status?: number;
}

export interface Cat {
    id: string;
    url: string;
}

export interface Dog {
    id: string;
    name: string;
    temperament: string;
    image: {
        url: string;
    };
}

export interface Pokemon {
    name: string;
    url: string;
  }
  
  export interface PokemonsResponse {
    results: Pokemon[];
  }

  export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  export interface UserPayload {
    name: string;
    job: string;
  }
  
  export interface UserData {
    name: string;
    job: string;
    id?: string;
    createdAt?: string;
  }
  
  export interface ReqResState {
    loading: boolean;
    error: string | null;
    userData: UserData | null;
  }