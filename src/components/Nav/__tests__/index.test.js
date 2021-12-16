// __tests__/Nav.test.js with hard coded categories
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();
it('renders', () => {
  render(<Nav
    categories={categories}
    setCurrentCategory={mockSetCurrentCategory}
    currentCategory={mockCurrentCategory}
    contactSelected={mockContactSelected}
    setContactSelected={mockSetContactSelected}
  />);
})

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(<Nav />);
  });

  it('renders', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot(); 
  });
})

describe('emoji is visible', () => {
  it('renders', () => {
    const { getByLabelText } = render(<Nav />);

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
})

describe('links are visible', () => {
  it('renders', () => {
    const { getByTestId } = render(<Nav />);

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });

})