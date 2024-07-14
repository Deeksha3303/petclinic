import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import SingleProductDesktop from './SingleProductDesktop';

describe('SingleProductDesktop Component', () => {
  const mockProduct = {
    name: 'Example Product',
    price: 99.99,
    image: 'example.jpg',
  };

  test('renders product details', () => {
    const { getByText, getByAltText } = render(
      <SingleProductDesktop product={mockProduct} matches={true} />
    );

    // Test product name and price
    expect(getByText(mockProduct.name)).toBeInTheDocument();
    expect(getByText($${mockProduct.price.toFixed(2)})).toBeInTheDocument();

    // Test product image
    expect(getByAltText(mockProduct.name)).toHaveAttribute('src', mockProduct.image);
  });

  test('shows add to cart button on mouse enter', () => {
    const { getByText, getByTestId } = render(
      <SingleProductDesktop product={mockProduct} matches={true} />
    );

    // Initially, the add to cart button should not be visible
    expect(getByText('BOOK')).not.toBeVisible();

    // Trigger mouse enter event
    fireEvent.mouseEnter(getByTestId('product'));

    // After mouse enter, the add to cart button should be visible
    expect(getByText('BOOK')).toBeVisible();

    // Trigger mouse leave event
    fireEvent.mouseLeave(getByTestId('product'));

    // After mouse leave, the add to cart button should not be visible again
    expect(getByText('BOOK')).not.toBeVisible();
  });
});
