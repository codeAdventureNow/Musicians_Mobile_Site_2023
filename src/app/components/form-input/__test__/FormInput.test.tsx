import FormInput from '../form-input';
import renderer from 'react-test-renderer';

describe('Form Input', () => {
  it('should render the Form', () => {
    const formInput = renderer.create(<FormInput />).toJSON();
    expect(formInput).toMatchSnapshot();
  });
});
