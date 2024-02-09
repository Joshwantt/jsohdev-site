'use client'

import Link from 'next/link';
import { useState } from 'react';

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

export default function LoginNav() {
    const [openId, setOpenId] = useState(null);

    const toggleDetails = (headerIndex) => {
        setOpenId(headerIndex === openId ? null : headerIndex);
    };

    const handleCloseDropdown = () => {
        setOpenId(null);
    };

    return (
        <div className="flex flex-row">
            {loginNav.map((header, headerIndex) => (
                <div className="dropdown dropdown-end" key={headerIndex}>
                    <div tabIndex={headerIndex} role="button" className="btn btn-ghost rounded-btn" onClick={() => toggleDetails(headerIndex)}>
                        {header.title}
                    </div>
                    <ul className={`menu dropdown-content z-50 shadow bg-primary text-primary-content rounded-box w-52 ${openId === headerIndex ? 'block' : 'hidden'}`}>
                        {header.items.map((item, itemIndex) => (
                            <li className='z-50' key={itemIndex}>
                                <Link href={item.link} onClick={handleCloseDropdown}> {item.title} </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}