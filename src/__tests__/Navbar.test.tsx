import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('renders logo and links to home page', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
