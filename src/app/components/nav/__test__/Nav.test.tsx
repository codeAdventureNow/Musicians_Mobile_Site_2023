import { render, screen } from '@testing-library/react';
import Nav from '../nav';

describe('Nav', () => {
  it('should render "Dave" as a heading', async () => {
    render(<Nav />); // ARRANGE

    //ACT
    const header = screen.getByRole('heading', {
      name: 'Dave',
    });

    expect(header).toBeInTheDocument(); // ASSERT
  });
});
