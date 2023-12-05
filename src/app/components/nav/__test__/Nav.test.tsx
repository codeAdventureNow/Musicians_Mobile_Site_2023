import { render, screen, fireEvent } from '@testing-library/react';
import Nav from '../nav';

describe('Nav', () => {
  it('should render our logo', () => {
    render(<Nav />); // ARRANGE

    //ACT
    const logo = screen.getByTestId('nav-logo');

    expect(logo).toBeInTheDocument(); // ASSERT
  });
});
