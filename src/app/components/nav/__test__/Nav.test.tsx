import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Nav from '../nav';

const user = userEvent.setup();

describe('Nav', () => {
  it('should render the nav bar', () => {
    const { asFragment } = render(<Nav />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('tests that when a user click the logo it will route to home page', async () => {
    render(<Nav />, { wrapper: MemoryRouterProvider });
    user.click(screen.getByTestId('nav-logo'));
    await waitFor(() => expect(mockRouter.asPath).toEqual('/'));
  });

  it('tests that "About" link clicked routes to the "about" page', async () => {
    render(<Nav />, { wrapper: MemoryRouterProvider });
    user.click(screen.getByTestId('About-id'));
    await waitFor(() => expect(mockRouter.asPath).toEqual('/about'));
  });

  it('tests that when a user click the "schedule a free lesson" button it will route to "contact" page', async () => {
    render(<Nav />, {
      wrapper: MemoryRouterProvider,
    });
    user.click(screen.getByTestId('schedule-button'));
    await waitFor(() => expect(mockRouter.asPath).toEqual('/contact'));
  });
});
