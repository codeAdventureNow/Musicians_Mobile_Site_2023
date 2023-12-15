import Clients from '../page';
import { render } from '@testing-library/react';

describe('Clients', () => {
  it('should render the "Clients" page', () => {
    const { asFragment } = render(<Clients />);

    expect(asFragment()).toMatchSnapshot();
  });
});
