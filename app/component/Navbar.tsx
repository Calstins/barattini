'use client';
// Import the necessary modules and components
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/barattini-logo-black.png';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

// Define your navigation links
const links = [
  { name: 'Home', href: '/' },
  { name: 'Capsule', href: '/capsule' },
  { name: 'Ground', href: '/ground' },
  { name: 'Bean', href: '/bean' },
  { name: 'ESE Pods', href: '/ese-pods' },
];

// Navbar component
export default function Navbar() {
  // Get the current pathname using the usePathname hook
  const pathname = usePathname();

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        {/* Use the Next.js Link component for navigation */}
        <Link href="/">
          {/* Use the Next.js Image component for optimized images */}
          <Image src={Logo} alt="logo" className="h-[100px] w-[165px] p-4" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {/* Map through the links array to generate navigation items */}
          {links.map((link, index) => (
            <div key={index}>
              {/* Use the Next.js Link component for navigation */}
              <Link href={link.href}>
                <div
                  className={`text-lg font-semibold ${
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-gray-600 transition duration-300 hover:text-primary'
                  }`}
                >
                  {link.name}
                </div>
              </Link>
            </div>
          ))}
        </nav>
        {/* Cart Icon Card */}
        <div className="flex divide-x border-r sm:border-l">
          <Button
            variant={'outline'}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
