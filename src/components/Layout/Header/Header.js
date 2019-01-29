import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

import styles from './header.module.css';
import logo from '../../../assets/img/logo.svg';

import SidebarToggle from './SidebarToggle';
import LayoutContext from '../LayoutContext';

class Header extends Component {
    static contextType = LayoutContext;

    state = { sticky: false };

    stickyOnScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop >= 100) {
            this.setState({ sticky: true });
        } else {
            this.setState({ sticky: false });
        }
    };

    componentDidMount() {
        document.addEventListener('scroll', this.stickyOnScroll);
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.stickyOnScroll);
    }

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
                        <header
                            className={`${styles.header} ${
                                this.state.sticky ? styles.headerSticky : ''
                            }`}
                        >
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
