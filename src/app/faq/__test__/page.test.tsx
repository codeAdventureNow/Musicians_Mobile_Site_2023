import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

import FAQ from '../page';

describe('FAQ', () => {
  it('should have Frequently Asked text', () => {
    render(<FAQ />); //arrange

    const myElem = screen.getByText('Frequently Asked'); //act

    expect(myElem).toBeInTheDocument(); //assert
  });
});
