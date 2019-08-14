import React from 'react';
import { Link } from 'gatsby';

import styles from './sidebar.module.css';

const SidebarNav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link activeClassName={styles.active} to="/">
                    Yazılar
                </Link>
            </li>
            <li>
                <Link activeClassName={styles.active} to="/videos">
                    Videolar
                </Link>
            </li>
            <li>
                <Link activeClassName={styles.active} to="/courses">
                    Kurslar
                </Link>
            </li>
            <li>
                <Link activeClassName={styles.active} to="/resources">
                    Resurslar
                </Link>
            </li>
            {/* <li>
                <Link activeClassName={styles.active} to="/events">
                    Tədbirlər
                </Link>
            </li> */}
        </ul>
    </nav>
);

export default SidebarNav;
