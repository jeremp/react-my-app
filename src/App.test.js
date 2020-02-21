import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders "another stuff" item', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/another stuff/i);
  expect(linkElement).toBeInTheDocument();
});
