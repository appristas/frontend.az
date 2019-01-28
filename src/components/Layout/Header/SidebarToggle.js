import React, { Component } from 'react';

import styles from './header.module.css';
import LayoutContext from '../LayoutContext';

class SidebarToggle extends Component {
    static contextType = LayoutContext;

    render() {
        return (
            <div className={styles.toggleCol}>
                <button
                    type="button"
                    className={`${styles.toggle} ${
                        this.context.sidebarActive ? styles.active : ''
                    }`}
                    onClick={this.context.toggleSidebar}
                >
                    <div />
                    <div />
                    <div />
                </button>
            </div>
        );
    }
}

export default SidebarToggle;
