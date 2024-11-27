import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Team To-Do List header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Team To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});