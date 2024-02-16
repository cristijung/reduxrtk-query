import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { UserPayload, UserData, ReqResState } from "../../types/types";

const initialState: ReqResState = {
  loading: false,
  error: null,
  userData: null,
};

export const postUser = createAsyncThunk(
  "reqres/postUser",
  async (data: UserPayload, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.post("https://reqres.in/api/users", data);
      console.log("User created:", response.data);
      return response.data; // retorna os dados para serem manipulados pelo reducer
    } catch (error: any) {
      dispatch(setError(error.toString()));
      throw error; // erro para que possa ser tratado pelo reducer
    } finally {
      dispatch(setLoading(false));
    }
  }
);

const reqresSlice = createSlice({
  name: "reqres",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.userData = null; // limpa os dados anteriores ao iniciar uma nova solicitação
      })
      .addCase(postUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload; // armazena os dados do usuário após a criação bem-sucedida
        state.error = null;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An unexpected error occurred";
        state.userData = null; // optar por limpar ou manter os dados antigos dependendo do caso de uso
      });
  },
});

export const { setLoading, setError, setUserData } = reqresSlice.actions;

export default reqresSlice.reducer;
