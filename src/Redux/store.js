import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import missionSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions: missionSlice,
  },
});

export default store;
