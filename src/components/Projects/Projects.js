import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import StrumMaster from "../../assets/img/StrumMasterPreview.jpg";
import './Projects.scss';


class Projects extends Component {
    render() {
        return (
            <Box className="projectsContainer" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly">
                <div className="italic" style={{ margin: '20px 0' }}>What I've been up to recently...</div>
                <Paper style={{ borderRadius: '7px 0 0 7px', marginLeft: 'calc(5vw + 20px)', marginTop: '20px' }}>
                    <Box m={3} className="leftAlign" flexDirection="row">
                        <div style={{ color: colors.turquoise }}>
                            hi this is the first project</div>
                        <div>stufff </div>
                    </Box>
                </Paper>

                <Paper style={{ borderRadius: '7px 0 0 7px' }} className="project">
                    <Box m={2} className="leftAlign" flexDirection="row" justifyContent="flex-start" display="flex" alignItems="center">
                        <img src={StrumMaster} className="projectImg" />
                        <Box flexDirection="column" display="flex" justifyContent="center" m={2}>
                            <div style={{ color: colors.turquoise }}>Strum Master</div>
                            <div style={{ fontSize: '12pt' }}>designing a modified guitar for recovering stroke patients </div>
                        </Box>

                    </Box>
                </Paper>
                <Paper style={{ borderRadius: '10px 0 0 10px', marginLeft: 'calc(5vw + 20px)', marginTop: '20px' }}>
                    <Box m={3} className="leftAlign">
                        <div style={{ color: colors.turquoise }}>
                            hi this is the first project</div>
                        <div>stufff </div>
                    </Box>
                </Paper>


            </Box>
        )
    }
}

export default Projects;