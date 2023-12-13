import renderer from 'react-test-renderer';
import ClientComponent from '../client-component';

describe('Client Component', () => {
  it('should render the client component', () => {
    const clientComponent = renderer.create(<ClientComponent />).toJSON();
    expect(clientComponent).toMatchSnapshot();
  });
});
