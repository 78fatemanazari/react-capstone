import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/rockets';

const initialState = {
  rockets: [],
  isLoading: true,
  error: undefined,
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
        active: myData[key].active,
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
      const ansRockets = [];
      state.rockets.forEach((rocket) => {
        const tmpRockt = rocket;
        if (tmpRockt.id === rocketId) {
          tmpRockt.active = false;
        }
        console.log(tmpRockt);
        ansRockets.push(tmpRockt);
      });
      state.rockets = ansRockets;
    },
    cancelRocket: (state, action) => {
      const rocketId = action.payload.id;
      const ansRockets = [];
      state.rockets.forEach((rocket) => {
        const tmpRockt = rocket;
        if (tmpRockt.id === rocketId) {
          tmpRockt.active = true;
        }
        console.log(tmpRockt);
        ansRockets.push(tmpRockt);
      });
      state.rockets = ansRockets;
    },
  },
  extraReducers: {
    [getResultItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getResultItems.rejected]: (state) => {
      state.isLoading = false;
    },
    [getResultItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    },
  },
});

export const { reserveRocket, cancelRocket } = rocketSlice.actions;
export default rocketSlice.reducer;
