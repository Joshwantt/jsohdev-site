import Link from 'next/link';
import styles from '../styles/utils.module.css';
import { Nav } from '../util/navigation';

export default function Navbar() {
    return (
        <div className="navbar bg-primary text-primary-content px-24">
            <div className="flex-1">
                
                <Link className="btn btn-ghost normal-case text-xl" href="/">[ home ]</Link>
            </div>
            <div className={
                styles.navbuttons
            }>
                <ul className="menu menu-horizontal px-1">
                    {
                    Nav.map((header,navIndex) => (
                        <li key={navIndex}>
                            <a> {
                                header.headerNav
                            }
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-primary">
                                {
                                header.items.map((item,itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link href={
                                            item.href
                                        }>
                                            {
                                            item.nameNav
                                        }</Link>
                                    </li>
                                ))
                            } </ul>
                        </li>
                    ))
                } </ul>
            </div>
        </div>
    )
}
