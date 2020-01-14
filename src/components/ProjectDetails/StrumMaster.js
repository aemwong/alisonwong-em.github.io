import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/StrumMasterBanner.jpg';
import SprintMap from '../../assets/img/strumMaster/SprintMap.png';
import Crazy8s from '../../assets/img/strumMaster/crazy8s.jpg';
import Slinkey from '../../assets/img/strumMaster/slinkey.jpg';
import Survey from '../../assets/img/strumMaster/survey.png';
import LFP1 from '../../assets/img/strumMaster/LFP1.jpg';
import LFP2 from '../../assets/img/strumMaster/LFP2.jpg';
import MFP from '../../assets/img/strumMaster/MFP.jpg';
import HFPBody from '../../assets/img/strumMaster/IMG_7073.jpeg';
import HFPOpen from '../../assets/img/strumMaster/IMG_7074.jpeg';
import FullView from '../../assets/img/strumMaster/full view.jpg';
import Manual from '../../assets/files/StrumMaster_UserManual.pdf';
import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class StrumMaster extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{ borderRadius: '10px', padding: '15px 20px 30px 20px' }} >

                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2}>
                        <Box className="return" display='flex' justifyContent='center' alignItems="center" onClick={() => window.location.href = '/'}>
                            <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                            <div className="returnText">Back to Home</div>
                        </Box>
                    </Box>
                    <div className="projectTitle">Strum Master</div>
                    <div className="description">Designing a modified guitar for recovering stroke patients.</div>
                    <div className="subtitle">Product Design · User Testing · Prototyping · Development</div>
                    <Box display="flex" justifyContent="center">
                        <img id="bannerImg" src={Banner} alt='Strum Master Final Prototype'></img>
                    </Box>
                    <div className="header italic">The Problem</div>
                    <div className="body">
                        Many people find enjoyment out of playing musical instruments throughout their lifetimes.
                        However, for those who have a physical disability, this may not be possible since most instruments require certain physical capabilities in order to be played masterfully.
                        For our third-year design project, we were given the problem space to design a musical instrument to be played by someone with a physical disability.
                    </div>

                    <div className="header italic">Design Sprint</div>
                    <div className="body">

                        To ensure everyone was on the same page, we started the entire design process with a week
                            of the <a className="hyperlink" target="_blank" href="https://www.gv.com/sprint/" rel="noopener noreferrer">Google Design Sprint</a>.
        We were told that we could throw away the entire idea if we hated it but working through the methodology gave us an idea of the
        questions going through the team’s head, including HMW’s (How Might We’s). Some of the questions asked included: “How might we give
        users the same feeling of playing music?” and “How might we cater to musicians of any skill background?”. Each member of the group
        also created a persona to better understand the users we were trying to target.
                        <br /><br />
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Paper style={{ textAlign: 'center', width: 'calc(120px + 30vw)', height: '100%' }}>
                                <img src={SprintMap} alt='Sprint Map' style={{ width: 'calc(100px + 30vw)', height: '100%', margin: 10, textAlign: "center" }}></img>
                            </Paper>
                            <div className="caption">Sprint Map created during Sprint Process</div>
                            <br />
                            We continued to research existing application of products for people with low dexterity. We liked that most products used other methods of control (air control, eye-tracking, etc.) for any precise control. Based on previous discussions of questions and existing products, each team member brainstormed 8 solutions in a process called “Crazy 8’s”. Following this, each member chooses one solution to present to the rest of the group in a three-panel illustration.
                            <br /><br />
                            <Paper style={{ textAlign: 'center', width: 'calc(120px + 30vw)', height: '100%' }}>
                                <img src={Crazy8s} alt='Ideation Illustrations' style={{ width: 'calc(100px + 30vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                            </Paper>
                            <div className="caption">Idea Brainstorming</div>
                            <br />
                            After solution presentations, we voted on our favourite products and specific aspects of each product that we liked. Combining the most popular aspects, we moved forward to create a prototype of our “instrument”, named the SlinKEY. What we created was an accordion style instrument where the position held by the player determined the pitch of the note. Also, a foot pedal was used to choose when the note should sound. We proceeded to test with three different users to gain insights on the intuitiveness, enjoyability, and potential future features.
                            <br /><br />
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(100px + 30vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={Slinkey} alt='SlinKEY Prototype' style={{ width: 'calc(100px + 30vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <div className="caption">SlinKEY Prototype used for User Testing</div>
                            <br />
                            We found out that all users enjoyed playing the instrument and thought it was intuitive. However, the up and down motion of playing the instrument caused too much strain in the arm. They also expressed that they would enjoy more functionality in the instrument like volume control instead of a binary input for sound.
                        </Box>
                    </div>
                    <div className="header italic">The Users</div>
                    <div className="body">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            Following our sprint sessions, our group decided to move forward and design a modified MIDI guitar for experienced guitarists who are in the process of recovering from a stroke. This is defined by the stroke victim having one fully functioning hand and the other with low dexterity. The ultimate goal was for the user to be able to play in a band with friends.
                        <br /><br />
                            To gain more insight on what experienced guitarists enjoyed out of playing guitar and the overall experience of playing the instrument, we conducted a survey on 37 guitarists. We found out that most of these guitarists enjoyed playing guitar with a combination of chords and fingerpicking. The most important features of the guitar were the quality of strings and frets, design of the wood, and strumming techniques. Difficulties were found in changing chord positions quickly and coordination between the left and right hand.
                        <br /><br />
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 28vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={Survey} alt='Survey Results' style={{ width: 'calc(150px + 28vw)', height: '100%', textAlign: "center" }} />
                            </Paper>
                            <div className="caption">One Result from Guitar Survey</div>
                        </Box>
                    </div>
                    <div className="header italic">Low Fidelity Prototype (LFP)</div>
                    <div className="body">

                        As a first iteration, we tested the use of a linear potentiometer and a force sensitive strip. These parts were chosen to mimic the neck on the guitar. “Frets” were marked down on the board so that different held down positions produced different pitches. This was in an attempt to mimic the
                    existing <a className="hyperlink" target="_blank" href="https://www.youtube.com/watch?v=MUdWeBYe3GY" rel="noopener noreferrer">modulin</a> (shown in class). The linear potentiometer and force sensitive strip were connected to MIDI and an Arduino microcontroller to synthesize the sound.
                            <br /><br />
                        In the testing session, we asked users to test the intuitiveness of the linear potentiometer and its “fret” positions. Users expressed to ease of changing between position to play different notes. We also asked them to try and apply force on the strip to see the range of force that would be feasible and usable for our instrument. However, based on the feedback we received, it seemed that the force sensitive strip (which was meant to adjust volume of output) did not work effectively to simulate how a guitarist would control volume.
                            <br /><br />
                        <Box display="flex" flexDirection="column" alignItems="center">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 28vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={LFP1} alt='LFP1' style={{ width: 'calc(150px + 28vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <div className="caption">Linear Potentiometer and Force Sensitive Strip</div>
                            <br />
                            We then focused on simulating the individual strings that would be found on a real guitar. Using A/B testing, we compared the use of buttons against the use of copper tape to produce sound. We had the opportunity to test the product on two users, both of which expressed that the copper tape was more appealing and easier to use. There were also comments that though it was a prototype, it was still important to keep the workspace clutter-free and robust so that the user is not intimidated or holding back their interactions with the instrument.
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 28vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={LFP2} alt='LFP2' style={{ width: 'calc(150px + 28vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <div className="caption">Copper Tape and Button Arrangement</div>

                        </Box>
                    </div>
                    <div className="header italic">Medium Fidelity Prototype (MFP)</div>
                    <div className="body">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            Based on the given feedback, we moved forward with the copper tape and the linear potentiometer to create a guitar-like instrument. To make it more accessible, the length of the copper tape was extended. To increase the robustness of the prototype, wires were soldered to protoboards. Taking inspiration from the cigar box guitar, all the wiring was placed inside a shoebox, hidden from the user. The linear potentiometer was attached onto a wooden stick like on the neck of a real guitar. The six pieces of copper tape were mapped to play different major chords depending on the “fret” that was held on the neck. A pressure control was added for volume control. This would be like when a guitarist strums harder to produce a louder sound.
                            <br /><br />
                            Our users during the user testing session expressed that they liked the responsiveness of the copper tape and the ability to change between chords. However, they would like the ability to play minor chords and the pressure control for sound was not intuitive. It was suggested that pressure control be used instead as a mute, like a guitarist muting the strings of a guitar. The length of the neck was too long for the range of motion of one user, who also expressed that the volume control should be standalone, and the user should not be required to perform simultaneous actions.
                            <br /><br />
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={MFP} alt='MFP' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <div className="caption">Medium Fidelity Prototype</div>

                        </Box>
                    </div>

                    <div className="header italic">High Fidelity Prototype (HFP)</div>
                    <div className="body">

                        Our final prototype featured a smaller box used to contain all our wiring and a shorter guitar neck embellished with cosmetic pegs so that it looked more like a real guitar. A switch was added to change between major and minor chords and a slider to adjust the output volume. The force sensitive strip was added at the end of the copper tape that would mute the sound when pressed. The final prototype can be seen in photos below.
                            <br /><br />
                        Based on the given feedback, we moved forward with the copper tape and the linear potentiometer to create a guitar-like instrument. To make it more accessible, the length of the copper tape was extended. To increase the robustness of the prototype, wires were soldered to protoboards. Taking inspiration from the cigar box guitar, all the wiring was placed inside a shoebox, hidden from the user. The linear potentiometer was attached onto a wooden stick like on the neck of a real guitar. The six pieces of copper tape were mapped to play different major chords depending on the “fret” that was held on the neck. A pressure control was added for volume control. This would be like when a guitarist strums harder to produce a louder sound.
                            <br /><br />
                        <Box display="flex" justifyContent="center" >
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={FullView} alt='Full Product' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                        </Box>
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={HFPBody} alt='HFPBody' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10, }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={HFPOpen} alt='HFPOpen' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                        </Box>

                    </div>
                    <div className="header italic">Comments</div>
                    <div className="body">Using the Google Sprint methodology helped our team work on ideation and flesh out ideas even if they wouldn’t be considered as final products. Even though certain initial brainstorming might have seemed unreasonable or impossible, they became stepping blocks to arrive at a better solution in the end.
                        <br /><br />
                        I also learned the importance of listening and understanding from the user testing sessions that were held for the different iterations of our product. Though we had a script prepared for each session, it was important to actively listen and go off-script when appropriate so that the user can elaborate on their insights. Also, it was a privilege to have been given the opportunity to test the product with real users who could give us honest feedback. You can only go so far always testing with classmates
                        <br /><br />
                        Finally, I was really proud of myself and my team for being able to actually to create a working instrument that we could play music with. It was far from being a product that we could actually put on the market and there were still several features that we could implement if given more time, but overall it was a very rewarding experience to create a product from scratch.
                        <br /><br />
                        For more details about the instrument, you can find the user manual for
                        the instrument <a className="hyperlink" target="_blank" href={Manual} rel="noopener noreferrer">here</a>.
                        </div>
                    <br />
                    <div className="caption">Here is a short clip of me and my group playing at our end-of-term "concert"!</div>
                    <Box display="flex" justifyContent="center" mt={1}>
                        <div className="video">
                            <iframe title="demo" src="https://www.youtube.com/embed/Vz94pLQMJ20" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                        </div>
                    </Box>

                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mx={2} mt={5} mb={2}>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="prevProj" onClick={() => window.location.href = '/projects/planTrip'}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="sm" />
                            <div className="returnText">PREVIOUS:<br />Trip Request Redesign</div>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="nextProj" onClick={() => window.location.href = '/projects/coorporation'}>
                            <div className="returnText">NEXT:<br />Co-orporation!</div>
                            <FontAwesomeIcon icon={faArrowCircleRight} color={colors.turquoise} size="sm" />
                        </Box>
                    </Box>

                    <Box display='flex' justifyContent='center' alignItems="center" className="home" onClick={() => window.location.href = '/'}>
                        <Box display="flex" >
                            <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                            <div className="returnText">Back to Home</div>
                        </Box>
                    </Box>

                </Paper>
            </div>
        )
    }
}

export default StrumMaster;