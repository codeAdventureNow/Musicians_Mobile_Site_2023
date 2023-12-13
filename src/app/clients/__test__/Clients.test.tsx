import renderer from 'react-test-renderer';
import Clients from '../page';

describe('It should render the "client" page', () => {
  it('should render the client component', () => {
    const clients = renderer.create(<Clients />).toJSON();
    expect(clients).toMatchSnapshot();
  });
});
