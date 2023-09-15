import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from './Missions';
import { fetchMissions } from '../../Redux/missions/missionsSlice';

const mockStore = configureMockStore([thunk]);

describe('Missions Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display loading state', async () => {
    const store = mockStore({
      missions: {
        missions: [], loading: true, error: null, reservedMissions: [],
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    store.dispatch(fetchMissions());

    expect(screen.getByText('Loading...').textContent).toBe('Loading...');
  });

  test('should display error state', async () => {
    const store = mockStore({
      missions: {
        missions: [], loading: false, error: true, reservedMissions: [],
      },
    });

    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    store.dispatch(fetchMissions());

    expect(screen.getByText('Error:').textContent).toBe('Error:');
  });

  test('should display content', async () => {
    const store = mockStore({
      missions: {
        missions: [
          {
            mission_id: 1,
            mission_name: 'Mission 1',
            description: 'Mission 1 Description',
            reserved: true,
          },
          {
            mission_id: 2,
            mission_name: 'Mission 2',
            description: 'Mission 2 Description',
            reserved: false,
          },
        ],
        loading: false,
        error: false,
      },
    });

    const { mission } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    store.dispatch(fetchMissions());

    await waitFor(() => {
      expect(mission).toMatchSnapshot();
    });
  });
});
