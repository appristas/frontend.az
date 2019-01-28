import React, { Component } from 'react';
import { node } from 'prop-types';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import LayoutContext from './LayoutContext';

class Layout extends Component {
    state = { sidebarActive: false };

    toggleSidebar = () => {
        this.setState(prevState => ({ sidebarActive: !prevState.sidebarActive }));
    };

    render() {
        const { sidebarActive } = this.state;
        return (
            <LayoutContext.Provider value={{ sidebarActive, toggleSidebar: this.toggleSidebar }}>
                <Sidebar />
                <Header />
                <main role="main" className="main">
                    {this.props.children}
                </main>
            </LayoutContext.Provider>
        );
    }
}

Layout.propTypes = {
    children: node.isRequired
};

export default Layout;
