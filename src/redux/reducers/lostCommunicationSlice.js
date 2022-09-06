import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  nome: '',
  email: '',
  CPF: '',
  latitude: '',
  longitude: '',
  lavoura: '',
  data_colheita: '',
  evento: '',
};

export const lostCommunicationSlice = createSlice({
  name: 'lostCommunication',
  initialState,
  reducers: {
    changeName: (state, { payload }) => ({ ...state, nome: payload }),
    changeEmail: (state, { payload }) => ({ ...state, email: payload }),
    changeCpf: (state, { payload }) => ({ ...state, CPF: payload }),
    changeLatitude: (state, { payload }) => ({ ...state, latitude: payload }),
    changeLongitude: (state, { payload }) => ({ ...state, longitude: payload }),
    changeLavoura: (state, { payload }) => ({ ...state, lavoura: payload }),
    changeData: (state, { payload }) => ({ ...state, data_colheita: payload }),
    changeEvento: (state, { payload }) => ({ ...state, evento: payload }),
  },
  clean: (state) => ({
    ...state,
    isLoading: false,
    nome: '',
    email: '',
    CPF: '',
    latitude: '',
    longitude: '',
    lavoura: '',
    data_colheita: '',
    evento: '',
  }),
});

export const {
  changeName,
  changeEmail,
  changeCpf,
  changeLatitude,
  changeLongitude,
  changeLavoura,
  changeData,
  changeEvento,
  clean,
} = lostCommunicationSlice.actions;

export default lostCommunicationSlice.reducer;
