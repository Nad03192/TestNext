import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];


export default function NavLinks() {
  return (
    <nav className="hidden md:flex space-x-6">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-gray-600 hover:text-blue-600"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

