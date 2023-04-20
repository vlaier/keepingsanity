import React from 'react';

const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="font-bold px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300">
      {children}
    </li>
  );
};

export default Badge;
