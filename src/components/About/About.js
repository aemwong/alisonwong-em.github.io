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
                <Box className="aboutContainer" display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-evenly" alignItems="center" >
                    <Box m={"2vw"} ml={0} className="picContainer" display="flex" justifyContent="center">
                        <img src={aboutPic} id="aboutPic" alt=""></img>
                        <img src={square} id="square" alt=""></img>
                    </Box>
                    <Box my={"1vw"} mx={"0.5vw"} display="flex" flexDirection="column" alignItems="flex-start" className="bioContainer">
                        <div className="leftAlign name">Alison Wong</div>
                        <div className="leftAlign">I’m a Systems Design Engineering student at the University of Waterloo with an eye for design and a passion for development to create the best user experience for products.
                                <br /><br />
                            Outside of school and work, you might catch me singing with the <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/user/TheAcaBellas">UW AcaBellas</a>, 
                            serving at <a className="hyperlink" target="_blank" href="https://www.uwccf.com/" rel="noopener noreferrer">UWCCF</a> or doodling <a className="hyperlink" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aw.doodles/">“hello”</a> on pieces of paper.
                        </div>
                        <br />
                        <div className="italic leftAlign">Currently, I’m looking for a 4-month internship for the Summer 2020 term in the Product Management field.</div>
                    </Box>
                </Box>
            </ThemeProvider >)
    }
}

export default About;