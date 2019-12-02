import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class ProjectDetails extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{ borderRadius: '10px', padding: '15px 20px' }} >
                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2} className="return">
                        <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="xs" />
                        <div className="returnText">Back to Projects</div>
                    </Box>
                    <br/>
                <div className="title">Strum Master</div>
                <div className="subtitle">Designing a modified guitar for recovering stroke patients.</div>
                    <br/>
                </Paper>
            </div>
        )
    }
}

export default ProjectDetails;