import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/StrumMasterBanner.jpg';
import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class StrumMaster extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{ borderRadius: '10px', padding: '15px 20px' }} >
                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2} className="return">
                        <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="xs" />
                        <div className="returnText" onClick={() => window.location.href = '/' }>Back to Home</div>
                    </Box>
                    <br/>
                <div className="projectTitle">Strum Master</div>
                <div className="subtitle">Designing a modified guitar for recovering stroke patients.</div>
                <img id="bannerImg" src={Banner}></img>
                <div className="body">

                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                 printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
                  five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was 
                  popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more r
                  ecently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </div>
                    <br/>
                </Paper>
            </div>
        )
    }
}

export default StrumMaster;