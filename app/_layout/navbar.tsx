import Link from 'next/link';
import { auth } from '../_util/auth/auth';
import LoginNav from './_components/loginNav';

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
  const session = await auth()

  return (
    <div className="bg-primary text-primary-content">
      <div className='navbar containerNav'>
        <div className="navbar-start">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            [ home ]
          </Link>
        </div>
        <div className="navbar-end">
          {
            !session?.user ? (
              <Link href='/api/auth/signin'>
                <button className="btn">Sign In</button>
              </Link>
            ) : (
              <LoginNav />
            )
          }
        </div>
      </div>
    </div>
  );
}