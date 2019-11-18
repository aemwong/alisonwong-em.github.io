import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import TulipLogo from '../../assets/img/tulipIcon.png';
import PivotalLogo from '../../assets/img/pivotallabsLogoIcon.png';
import OpentextLogo from '../../assets/img/opentextLogoIcon.jpg';
import AccedoLogo from '../../assets/img/AccedoLogoIcon.png';
import BlaiseLogo from '../../assets/img/b-rgb.png';
import './WorkExp.scss';


class Projects extends Component {
    render() {

        const jobTitles = [
            {
                img: BlaiseLogo,
                title: 'Software Developer',
                company: 'Blaise Transit',
                subtitle: 'implementing frontend of applications with the best ux practices'
            },{
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements'
            },{
                img: AccedoLogo,
                title: 'Product Integration Engineer',
                company: 'Accedo',
                subtitle: 'designing user interfaces to meet customer requirements'
            },  {
                img: OpentextLogo,
                title: 'Software Developer',
                company: 'Opentext Corporation',
                subtitle: 'enhancing internal framework functions improving product robustness'
            },
            {
                img: PivotalLogo,
                title: 'Agile Test Engineer',
                company: 'Pivotal Labs',
                subtitle: 'automating ui tests to catch regression bugs in continuous integration.'
            },

        ]
        return (
            <Box className="jobsContainer" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly" alignContent="center">
                <div className="italic" style={{ margin: '20px 0' }}>Some of my work experience...</div>
                {jobTitles.map((job) =>
                    <Box m={2} className="leftAlign" flexDirection="row" justifyContent="flex-start" display="flex" alignItems="center">
                        <img src={job.img} className="jobImg" />
                        <Box flexDirection="column" display="flex" justifyContent="center" m={3}>
                            <Box display="flex" flexDirection="row">
                                <div style={{ color: colors.turquoise }}>{job.title},&nbsp;</div>
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