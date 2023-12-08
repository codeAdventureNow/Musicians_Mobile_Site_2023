import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Nav from '../nav';
import renderer from 'react-test-renderer';

jest.mock('next/router', () => require('next-router-mock'));

describe('Nav', () => {
  it('should render the nav bar', () => {
    const navBar = renderer.create(<Nav />).toJSON();
    expect(navBar).toMatchSnapshot();
  });

  //not sure why this doesn't work when I refactor as async/await, or as a fireEvent
  it('tests that when a user click the logo it will route to home page', () => {
    const user = userEvent.setup();
    render(<Nav />, { wrapper: MemoryRouterProvider });
    user.click(screen.getByTestId('nav-logo'));
    expect(mockRouter.asPath).toEqual('/');
  });

  it('tests that nav link About when clicked routes to the about page', async () => {
    const user = userEvent.setup();
    render(<Nav />, { wrapper: MemoryRouterProvider });
    await user.click(screen.getByTestId('About-id'));
    expect(mockRouter.asPath).toEqual('/about');
  });

  it('tests that when a user click the schedule button it will route to contact page', async () => {
    const user = userEvent.setup();
    render(<Nav />, {
      wrapper: MemoryRouterProvider,
    });
    await user.click(screen.getByTestId('schedule-button'));
    expect(mockRouter.asPath).toEqual('/contact');
  });
});
