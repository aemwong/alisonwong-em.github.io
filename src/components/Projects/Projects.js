import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import StrumMaster from "../../assets/img/StrumMasterPreview.jpg";
import Coorporation from "../../assets/img/CoorpPreview.jpg";
import HandLettering from "../../assets/img/CalligPreview.jpg";
import PlanTrip from "../../assets/img/blaisePassenger/blaisepreview.jpg";
import './Projects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

class Projects extends Component {
    render() {
        const projectTitles = [
            {
                id: 'planTrip',
                img: PlanTrip,
                title: 'Trip Request Redesign',
                subtitle: 'UI/UX · Web Development',
                url: '/projects/planTrip'
            }, {
                id: 'strumMaster',
                img: StrumMaster,
                title: 'Strum Master',
                subtitle: 'Product Design · User Testing · Development',
                url: '/projects/strumMaster'
            },
            {
                id: 'coorporation',
                img: Coorporation,
                title: 'Co-orporation!',
                subtitle: 'Prototyping · User Testing',
                url: '/projects/coorporation'
            },
            {
                id: 'handLettering',
                img: HandLettering,
                title: 'Hand Lettering',
                subtitle: 'Graphic Design',
                url: '/projects/handLettering'
            }

        ]
        return (
            <Box className="projectsContainer" id="projects" display="flex" flexDirection="column" flexWrap="wrap"
                justifyItems="space-evenly" alignItems="center" >
                <div className="italic" style={{ margin: '20px 30px' }}>What I've been up to recently...</div>
                <Box className="projectGrid" display="flex" flexWrap="wrap" justifyContent="center">
                    {projectTitles.map((project) =>
                        <Box display="flex" key={project.id} >
                            <Paper className="project" style={{borderRadius: '7px'}}
                                onClick={() => window.location = project.url} elevation={0}>
                                <Box m={2} className="leftAlign" flexDirection="row" justifyContent="flex-start" display="flex" alignItems="center">
                                    <img src={project.img} className="projectImg" alt="" />
                                    <Box flexDirection="column" display="flex" justifyContent="center" m={2}>
                                        <div style={{ color: colors.turquoise }}>{project.title}</div>
                                        <div style={{ fontSize: '12pt' }}>{project.subtitle}</div>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>)

                    }
                    <Box display="flex">
                            <Paper className="project"
                                onClick={() => window.location.href = 'https://www.behance.net/aewong'} elevation={0}>
                                <Box m={2} className="leftAlign" flexDirection="row" justifyContent="space-between" display="flex" alignItems="center">
                                        <div style={{ color: colors.turquoise }}>See more of my projects on Behance!</div>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} color={colors.turquoise} />
                                </Box>
                            </Paper>
                        </Box>
                    </Box>
            </Box>
        )
    }
}

export default Projects;