import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Navbar = ({ links }: { links?: string[] }) => {
  const linksElement = links?.map((link) => (
    <li key={link}>
      <Link href={link} legacyBehavior>
        <a className="text-gray-400 font-semibold text-lg leading-7 mb-4">
          {link}
        </a>
      </Link>
    </li>
  ));
  return (
    <nav className="px-2 md:px-20 xl:px-40 mx-auto w-full flex items-center h-28 shadow shadow-blue-600/40 sticky t-0 justify-between">
      <Link href={'/'} className="p-4">
        <Image width={75} height={75} src={'/logo.png'} alt="logo" />
      </Link>
      <ul>{linksElement}</ul>
    </nav>
  );
};

export default Navbar;
