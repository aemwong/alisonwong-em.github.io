import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import colors from '../assets/sass/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './ProjectDetails/ProjectDetails.scss';

class ReturnHome extends Component {
    render() {
        return (
            <Box display='flex' justifyContent='center'>
                <Box display="flex" className="home" onClick={() => window.location.href = '/'}>
                    <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                    <div className="returnText">Back to Home</div>
                </Box>
            </Box>
        )
    }
}

export default ReturnHome;