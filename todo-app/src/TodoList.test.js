import {render} from '@testing-library/react';
import TodoList from './TodoList';

//smoke test
it('renders without crashing', () => {
    render(<TodoList />);
    }
);

//snapshot test
it('matches snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
    }
);  

