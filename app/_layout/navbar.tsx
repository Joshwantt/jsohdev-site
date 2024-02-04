import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="bg-primary text-primary-content">
      <div className='navbar containerNav'>
      <div className="navbar-start px-12">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          [ home ]
        </Link>
      </div>
      {/* <div className="navbar-end px-12">
          {Object.keys(Nav).map((navKey, navIndex) => {
            const header = Nav[navKey];
            if (header.items.length > 0) {
            return (
              <div className="dropdown dropdown-hover">
                <Link href={header.link}>
                <div tabIndex={0} role="button" className="btn m-1 bg-primary btn-ghost normal-case text-xl">{header.headerNav}</div>
                </Link>
                <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-primary rounded-box w-52">
                    {header.items.map((item, itemIndex) => (
                      <li key={itemIndex} className='text-xl'>
                        <Link href={item.href}>{item.nameNav}</Link>
                      </li>
                    ))}
                  </ul>
              </div>
            )
            }
          })}
        </div> */}
    </div>
    </div>

  );
}