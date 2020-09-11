import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './ProjectDetails/Navigation.scss';

class ReturnHome extends Component {
    render() {
        return (
            <Box display='flex' justifyContent='center'>
                <Box display="flex" className="home" onClick={() => window.location.href = '/'}>
                    <div className="returnText">Back to Home</div>
                </Box>
            </Box>
        )
    }
}

export default ReturnHome;