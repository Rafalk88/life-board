import { render, screen } from '@testing-library/react';
import { AppSidebar } from '@/components/app-sidebar';
import '@testing-library/jest-dom';

describe('AppSidebar', () => {
  it('renders logo and links to home page', () => {
    render(<AppSidebar />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const logoLink = screen.getByRole('link', { name: /logo/i });
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders all sidebar items with correct titles and links', () => {
    render(<AppSidebar />);

    const menuItems = [
      { title: 'Home', url: '#' },
      { title: 'Cele i postępy', url: '#' },
      { title: 'Oferty pracy', url: '#' },
      { title: 'Budżet i Finanse', url: '#' },
      { title: 'Poduszka bezpieczeństwa', url: '#' },
      { title: 'Notatki i refleksje', url: '#' },
    ];

    menuItems.forEach(({ title, url }) => {
      const link = screen.getByRole('link', { name: title });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', url);
    });
  });
});
