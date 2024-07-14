import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Promotions from './Promotions';

jest.useFakeTimers();

test('renders the first message initially', () => {
  render(<Promotions />);
  expect(screen.getByText("Best services at affordable price")).toBeInTheDocument();
});

test('switches messages after the interval', async () => {
  render(<Promotions />);
  
  // Fast-forward time to switch message
  jest.advanceTimersByTime(4000);

  await waitFor(() => {
    expect(screen.getByText("Open 9 am to 9 pm")).toBeInTheDocument();
  });
});

test('handles visibility of messages correctly', async () => {
  render(<Promotions />);

  // First message is visible
  expect(screen.getByText("Best services at affordable price")).toBeVisible();
  
  // Fast-forward time to make the first message invisible
  jest.advanceTimersByTime(3000);
  await waitFor(() => {
    expect(screen.queryByText("Best services at affordable price")).not.toBeVisible();
  });

  // Fast-forward time to switch message
  jest.advanceTimersByTime(1000); // Total 4000ms
  await waitFor(() => {
    expect(screen.getByText("Open 9 am to 9 pm")).toBeVisible();
  });
  
  // Fast-forward time to make the second message invisible
  jest.advanceTimersByTime(3000);
  await waitFor(() => {
    expect(screen.queryByText("Open 9 am to 9 pm")).not.toBeVisible();
  });
});
