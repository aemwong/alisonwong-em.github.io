import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import '../Footer/Footer.scss';
import resume from '../../assets/files/AlisonWong_Resume.pdf'

class Footer extends Component {
    render() {
        return (
            <Box className="footerContainer" >
                <Box display="flex" className="credit"> Website created and designed by Alison Wong 
                <span role="img" aria-label="smiley-face" id="emoji"> 🤗</span></Box>
                <Box display="flex">
                    <a target="_blank" className="external" href="https://www.behance.net/aewong" rel="noopener noreferrer"> Behance</a>
                    <a target="_blank" className="external" href="https://github.com/alisonwong-em" rel="noopener noreferrer">Github</a>
                    <a target="_blank" className="external" href="mailto:alison.wong@edu.uwaterloo.ca" rel="noopener noreferrer">Email</a>
                    <a target="_blank" className="external" href={resume} rel="noopener noreferrer">Resume</a>
                </Box>
            </Box>
        )
    }
}

export default Footer;