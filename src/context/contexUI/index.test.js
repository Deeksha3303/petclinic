import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { UIprovider, UIcontext, ContexUi } from './UIprovider';

describe('UIprovider', () => {
  it('renders UIprovider component with children', () => {
    render(
      <UIprovider>
        <MockChildComponent />
      </UIprovider>
    );

    // Verify that children are rendered
    expect(screen.getByTestId('mock-child')).toBeInTheDocument();
  });

  it('provides context values to children', () => {
    const MockChildComponent = () => {
      const { drawer, setDrawer, searchBox, setSearchBox } = ContexUi();
      
      // Test context values
      expect(drawer).toBeFalsy();
      expect(typeof setDrawer).toBe('function');
      expect(searchBox).toBeFalsy();
      expect(typeof setSearchBox).toBe('function');

      return (
        <div data-testid="mock-child">
          Mock Child Component
        </div>
      );
    };

    render(
      <UIprovider>
        <MockChildComponent />
      </UIprovider>
    );

    // Verify that the child component receives context values
    expect(screen.getByTestId('mock-child')).toBeInTheDocument();
  });
});
