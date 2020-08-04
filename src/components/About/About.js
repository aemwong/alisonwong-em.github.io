import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './About.scss';
import aboutPic from '../../assets/img/aboutImg.jpg';
import square from '../../assets/img/square.svg';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import colors from "../../assets/sass/colors";

class About extends Component {

    render() {
        const theme = createMuiTheme({
            palette: {
                primary: { main: colors.turquoise }
            }
        })

        return (
            <ThemeProvider theme={theme}>
                <Box className="aboutContainer" id="about">
                    <Box className="picContainer" >
                        <img src={aboutPic} id="aboutPic" alt=""></img>
                        <img src={square} id="square" alt=""></img>
                    </Box>
                    <Box className="bioContainer">
                        <div className="leftAlign name">Alison Wong</div>
                        <div className="leftAlign">I’m a Systems Design Engineering student at the University of Waterloo (class of 2021) with an eye for design and a passion for development to create the best user experience for products.
                                <br /><br />
                            Outside of school and work, you might catch me singing with the <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/TheAcaBellas">UW AcaBellas</a>,
                            serving at <a className="hyperlink" target="_blank" href="https://www.uwccf.com/" rel="noopener noreferrer">UWCCF</a> or doodling <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aw.doodles/">“hello”</a> on pieces of paper.
                        </div>
                        <br />
                        <b>Looking for new grad opportunities in 2021!</b>
                    </Box>
                </Box>
            </ThemeProvider >)
    }
}

export default About;