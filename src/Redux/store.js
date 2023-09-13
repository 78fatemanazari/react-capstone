import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionsSlice,
  },
});

export default store;
