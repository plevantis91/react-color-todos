import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

//smoke test
it('renders without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

//snapshot test
it('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});

it('adds a new box when form is submitted', () => {
  const mockAddBox = jest.fn();
  const { getByLabelText, getByText } = render(<NewBoxForm addBox={mockAddBox} />);

  fireEvent.change(getByLabelText('Width:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Height:'), { target: { value: '100' } });
  fireEvent.change(getByLabelText('Background Color:'), { target: { value: 'blue' } });
  fireEvent.click(getByText('Add Box'));

  expect(mockAddBox).toHaveBeenCalledWith(expect.objectContaining({
    width: '100',
    height: '100',
    backgroundColor: 'blue'
  }));
});
