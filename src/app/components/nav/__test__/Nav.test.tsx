import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Nav from '../nav';
import { navLinks } from '../nav';
import ScheduleButton from '../../schedule-button/schedule-button';
import NextLink from 'next/link';
import Link from 'next/link';

describe('Nav', () => {
  it('should render our logo', () => {
    render(<Nav />); // ARRANGE

    //ACT
    const logo = screen.getByTestId('nav-logo');

    expect(logo).toBeInTheDocument(); // ASSERT
  });

  it('tests that when a user click the logo it will route to home page', () => {
    const user = userEvent.setup();
    render(<Nav />, { wrapper: MemoryRouterProvider });
    user.click(screen.getByTestId('nav-logo'));
    expect(mockRouter.asPath).toEqual('/');
  });

  it('tests that a NextLink can be rendered', () => {
    render(<NextLink href='/example'>Example Link</NextLink>, {
      wrapper: MemoryRouterProvider,
    });
    fireEvent.click(screen.getByText('Example Link'));
    expect(mockRouter.asPath).toEqual('/example');
  });

  describe('Nav Links', () => {
    it('tests that when a user click the "About" link it will route to the "About" page', () => {
      render(<Link href={navLinks[1].href}>{navLinks[1].name}</Link>, {
        wrapper: MemoryRouterProvider,
      });
      fireEvent.click(screen.getByText('About'));
      expect(mockRouter.asPath).toEqual('/about');
    });

    it('tests that when a user click the "Clients" link it will route to the "Clients" page', () => {
      render(<Link href='/clients'>Clients</Link>, {
        wrapper: MemoryRouterProvider,
      });
      fireEvent.click(screen.getByText('Clients'));
      expect(mockRouter.asPath).toEqual('/clients');
    });
  });

  it('tests that when a user click the schedule button it will route to contact page', () => {
    render(<ScheduleButton />, {
      wrapper: MemoryRouterProvider,
    });
    fireEvent.click(screen.getByTestId('schedule-button'));
    expect(mockRouter.asPath).toEqual('/contact');
  });
});
