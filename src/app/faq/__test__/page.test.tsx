import { render, screen } from '@testing-library/react';
import FAQ from '../page';

it('should have Docs text', () => {
  render(<FAQ />); //arrange

  const myElem = screen.getByText('Frequently Asked'); //act

  expect(myElem).toBeInTheDocument(); //assert
});
