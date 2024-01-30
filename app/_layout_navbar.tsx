import Link from 'next/link';
import { Nav } from './_util_navigation';

export default function Navbar() {
  return (
    <div className="bg-primary text-primary-content">
      <div className="containerNav flex justify-between">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          [ home ]
        </Link>
        <div key='dropdowns'>
          {Object.keys(Nav).map((navKey, navIndex) => {
            const header = Nav[navKey];
            if (header.items.length > 0) {
            return (
              <div className='menu menu-horizontal'>
              <li key={navIndex}>
                  <Link href={header.link}>
                    {header.headerNav}
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul className="p-2 bg-primary">
                    {header.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='z-50'>
                        <Link href={item.href}>{item.nameNav}</Link>
                      </li>
                    ))}
                  </ul>
              </li>
              </div>
            )
            }
          })}
        </div>
      </div>
    </div>
  );
}