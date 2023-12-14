import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import About from '../page';
import userEvent from '@testing-library/user-event';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
const user = userEvent.setup();

describe('About', () => {
  // it('should render the "About" page', () => {
  //   const aboutPage = renderer.create(<About />).toJSON();
  //   expect(aboutPage).toMatchSnapshot();
  // });

  it('should render the "About" page', () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('tests that when a user click the "schedule a free lesson" button it will route to "contact" page', async () => {
    render(<About />, {
      wrapper: MemoryRouterProvider,
    });
    user.click(screen.getByTestId('schedule-button'));
    await waitFor(() => expect(mockRouter.asPath).toEqual('/contact'));
  });
});
