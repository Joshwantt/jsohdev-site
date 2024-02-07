import Link from 'next/link';
import { auth } from '../_util/auth/auth';

const loginNav = [
  {
    title: 'Devices',
    items: [
      {
        title: 'Register New',
        link: '/devices/register'
      },
      {
        title: 'View All',
        link: '/devices/view/all'
      },
    ]
  },
  {
    title: 'Account',
    items: [
      {
        title: 'Options',
        link: '/user/options'
      },
      {
        title: 'Sign Out',
        link: '/api/auth/signout'
      },
    ]
  }
]

export default async function Navbar() {
  const session = await auth();

  return (
    <div className="bg-primary text-primary-content">
      <div className='navbar containerNav'>
        <div className="navbar-start px-12">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            [ home ]
          </Link>
        </div>
        <div className="navbar-end px-12">
          {
            !session ? (
              <Link href='/api/auth/signin'>
                <button className="btn">Sign In</button>
              </Link>
            ) : (
              <div>
                {loginNav.map((header, headerIndex) => (
                  <div className="dropdown dropdown-hover dropdown-end" key={headerIndex}>
                    <div tabIndex={0} role="button" className="btn m-1 bg-primary btn-ghost">{header.title}</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-primary rounded-box w-52">
                      {header.items.map((item, itemIndex) => (
                        <li key={itemIndex} className=''>
                          <Link href={item.link}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}