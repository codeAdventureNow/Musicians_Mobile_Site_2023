import renderer from 'react-test-renderer';
import { ClientCard } from '../client-card';

const deleteClient = (id: string) => {
  jest.fn();
};

const testClient = {
  id: '12456',
  data: {
    availability: 'Monday',
    email: 'bob@gmail.com',
    fullName: 'Robert Valens',
    instruments: ['Guitar'],
    leadSource: 'Facebooks',
    phone: 4089765423,
    zipCode: 90123,
    message: '',
    date: '12/23/23',
  },
};

describe('Client card', () => {
  it('should render the client card', () => {
    const clientCard = renderer
      .create(<ClientCard client={testClient} deleteClient={deleteClient} />)
      .toJSON();
    expect(clientCard).toMatchSnapshot();
  });
});
