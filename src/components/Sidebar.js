import React from 'react';

import styles from './sidebar.module.css';

export default () => (
  <aside className={styles.sidebar}>
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="">Yazılar</a>
        </li>
        <li>
          <a href="">Videolar</a>
        </li>
        <li>
          <a href="">Kurslar</a>
        </li>
        <li>
          <a href="">Tədbirlər</a>
        </li>
      </ul>
    </nav>
  </aside>
);
