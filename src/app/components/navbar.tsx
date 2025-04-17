import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <nav className='w-full shadow-gray-500 border-b flex items-center'>
      <Link href='/'>
        <Image
          className='dark:invert w-auto h-24'
          src='/logo.png'
          alt='logo'
          width={180}
          height={38}
          priority
        />
      </Link>
    </nav>
  );
}

export { Navbar };
