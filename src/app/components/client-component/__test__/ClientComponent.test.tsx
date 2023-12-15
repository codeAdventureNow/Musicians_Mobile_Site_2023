import { render } from '@testing-library/react';
import ClientComponent from '../client-component';

describe('Client Component', () => {
  it('should render the "Client Componenent"', () => {
    const { asFragment } = render(<ClientComponent />);

    expect(asFragment()).toMatchSnapshot();
  });
});
