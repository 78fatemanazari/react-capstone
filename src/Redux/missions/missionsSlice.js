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
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.loading = false;
        const result = [];
        payload.map((mission) => {
          const newMission = {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          };
          return result.push(newMission);
        });
        state.missions = result;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
