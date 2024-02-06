import Link from 'next/link';
import { auth } from '../_util/auth/auth';

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
              <pre>{'Welcome '+session.user.name}</pre>
            )
          }
        </div>
      </div>
    </div>
  );
}