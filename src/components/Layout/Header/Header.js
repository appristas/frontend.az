import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.css';
import logo from '../../../assets/img/logo.svg';

import SidebarToggle from './SidebarToggle';
import LayoutContext from '../LayoutContext';

class Header extends Component {
    static contextType = LayoutContext;

    state = { active: false };

    toggleSidebar = e => {
        e.preventDefault();
        this.setState(prevState => ({ active: !prevState.active }));
    };
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query HeaderQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => (
                    <>
                        <SidebarToggle />
                        <header className={styles.header}>
                            <Link to="/" className={styles.logo}>
                                <img src={logo} alt={data.site.siteMetadata.title} />
                            </Link>
                        </header>
                    </>
                )}
            />
        );
    }
}

export default Header;
