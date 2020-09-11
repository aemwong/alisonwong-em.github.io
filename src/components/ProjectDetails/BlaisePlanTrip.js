import React, { Component } from 'react';
import ReturnHome from '../ReturnHome';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/blaisePassenger/blaiseBanner.jpg';
import OriginalDesign from '../../assets/img/blaisePassenger/Plan a Trip original.jpg';
import Comp1 from '../../assets/img/blaisePassenger/IMG_0386.PNG';
import Comp2 from '../../assets/img/blaisePassenger/IMG_0387.PNG';
import Comp3 from '../../assets/img/blaisePassenger/IMG_0388.PNG';
import EnMockup from '../../assets/img/blaisePassenger/enMockup.png';
import FrMockup from '../../assets/img/blaisePassenger/frMockup.png';
import RedesignGif1 from '../../assets/img/blaisePassenger/Redesign1.gif';
import RedesignGif2 from '../../assets/img/blaisePassenger/Finaliteration.gif';

import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class BlaisePlanTrip extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{ padding: '15px' }} >

                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2}>
                        <Box className="return" display='flex' justifyContent='center' alignItems="center" onClick={() => window.location.href = '/'}>
                            <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                            <div className="returnText">Back to Home</div>
                        </Box>
                    </Box>
                    <div className="projectTitle">Trip Request Redesign</div>
                    <div className="description">Improving the user experience of planning a trip</div>
                    <div className="subtitle">UI/UX · Web Development · Competitive Analysis · User Testing</div>
                    <Box display="flex" justifyContent="center">
                        <img id="bannerImg" src={Banner} alt='Blaise Plan a Trip'></img>
                    </Box>
                    <div className="header italic">Background</div>
                    <div className="body">
                        For four months in the fall of 2019, I was able to work as a Software Developer for Blaise Transit. Blaise is driving the public to make better use of buses by creating a software platform that will enable existing transit agencies to run on-demand bus services. I had the opportunity to work on multiple platforms while working there, one of which was the Blaise Passenger App, a web-based mobile application.
                    </div>

                    <div className="header italic">Goal</div>
                    <div className="body">
                        The existing “Plan a Trip” page was created to demonstrate a working model of how the application worked. However, it was clear to the team that the screen was not designed with the best UX practices. This is evident based on competitor research and industry standards. So, we went back to the drawing board to redesign the screen to produce a minimum viable product and also to create a better experience for our users.
                    </div>

                    <br />
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Paper style={{ textAlign: 'center', width: 'calc(110px + 10vw)', height: '100%' }}>
                            <img src={OriginalDesign} alt='Original Screen' style={{ width: 'calc(100px + 10vw)', height: '100%', margin: 2 }}></img>
                        </Paper>
                        <div className="caption">Original Screen (shown in French version of application)</div>
                    </Box>

                    <div className="header italic">Analysis</div>
                    <div className="body">
                        The first task was to reduce the number of fields on the screen because the length of a form will deter users from completing it. We removed both the return and repeat trip option as these would not be features included in our Minimum Viable Product (MVP). As a next step, we took a look at other ride-hailing applications for some design inspiration!
                    <br /><br />
                        The three major applications that we analysed were Google Maps, Uber, and Lyft. However, these apps do not serve the same purpose as Blaise, so their design decisions were used to analyze and reframe for our own users.
                    </div>
                    <br />

                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={Comp1} alt='Competitor 1' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center" }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={Comp2} alt='Competitor 2' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center" }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={Comp3} alt='Competitor 3' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center" }} />
                        </Paper>
                    </Box>
                    <div className="caption">Comparing request pages on existing applications</div>

                    <br />
                    <div className="body">
                        The main difference found between the three above applications and Blaise was the “real-time” factor. Any user opening Google Maps, Uber, or Lyft expect to have results returned closest to the present time. Another difference was that we required both an arrival and departure time in order for a trip request to be successful.
                        <br /><br />

                        It was evident at this point that 4 of the time/date fields could easily be reduced to 2 by combining the separate date and time fields into one. However, based on existing applications, the origin and destination fields made more sense at the top of the screen, as users open the page expecting to enter their locations. Similar to the existing applications, we would auto-generate the origin field to the user’s current location. Since trips were required to be made 30 minutes in advance, the departure time would automatically be set to 30 minutes after the current time.

                    <br />
                        <br />
                        The following are mock-ups of the new “Plan a Trip” screen based on new colours that had been chosen for Blaise’s rebranding. Keep in mind that the return feature was created for a visual idea but would not be implemented for the first iteration. At first glance, the screen is already much less intimidating as there are only four fields.
                    </div>
                    <br />

                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={EnMockup} alt='English Mockup' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center", marginTop: 10 }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={FrMockup} alt='French Mockup' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center", marginTop: 10 }} />
                        </Paper>
                    </Box>
                    <div className="caption">English and French Mockups after Redesign</div>

                    <div className="header italic">Implementation</div>
                    <div className="body">
                        Following this process was implementation. Though I’m not going to take the time to explain how I implemented this screen, I will mention a couple features that were implemented to enhance the user experience. The first was a custom autofill component for the location fields so that the user would be able to select a location based on their query in the field. This means that coordinates of the location are fetched before the form is submitted. Another feature was that unfilled time field would autogenerate depending on the distance between the two locations entered by the user. This ensures that the requested departure and arrival time would be physically possible before submission (we didn’t want users to request a bus travel 6000 km in 30 min <span role='img' aria-label=":P">😛</span>).
                    <br /><br />
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={RedesignGif1} alt='Redesign 1' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center", marginTop: 10 }} />
                            </Paper>
                        </Box>
                        <div className="caption">Demo of Implemented Changes</div>
                        <br />
                        <b>So implementation is done, what now?</b> We never had a chance to test the application on our users, so that was our next step. I had the chance to interview 3 different users to use our application to evaluate the effectiveness of the redesign.
                </div>

                    <div className="header italic">User Testing</div>
                    <div className="body">
                        The most eye-opening part of the testing was how all three users subconsciously skipped over the departure time field. It made me realize that there are already standards for navigation apps engraved in our brains, where the Origin field must immediately be followed by the Destination. The departure/arrival priority toggle was confusing. Two of them also asked the possibility of implementing a map as a method of selecting a location. When asked about the length of the field, there was still consensus that it was a lengthy form that “felt too long, like an extended trip planner” (User 1).
                    <br /><br />
                        We went back to the drawing board with the feedback and moved both location fields one after another. So what do we do about this departure/arrival priority and the time fields? Once again, we began to look at our competitors for some inspiration. After looking at five different applications, it was clear that we had to only keep one date/time field. There was no existing application that had both the departure and arrival time field. This solution would also clear confusion in using the priority toggle, as user’s preference would determine the time that is being entered.
                    </div>
                    <br />
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={RedesignGif2} alt='Redesign 2' style={{ width: 'calc(100px + 12vw)', height: '100%', textAlign: "center", marginTop: 10 }} />
                        </Paper>
                    </Box>
                    <div className="caption">Demo of Final Implemented Changes</div>

                    <div className="header italic">Comments</div>
                    <div className="body">
                        This was my first time dabbling in something UI/UX related and I had a lot of fun. Reading up on Medium posts by UX Collective or browsing designs on dribbble brought me a lot of joy. It made me realize all the more how important user testing is. Giving your design away to fresh eyes to analyse and evaluate gives unbiased opinions to what works and what doesn’t; it truly helps to set you on the right path on how to make a product better.
                    <br /><br />
                        For more information on Blaise Transit and what they’re up to, visit their
                        site <a className="hyperlink" target="_blank" href='https://www.blaisetransit.com/' rel="noopener noreferrer">here</a>.
                    <br /><br />
                    </div>

                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mx={2} mt={5} mb={2}>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="prevProj" onClick={() => window.location.href = '/projects/worldclass'}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="sm" />
                            <div className="returnText">PREVIOUS:<br />Worldclass</div>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="nextProj" onClick={() => window.location.href = '/projects/strumMaster'}>
                            <div className="returnText">NEXT:<br />Strum Master</div>
                            <FontAwesomeIcon icon={faArrowCircleRight} color={colors.turquoise} size="sm" />
                        </Box>
                    </Box>
                    <ReturnHome />
                </Paper>
            </div >
        )
    }
}

export default BlaisePlanTrip;