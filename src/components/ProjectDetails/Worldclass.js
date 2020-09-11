import React, { Component } from 'react';
import ReturnHome from '../ReturnHome';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/worldclass/worldclassBanner.png';
import LessonPage from '../../assets/img/worldclass/Lesson.png';
import WorldclassHome from '../../assets/img/worldclass/World-filled.png';
import ERD from '../../assets/img/worldclass/ERD HackThe6ix.png';

import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class Worldclass extends Component {
    render() {
        return (
            <div className="projectDetContainer">

                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2}>
                    <Box className="return" display='flex' justifyContent='center' alignItems="center" onClick={() => window.location.href = '/'}>
                        <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                        <div className="returnText">Back to Home</div>
                    </Box>
                </Box>
                <div className="projectTitle"><span role="img" aria-label="globe">🌎</span> worldclass</div>
                <div className="description">Gamifying the remote learning experience</div>
                <div className="subtitle">Web Development · Database Design</div>
                <Box display="flex" justifyContent="center">
                    <img id="worldclassBanner" src={Banner} alt='worldclass'></img>
                </Box>

                <div className="header italic">Background</div>
                <div className="body">
                    This year, I had the chance to participate in <a className="hyperlink" target="_blank" href="https://www.hackthe6ix.com/" rel="noopener noreferrer">Hackthe6ix 2020</a> virtually. I haven’t participated in that many hackathons in the past, but this one was especially interesting because of its remote nature. I teamed up with a couple other hackers and we decided to focus on the area of technology for education (ed-tech). We found this to be especially relevant since most students are completing school virtually due to the pandemic.
                </div>
                <div className="header italic">What we made</div>
                <div className="body">
                    What we built is an online education web platform called <span role="img" aria-label="globe">🌎</span> worldclass. The platform is aimed at young students. By completing different lessons assigned from their teachers, students have a chance to customize and create their own “world”. This is to gamify the online learning experience, allowing students to earn prizes and customize their world and maintaining engagement for class content.
                </div>
                <br />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 28vw)', overflow: 'hidden', height: '100%' }}>
                        <img src={WorldclassHome} alt='' style={{ width: 'calc(150px + 28vw)', height: '100%', textAlign: "center" }} />
                    </Paper>
                    <div className="caption">Homepage</div>
                    <br />
                    <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 28vw)', overflow: 'hidden', height: '100%' }}>
                        <img src={LessonPage} alt='' style={{ width: 'calc(150px + 28vw)', height: '100%', textAlign: "center" }} />
                    </Paper>
                </Box>
                <div className="caption">Sample Lesson Page</div>
                <br />
                <div className="header italic">How was it built?</div>
                <div className="body">
                    Our database was built using PostgreSQL. We populated some mock data of teachers, students, lessons, questions, and answers. We built our endpoints and connected our database using NodeJS on Autocode, who was one of the hackathon sponsors. The front-end components were built using ReactJS and styled using CSS based on designs from Figma.
                </div>
                <br />
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 60vw)', overflow: 'hidden', height: '100%' }}>
                        <img src={ERD} alt='' style={{ width: 'calc(150px + 60vw)', height: '100%', textAlign: "center" }} />
                    </Paper>
                    <div className="caption">ERD of Database</div>
                </Box>
                <div className="header italic">Comments</div>
                <div className="body">
                    Due to limitations of a hackathon, we didn’t have the chance to completely finish the prototype. But I was still given the chance to create a database and learn about relational databases by using PostgreSQL. I also hadn’t touched React in a while so it was nice to have a refresher for that as well. The best part of the 36 hour event was that I got to sleep in my own bed, instead of a random couch somewhere on a university campus! It was still a fun time despite the virtual measures!
                <br /><br />
                For more details about the project, see the <a className="hyperlink" target="_blank" href="https://devpost.com/software/worldclass-o6zpeh" rel="noopener noreferrer">devpost</a>.

                </div>

                <br />
                <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mx={2} mt={5} mb={2}>
                    <Box display='flex' justifyContent='center' alignItems="center"
                        className="prevProj" onClick={() => window.location.href = '/projects/handLettering'}>
                        <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="sm" />
                        <div className="returnText">PREVIOUS:<br />Hand Lettering</div>
                    </Box>
                    <Box display='flex' justifyContent='center' alignItems="center"
                        className="nextProj" onClick={() => window.location.href = '/projects/planTrip'}>
                        <div className="returnText">NEXT:<br />Trip Request Redesign</div>
                        <FontAwesomeIcon icon={faArrowCircleRight} color={colors.turquoise} size="sm" />
                    </Box>
                </Box>
                <ReturnHome />
            </div>
        )
    }
}

export default Worldclass;