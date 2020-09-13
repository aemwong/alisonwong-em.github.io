
import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import './ProjectDetails/Navigation.scss';

class TopBackHome extends Component {
    render() {
        return (
            <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2}>
                <Box className="return" display='flex' justifyContent='center' alignItems="center" onClick={() => window.location.href = '/'}>
                    <div className="returnText">Back to Home</div>
                </Box>
            </Box>
        )
    }
}

export default TopBackHome;