import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import Actions from './Actions';

describe('Actions Component', () => {
  test('renders ActionsAppMobile when matches is true', () => {
    const { getByTestId } = render(<Actions matches={true} />);
    const actionsAppMobileElement = getByTestId('actions-app-mobile');

    // Verify that ActionsAppMobile is rendered when matches is true
    expect(actionsAppMobileElement).toBeInTheDocument();
  });

  test('renders ActionsAppDesktop when matches is false', () => {
    const { getByTestId } = render(<Actions matches={false} />);
    const actionsAppDesktopElement = getByTestId('actions-app-desktop');

    // Verify that ActionsAppDesktop is rendered when matches is false
    expect(actionsAppDesktopElement).toBeInTheDocument();
  });

  test('renders three ListItemButton components', () => {
    const { getAllByRole } = render(<Actions matches={true} />);
    const listItemButtons = getAllByRole('button');

    // Verify that there are three ListItemButton components rendered
    expect(listItemButtons).toHaveLength(3);
  });
});
