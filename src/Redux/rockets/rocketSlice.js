import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
  hasFetched: false,
};

export const getResultItems = createAsyncThunk('result/getResultItems', async (thunkAPI) => {
  try {
    const resp = await axios(url);
    const myData = resp.data;

    const myTransData = [];

    Object.keys(myData).forEach((key) => {
      const myTmpObj = {
        id: myData[key].id,
        imgPath: myData[key].flickr_images[0],
        rocketName: myData[key].rocket_name,
        active: true,
        description: myData[key].description,
      };
      myTransData.push(myTmpObj);
    });

    return myTransData;
  } catch (error) {
    return thunkAPI.rejectWithValue('something went wrong...');
  }
});

const rocketSlice = createSlice({
  name: 'rocketHandler',
  initialState,
  reducers: {
    reserveRocket: (state, action) => {
      const rocketId = action.payload.id;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, active: false };
        }
        return rocket;
      });
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload.id;
      state.rockets = state.rockets.map((rocket) => {
        if (rocket.id === rocketId) {
          return { ...rocket, active: true };
        }
        return rocket;
      });
    },
  },
  extraReducers: {
    [getResultItems.pending]: (state) => {
      state.isLoading = true;
      state.hasFetched = false;
    },
    [getResultItems.rejected]: (state) => {
      state.isLoading = false;
      state.hasFetched = false;
    },
    [getResultItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasFetched = true;
      state.rockets = action.payload;
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
