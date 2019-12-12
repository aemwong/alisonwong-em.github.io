import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Header.scss';

class Header extends Component {
    scrollTo(location) {
        const HEIGHT = 100;
        const node = document.getElementById(location);
        console.log(node, node.scrollTop)
        if (node !== null) { 
            const elScrollPos = node.scrollTop;
            console.log(elScrollPos)
            // node.scrollIntoView({ block: 'start', behavior: 'smooth' })
            window.scrollTo(0, elScrollPos - HEIGHT);
        }
    }

    render() {
        return (
            <Box display="flex" flexDirection="row" justifyContent="flex-end" className="headerContainer"
                flexGrow={1} flexWrap="wrap">
                <Box display="flex">
                    <a className="nav" onClick={() => document.getElementById('projects').scrollIntoView()}>Projects</a>
                    <a className="nav" onClick={() => document.getElementById('experience').scrollIntoView()}>Experience</a>
                    <a className="nav" onClick={() => document.getElementById('about').scrollIntoView()}>About</a>
                </Box>
            </Box >
        )
    }
}

export default Header;