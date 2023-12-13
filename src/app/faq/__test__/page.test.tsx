import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import FAQ from '../page';

describe('FAQ', () => {
  it('should render the "FAQ" page', () => {
    const faq = renderer.create(<FAQ />).toJSON();
    expect(faq).toMatchSnapshot();
  });

  it('should have Frequently Asked text', () => {
    render(<FAQ />); //arrange

    const myElem = screen.getByText('Frequently Asked'); //act

    expect(myElem).toBeInTheDocument(); //assert
  });
});
