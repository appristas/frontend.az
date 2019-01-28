import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import styles from './sidebar.module.css';

import logo from '../../../assets/img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarNav from './SidebarNav';

import LayoutContext from '../LayoutContext';

export default class Sidebar extends Component {
    static contextType = LayoutContext;

    render() {
        return (
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
                    <>
                        <aside
                            className={`${styles.sidebar} ${
                                this.context.sidebarActive ? styles.sidebarActive : ''
                            }`}
                        >
                            <Link to="/" className={styles.logo}>
                                <img src={logo} alt={data.site.siteMetadata.title} />
                            </Link>
                            <SidebarNav />
                            <div className={styles.footer}>
                                <Link activeClassName={styles.active} to="/about">
                                    Layihə Haqqında
                                </Link>
                                <div className={styles.social}>
                                    <ul>
                                        <li>
                                            <a
                                                href="https://github.com/appristas/frontend.az"
                                                title="Github"
                                                target="_blank"
                                                rel="external noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={['fab', 'github']} />
                                                <span className="sr-only">Github</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://medium.com/frontend-azerbaijan"
                                                title="Medium"
                                                target="_blank"
                                                rel="external noopener noreferrer"
                                            >
                                                <FontAwesomeIcon icon={['fab', 'medium']} />
                                                <span className="sr-only">Medium</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </>
                )}
            />
        );
    }
}
