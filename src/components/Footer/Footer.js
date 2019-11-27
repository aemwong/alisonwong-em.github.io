import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import '../Footer/Footer.scss';
import resume from '../../assets/img/AlisonWong_Resume.pdf'

class Footer extends Component {
    render() {
        return (
            <Box display="flex" flexDirection="row" justifyContent="flex-end" className="footerContainer" flexGrow={1} flexWrap="wrap">
                <Box mx={4} display="flex" className="credit"> Website created and designed by Alison Wong 
                <span role='img' aria-label="peace-sign" style={{paddingLeft: 5}}>✌</span></Box>
                <Box display="flex">
                    <a target="_blank" className="external" href="https://www.behance.net/aewong" rel="noopener noreferrer"> Behance</a>
                    <a target="_blank" className="external" href="https://github.com/aemwong" rel="noopener noreferrer">Github</a>
                    <a target="_blank" className="external" href="mailto:alison.wong@edu.uwaterloo.ca" rel="noopener noreferrer">Email</a>
                    <a target="_blank" className="external" href={resume} rel="noopener noreferrer">Resume</a>
                </Box>
            </Box>
        )
    }
}

export default Footer;