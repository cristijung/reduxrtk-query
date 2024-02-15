import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
//import { RootState } from '../../store/store';

interface ReqResState {
  loading: boolean;
  error: string | null;
}

const initialState: ReqResState = {
  loading: false,
  error: null,
};

export const postUser = createAsyncThunk(
  'reqres/postUser',
  async (data: any, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoading(true));
      const response = await axios.post('https://reqres.in/api/users', data);
      console.log('User created:', response.data);
      thunkAPI.dispatch(setLoading(false));
      return response.data; // se precisar, retornar dados relevantes da requisição
    } catch (error: any) { // especificando que 'error' é do tipo 'any - gambi'
      thunkAPI.dispatch(setError(error.message));
      thunkAPI.dispatch(setLoading(false));
      throw error; // rejeitar todas as promise para que o RTK possa lidar com o erro adequadamente
    }
  }
);

const reqresSlice = createSlice({
  name: 'reqres',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(postUser.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(postUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ?? 'Um erro ocorreu';
    });
  },
});

export const { setLoading, setError } = reqresSlice.actions;

export default reqresSlice.reducer;
