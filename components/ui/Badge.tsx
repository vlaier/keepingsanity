import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="text-base font-bold px-4 py-0.5 rounded-full bg-gray-700 text-gray-300 w-fit">
      {children}
    </li>
  );
};

export default Badge;
