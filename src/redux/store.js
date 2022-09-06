import { configureStore } from '@reduxjs/toolkit';
import newLostCommunicationReducer from './reducers/newLostCommunicationSlice';
import lostCommunicationReducer from './reducers/lostCommunicationSlice'

export default configureStore({
  reducer: {
    newLost: newLostCommunicationReducer,
    lost: lostCommunicationReducer,
  },
});
