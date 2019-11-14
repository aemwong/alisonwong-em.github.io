import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import './Projects.scss';


class Projects extends Component {
    render() {
        return (
            <Box className="projectsContainer" display="flex" flexDirection="column" flexWrap="wrap">
                <div className="italic" style={{ margin: '20px 0' }}>What I've been up to recently...</div>
                <Paper style={{ borderRadius: '20px 0 0 20px', marginLeft: 'calc(5vw + 20px)', marginTop: '20px' }}>
                    <Box m={3} className="leftAlign">
                        <div style={{ color: colors.turquoise }}>
                            hi this is the first project</div>
                        <div>stufff </div>
                    </Box></Paper>

                    <Paper style={{ borderRadius: '20px 0 0 20px', marginLeft: 'calc(5vw + 20px)', marginTop: '20px'  }}>
                    <Box m={3} className="leftAlign">
                        <div style={{ color: colors.turquoise }}>
                            hi this is the first project</div>
                        <div>stufff </div>
                    </Box></Paper>
                    <Paper style={{ borderRadius: '20px 0 0 20px', marginLeft: 'calc(5vw + 20px)', marginTop: '20px'  }}>
                    <Box m={3} className="leftAlign">
                        <div style={{ color: colors.turquoise }}>
                            hi this is the first project</div>
                        <div>stufff </div>
                    </Box></Paper>


            </Box>
        )
    }
}

export default Projects;