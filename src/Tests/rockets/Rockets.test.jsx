import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Rockets from '../../components/profile/rockets/Rockets';

describe('Rockets Component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should display loading state', () => {
    render(<Rockets />);
    expect(screen.getByText('Content is loading...').textContent).toBe('Content is loading...');
  });

  test('should display error state', async() => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'));

    render(<Rockets />);
    await waitFor(() => {
      expect(screen.getByText('Something went wrong!!!').textContent).toBe('Something went wrong!!!');
    });
  });



})