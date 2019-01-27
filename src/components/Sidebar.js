import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import styles from './sidebar.module.css';

import logo from '../assets/img/logo.svg';
import { strictEqual } from 'assert';

export default () => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt={data.site.siteMetadata.title} />
        </div>
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
              <Link activeClassName={styles.active} to="/events">
                Tədbirlər
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    )}
  />
);
