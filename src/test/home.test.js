import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/home/home';
import store from '../redux/configureStore';

const MockedHome = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </Provider>
);

describe('Home Component', () => {
  it('renders succesfully', () => {
    render(<MockedHome />);
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toMatchInlineSnapshot(`
    <div
      class="ring"
      data-testid="spinner"
    />
    `);
  });
});
