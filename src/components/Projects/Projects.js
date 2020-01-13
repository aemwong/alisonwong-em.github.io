import React, { Component } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import colors from "../../assets/sass/colors";
import StrumMaster from "../../assets/img/StrumMasterPreview.jpg";
import Coorporation from "../../assets/img/CoorpPreview.jpg";
import HandLettering from "../../assets/img/CalligPreview.jpg";
import PlanTrip from "../../assets/img/blaisePassenger/blaisepreview.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Projects.scss';


class Projects extends Component {
    render() {

        const projectTitles = [
            {
                id: 'planTrip',
                img: PlanTrip,
                title: 'Trip Request Redesign',
                subtitle: 'UI/UX · Web Development',
                url: '/projects/planTrip'
            },{
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
            },

        ]
        return (
            <Box className="projectsContainer" id="projects" display="flex" flexDirection="column" flexWrap="wrap" justifyItems="space-evenly">
                <Box alignSelf="center"><div className="italic" style={{ margin: '20px 30px' }}>What I've been up to recently...</div>
                </Box>
                {projectTitles.map((project) =>
                    <Paper key={project.id} style={{ borderRadius: '7px 0 0 7px', paddingRight: '20px' }} className="project"
                        onClick={() => window.location = project.url}>
                        <Box m={2} className="leftAlign" flexDirection="row" justifyContent="flex-start" display="flex" alignItems="center">
                            <img src={project.img} className="projectImg" alt="" />
                            <Box flexDirection="column" display="flex" justifyContent="center" m={2}>
                                <div style={{ color: colors.turquoise }}>{project.title}</div>
                                <div style={{ fontSize: '12pt' }}>{project.subtitle}</div>
                            </Box>
                            <Box className="rightAlign" flexGrow={1}>
                                <FontAwesomeIcon icon={faArrowCircleRight} color={colors.turquoise} />
                            </Box>
                        </Box>
                    </Paper>)

                }
            </Box>
        )
    }
}

export default Projects;