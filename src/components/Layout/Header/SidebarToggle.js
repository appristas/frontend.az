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
                    className={styles.toggle}
                    onClick={this.context.toggleSidebar}
                >
                    <div
                        className={`${styles.toggleBox} ${
                            this.context.sidebarActive ? styles.active : ''
                        }`}
                    >
                        <div />
                        <div />
                        <div />
                    </div>
                </button>
            </div>
        );
    }
}

export default SidebarToggle;
