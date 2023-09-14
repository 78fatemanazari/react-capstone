import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Rockets from './Rockets';
import { getResultItems } from '../../../Redux/rockets/rocketSlice';

const mockStore = configureMockStore([thunk]);

describe('Rockets Componet', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should display loading state', async () => {
    const store = mockStore({ rocket: { rockets: [], isLoading: true, error: null } });

    const initialState = {
      rockets: [],
      isLoading: true,
      error: undefined,
    };

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    store.dispatch(getResultItems());

    expect(screen.getByText('Content is loading...').textContent).toBe('Content is loading...');
  });

  test('should display error state', async () => {
    const store = mockStore({ rocket: { rockets: [], isLoading: false, error: true } });

    const initialState = {
      rockets: [],
      isLoading: true,
      error: undefined,
    };

    render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    store.dispatch(getResultItems());

    expect(screen.getByText('Something went wrong!!!').textContent).toBe('Something went wrong!!!');
  });

  test('should display content', async () => {
    const store = mockStore({ rocket: {
      rockets: [
        {
          id: 1,
          imgPath: 'myImg/path1',
          rocketName: 'first rocket',
          active: true,
          description: 'this is my first rocket description',
        },
        {
          id: 2,
          imgPath: 'myImg/path2',
          rocketName: 'second rocket',
          active: false,
          description: 'this is my second rocket description',
        },
      ],
      isLoading: false,
      error: false,
    } }
  );

    const initialState = {
      rockets: [],
      isLoading: true,
      error: undefined,
    };

    const { rocket } = render(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    store.dispatch(getResultItems());

    await waitFor(() => {
      expect(rocket).toMatchSnapshot();
    });
  });
});
