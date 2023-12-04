import { render, screen } from '@testing-library/react';
import FAQ from '../page';

describe('FAQ', () => {
  it('should have Frequently Asked text', () => {
    render(<FAQ />); //arrange

    const myElem = screen.getByText('Frequently Asked'); //act

    expect(myElem).toBeInTheDocument(); //assert
  });
});
