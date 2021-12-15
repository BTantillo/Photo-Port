import react from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

describe('About component', () => {
    // First Test
    it('renders', () => {
      render(<About />);
    });
    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    })
  })


afterEach(cleanup);
