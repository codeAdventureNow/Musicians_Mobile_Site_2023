import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Nav from '../nav';

describe('Nav', () => {
  it('should render our logo', () => {
    render(<Nav />); // ARRANGE

    //ACT
    const logo = screen.getByTestId('nav-logo');

    expect(logo).toBeInTheDocument(); // ASSERT
  });

  it('tests route changes of logo to home page', () => {
    const user = userEvent.setup();
    render(<Nav />, { wrapper: MemoryRouterProvider });
    user.click(screen.getByTestId('nav-logo'));
    expect(mockRouter.asPath).toEqual('/');
  });
});
