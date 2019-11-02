import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Landing.scss';
import helloGif from '../../assets/img/helloAnimation.gif'
import introPic from '../../assets/img/landingImg.jpg'


class Landing extends Component {
    render() {
        return (
            <Box className="landingContainer" display="flex" flexDirection="row-reverse" flexWrap="wrap"
                justifyContent="space-evenly" alignItems="center">
                <Box m={"2vw"} ml={0} className="halfContainer" display="flex" justifyContent="center">
                    <img src={introPic} id="introPic"></img>
                </Box>
                <Box m={"2vw"} display="flex" flexDirection="column" alignItems="center" className="halfContainer">

                    <img src={helloGif} id="helloAnimation"></img>
                    <div className="leftAlign title">I'm Alison <span role="img" aria-label="smiley-face">🤗</span></div>
                    <Box ml={"5vw"} ><div className="leftAlign">an aspiring product manager continually growing and welcoming new opportunities</div>
                        <br />
                        <div className="italic leftAlign">Currently in search of a Summer 2020 Product Internship</div></Box>
                </Box></Box>
        )
    }
}

export default Landing;