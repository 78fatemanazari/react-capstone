import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

const initialState = {
  missions: [],
  loading: false,
  error: null,
  reservedMissions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      // Create a new array with the payload added to reservedMissions
      const newReservedMissions = [...state.reservedMissions, payload];

      // Create a new array of missions with the updated 'reserved' property
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });

      // Return a new state object with the updated reservedMissions and missions
      return {
        ...state,
        reservedMissions: newReservedMissions,
        missions: newMissions,
      };
    },
    leaveMission: (state, { payload }) => {
      state.reservedMissions = state.reservedMissions.filter((missionId) => missionId !== payload);
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.loading = false;
        const result = payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: state.reservedMissions.includes(mission.mission_id),
        }));
        state.missions = result;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
