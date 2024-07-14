import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import AppBarMobile from './AppBarMobile';
import { ContexUi } from "../../context/contexUI";

// Mock the useContext hook for testing purposes
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('AppBarMobile Component', () => {
  test('renders AppBarMobile component', () => {
    // Mock useContext values
    const mockSetDrawer = jest.fn();
    const mockSetSearchBox = jest.fn();
    useContext.mockReturnValue({ setDrawer: mockSetDrawer, setSearchBox: mockSetSearchBox });

    const { getByText, getByTestId } = render(<AppBarMobile matches={true} />);

    // Verify that the title "My Bags" is rendered
    expect(getByText('My Bags')).toBeInTheDocument(); // Line 11
  });

  test('clicking on Menu button calls setDrawer(true)', () => {
    const mockSetDrawer = jest.fn();
    const mockSetSearchBox = jest.fn();
    useContext.mockReturnValue({ setDrawer: mockSetDrawer, setSearchBox: mockSetSearchBox });

    const { getByTestId } = render(<AppBarMobile matches={true} />);

    // Click on the Menu button
    fireEvent.click(getByTestId('menu-button'));

    // Check if setDrawer(true) is called
    expect(mockSetDrawer).toHaveBeenCalledWith(true); // Line 13
  });

  test('clicking on Search button calls setSearchBox(true)', () => {
    const mockSetDrawer = jest.fn();
    const mockSetSearchBox = jest.fn();
    useContext.mockReturnValue({ setDrawer: mockSetDrawer, setSearchBox: mockSetSearchBox });

    const { getByTestId } = render(<AppBarMobile matches={true} />);

    // Click on the Search button
    fireEvent.click(getByTestId('search-button'));

    // Check if setSearchBox(true) is called
    expect(mockSetSearchBox).toHaveBeenCalledWith(true); // Line 28
  });
});
