import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import App from './App';

describe('App Component', () => {
  test('renders App component', () => {
    const { getByText } = render(<App />);

    // Check for specific text or components rendered by App
    expect(getByText('Our Services')).toBeInTheDocument(); // Line 16
    expect(getByText('E-bag shop')).toBeInTheDocument(); // Line 17
    expect(getByText('Products')).toBeInTheDocument(); // Line 22
  });
});
