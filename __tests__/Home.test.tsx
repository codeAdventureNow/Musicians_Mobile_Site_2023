import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

it('should have Docs text', () => {
  render(<Home />); //arrange

  const myElem = screen.getByText('Docs'); //act

  expect(myElem).toBeInTheDocument(); //assert
});
