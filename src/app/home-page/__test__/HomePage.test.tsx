import renderer from 'react-test-renderer';
import HomePage from '../page';
import { waitFor } from '@testing-library/react';

describe('Home page', () => {
  it('should render the "Home" page', async () => {
    await waitFor(() => {
      const homePage = renderer.create(<HomePage />).toJSON();
      expect(homePage).toMatchSnapshot();
    });
  });
});
