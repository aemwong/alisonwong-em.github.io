import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TulipLogo from '../../assets/img/tulipIcon.png';
import './WorkExp.scss';


class Projects extends Component {
    render() {

        const jobTitles = [
            {
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements'
            }, {
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements'
            }, {
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements'
            },

        ]
        return (
            <Box className="jobsContainer" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly" alignContent="center">
                <div className="italic" style={{ margin: '20px 0' }}>Some of my work experience...</div>
                {jobTitles.map((job) =>
                    <Box m={2} className="leftAlign" flexDirection="row" justifyContent="flex-start" display="flex" alignItems="center">
                        <img src={job.img} className="jobImg" />
                        <Box flexDirection="column" display="flex" justifyContent="center" m={2}>
                            <Box display="flex" flexDirection="row">
                                <div className="italic" style={{ color: colors.turquoise }}>{job.title},&nbsp;</div>
                                <div className="italic">{job.company}</div>
                            </Box>
                            <div style={{ fontSize: '12pt' }}>{job.subtitle}</div>
                        </Box>
                    </Box>)
                }
            </Box>
        )
    }
}

export default Projects;