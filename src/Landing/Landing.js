import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import '../Landing/Landing.scss';
import helloGif from '../assets/img/helloAnimation.gif'
import introPic from '../assets/img/landingImg.jpg'


class Landing extends Component {
    render() {
        return (
            <Box className="landingContainer" display="flex" flexDirection="row-reverse" flexWrap="wrap"
                justifyContent="space-evenly" alignItems="center">
                <Box m={5} ml={1} className="halfContainer" >
                <img src={introPic} id="introPic"></img>
                </Box>
                {/* <Box display="flex" m={5} flexDirection="row" justifyContent="center" className="halfContainer"> */}
                <Box m={5} display="flex" flexDirection="column"  alignItems="center" className="halfContainer">
                    
                    <img src={helloGif} id="helloAnimation"></img><br />
                    <div className="title">I'm Alison </div>
                    <div>a product manager continually growing and welcoming new opportunities</div>
                    <br/>
                    <div className="italic">Currently in search of a Summer 2020 Product Internship</div>
                </Box></Box>

            // </Box>

        )
    }
}

export default Landing;