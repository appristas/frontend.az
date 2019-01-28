import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.css';
import logo from '../../assets/img/logo.svg';

class SidebarToggle extends Component {
    state = { active: false };

    toggleSidebar = e => {
        e.preventDefault();
        this.setState(prevState => ({ active: !prevState.active }));
    };
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query HeaderbarQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => (
                    <header className={styles.header}>
                        <div className={styles.toggleCol}>
                            <button
                                type="button"
                                className={`${styles.toggle} ${
                                    this.state.active ? styles.active : ''
                                }`}
                                onClick={this.toggleSidebar}
                            >
                                <div />
                                <div />
                                <div />
                            </button>
                        </div>
                        <Link to="/" className={styles.logo}>
                            <img src={logo} alt={data.site.siteMetadata.title} />
                        </Link>
                    </header>
                )}
            />
        );
    }
}

export default SidebarToggle;
