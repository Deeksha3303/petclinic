import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import {
  Product,
  ProductImage,
  ProductFavButton,
  ProductAddToCart,
  ProductMetaWrapper,
  ProductActionsWrapper,
} from './styles'; // Adjust the import path based on your actual component path

describe('Styled Components', () => {
  test('Product component styles', () => {
    const { container } = render(<Product />);
    const productElement = container.firstChild;
    
    // Test styles
    expect(productElement).toHaveStyle(`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `);
  });

  test('ProductImage component styles', () => {
    const { container } = render(<ProductImage src="example.jpg" />);
    const imageElement = container.firstChild;
    
    // Test styles
    expect(imageElement).toHaveStyle(`
      width: 100%;
      background: ${Colors.light_gray};
      padding: 10px;
    `);
  });

  test('ProductFavButton component styles', () => {
    const { container } = render(<ProductFavButton isfav />);
    const buttonElement = container.firstChild;
    
    // Test styles
    expect(buttonElement).toHaveStyle(`
      background: ${Colors.white};
      color: ${Colors.primary};
    `);
  });

  test('ProductAddToCart component styles', () => {
    const { container } = render(<ProductAddToCart show />);
    const buttonElement = container.firstChild;
    
    // Test styles
    expect(buttonElement).toHaveStyle(`
      width: 120px;
      fontSize: 12px;
      background: ${Colors.secondary};
      opacity: 0.9;
    `);
  });

  test('ProductMetaWrapper component styles', () => {
    const { container } = render(<ProductMetaWrapper />);
    const wrapperElement = container.firstChild;
    
    // Test styles
    expect(wrapperElement).toHaveStyle(`
      padding: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
    `);
  });

  test('ProductActionsWrapper component styles', () => {
    const { container } = render(<ProductActionsWrapper show />);
    const wrapperElement = container.firstChild;
    
    // Test styles
    expect(wrapperElement).toHaveStyle(`
      display: visible;
      position: absolute;
      right: 0;
      top: 20%;
    `);
  });
});
