import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import "../Landing/Landing.scss";

class Landing extends Component {
    render() {
        return(
        <Box className="landingContainer" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Box display="flex" m={5}>
                Hello how are oyu !! <br/>
                Hello how are oyu !! <br/>
                Hello how are oyu !! <br/>
                </Box>
                <Box m={5}>
                    pic!! 
                </Box>

        </Box>

)
    }
}

export default Landing;