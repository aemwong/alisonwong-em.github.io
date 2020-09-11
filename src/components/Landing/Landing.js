import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Landing.scss';
import helloGif from '../../assets/img/helloAnimation.gif'
import introPic from '../../assets/img/landingImg.jpg'
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import colors from "../../assets/sass/colors";
import resume from "../../assets/files/AlisonWong_Resume.pdf";

class Landing extends Component {
    render() {
        const theme = createMuiTheme({
            palette: {
                primary: { main: colors.turquoise }
            }
        })

        return (
            <ThemeProvider theme={theme}>
                <Box className="landingContainer" id="home">
                    <Box m={"2vw"} ml={0} className="halfContainer" display="flex" justifyContent="center">
                        <img src={introPic} id="introPic" alt=""></img>
                    </Box>
                    <Box m={"2vw"} display="flex" flexDirection="column" className="halfContainer" id="leftContainer">

                        <img src={helloGif} id="helloAnimation" alt=""></img>
                        <Box className="leftBody">
                            <div className="leftAlign">I’m <b>Alison Wong</b>, a product manager continually striving for the best solutions and seeking to learn more through every experience
                            <br /><br />
                                <b>In search of new grad opportunities in 2021</b><br />
                                <a target="_blank" className="hyperlink" href="mailto:alisonwong.em@gmail.com" rel="noopener noreferrer">Contact me</a> so we can chat!
                            <span role="img" aria-label="smiley-face"> 😊</span>
                                <br></br>

                            </div>
                        </Box>
                        <br />
                        <Box >
                            <Button variant="outlined" color="primary" id="resumeButton" target="_blank" href={resume}>View Resume</Button>
                        </Box>
                    </Box>
                </Box>
            </ThemeProvider>)
    }
}

export default Landing;