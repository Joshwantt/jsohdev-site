'use client'

import Link from 'next/link';
import { Nav } from './_util_navigation';

function dropdownClicked(index) {

}

export default function Navbar() {
  return (
    <div className="bg-primary text-primary-content">
      <div className='navbar containerNav'>
      <div className="navbar-start px-12">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          [ home ]
        </Link>
      </div>
      <div className="navbar-end px-12">
        <div className='menu menu-horizontal'>
          {Object.keys(Nav).map((navKey, navIndex) => {
            const header = Nav[navKey];
            if (header.items.length > 0) {
            return (
              <li key={navIndex}>
                <details>
                  <summary className='text-xl hover'>
                    {header.headerNav}
                  </summary>
                  <ul className="p-2 bg-primary">
                    {header.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-xl'>
                        <Link href={item.href}>{item.nameNav}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )
            }
          })}
        </div>
    </div>
    </div>
    </div>
  );
}