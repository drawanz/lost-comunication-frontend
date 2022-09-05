import { configureStore } from '@reduxjs/toolkit';
import lostCommunicationReducer from './reducers/lostCommunicationSlice';

export default configureStore({
  reducer: {
    lost: lostCommunicationReducer,
  },
});
