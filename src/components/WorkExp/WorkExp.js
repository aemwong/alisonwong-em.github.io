import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import colors from "../../assets/sass/colors";
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
                subtitle: 'implementing frontend of applications with the best ux practices',
                id: 'blaise'
            },{
                img: TulipLogo,
                title: 'Product Manager Intern',
                company: 'Tulip Retail',
                subtitle: 'improving existing modules to better meet customer requirements',
                id: 'tulip'
            },{
                img: AccedoLogo,
                title: 'Product Integration Engineer',
                company: 'Accedo',
                subtitle: 'designing user interfaces to meet customer requirements',
                id: 'accedo'
            },  {
                img: OpentextLogo,
                title: 'Software Developer',
                company: 'Opentext Corporation',
                subtitle: 'enhancing internal framework functions improving product robustness',
                id: 'opentext'
            },
            {
                img: PivotalLogo,
                title: 'Agile Test Engineer',
                company: 'Pivotal Labs',
                subtitle: 'automating ui tests to catch regression bugs in continuous integration.',
                id: 'pivotal'
            },

        ]
        return (
            <Box className="jobsContainer" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly" alignContent="center">
                <div className="italic" style={{ margin: '20px 0' }}>Some of my work experience...</div>
                {jobTitles.map((job) =>
                    <Box key={job.id} m={2} className="job leftAlign" justifyContent="flex-start" display="flex" alignItems="center">
                        <img src={job.img} className="jobImg" alt=""/>
                        <Box flexDirection="column" display="flex" justifyContent="center" m={3}>
                            <Box display="flex" className="jobDetails">
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