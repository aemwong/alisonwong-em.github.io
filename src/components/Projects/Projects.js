import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './Projects.scss';
import helloGif from '../../assets/img/helloAnimation.gif'
import introPic from '../../assets/img/landingImg.jpg'


class Landing extends Component {
    render() {
        return (
            <Box className="projectsContainer" display="flex" flexDirection="row-reverse" flexWrap="wrap"
                justifyContent="space-evenly" alignItems="center">
                Projects!
                </Box>
        )
    }
}

export default Landing;