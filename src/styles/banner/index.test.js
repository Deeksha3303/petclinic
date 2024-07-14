import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For additional Jest matchers
import {
  BannerContainer,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerDescription,
  BannerShopButton,
} from './Banner.styles'; // Adjust the import path based on your actual component path

describe('Styled Components - Banner', () => {
  const mockImage = 'example.jpg';

  test('BannerContainer component styles', () => {
    const { container } = render(<BannerContainer />);
    const containerElement = container.firstChild;

    // Test styles
    expect(containerElement).toHaveStyle(`
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;
      paddding: 0px;
      background: ${Colors.light_gray};
    `);
  });

  test('BannerImage component styles', () => {
    const { container } = render(<BannerImage src={mockImage} />);
    const imageElement = container.firstChild;

    // Test styles
    expect(imageElement).toHaveStyle(`
      width: 500px;
    `);
  });

  test('BannerContent component styles', () => {
    const { container } = render(<BannerContent />);
    const contentElement = container.firstChild;

    // Test styles
    expect(contentElement).toHaveStyle(`
      display: flex;
      flex-direction: column;
      max-width: 420px;
      padding: 30px;
      justify-content: center;
    `);
  });

  test('BannerTitle component styles', () => {
    const { container } = render(<BannerTitle />);
    const titleElement = container.firstChild;

    // Test styles
    expect(titleElement).toHaveStyle(`
      line-height: 1.5;
      font-size: 72px;
      margin-bottom: 20px;
    `);
  });

  test('BannerDescription component styles', () => {
    const { container } = render(<BannerDescription />);
    const descriptionElement = container.firstChild;

    // Test styles
    expect(descriptionElement).toHaveStyle(`
      line-height: 1.25;
      letter-spacing: 1.25;
      margin-bottom: 3em;
    `);
  });

  test('BannerShopButton component styles', () => {
    const { container } = render(<BannerShopButton color="primary" />);
    const buttonElement = container.firstChild;

    // Test styles
    expect(buttonElement).toHaveStyle(`
      padding: 20px 0px;
      color: ${Colors.white};
      font-size: 16px;
      font-weight: bold;
    `);
  });
});
