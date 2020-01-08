import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/StrumMasterBanner.jpg';
import SprintMap from '../../assets/img/strumMaster/SprintMap.png';
import Crazy8s from '../../assets/img/strumMaster/crazy8s.jpg';
import Slinkey from '../../assets/img/strumMaster/slinkey.jpg';
import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'

class StrumMaster extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{ borderRadius: '10px', padding: '15px 20px' }} >

                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2} className="return">
                        <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="xs" />
                        <div className="returnText" onClick={() => window.location.href = '/'}>Back to Home</div>
                    </Box>
                    <br />
                    <div className="projectTitle">Strum Master</div>
                    <div className="subtitle">Designing a modified guitar for recovering stroke patients.</div>
                    <img id="bannerImg" src={Banner} alt='Strum Master Final Prototype'></img>
                    <div className="header italic">The Problem</div>
                    <div className="body">
                        Many people find enjoyment out of playing musical instruments throughout their lifetimes.
                        However, for those who have a physical disability, this may not be possible since most instruments require certain physical capabilities in order to be played masterfully.
                        For our third-year design project, we were given the problem space to design a musical instrument to be played by someone with a physical disability.
                    </div>

                    <div className="header italic">Design Sprint</div>
                    <div className="body">
                        <Box display="flex" flexDirection="column" alignItems="center">
                            To ensure everyone was on the same page, we started the entire design process with a week of the Google Design Sprint.
                            We were told that we could throw away the entire idea if we hated it, but working through the methodology gave us an idea of the
                            questions going through the team’s head, including HMW’s (How Might We’s). Some of the questions asked included: “How might we give
                            users the same feeling of playing music?” and “How might we cater to musicians of any skill background?”. Each member of the group
                            also created a persona to better understand the users we were trying to target.
                        <br /><br />
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
                            <br/><br/>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(100px + 30vw)', overflow: 'hidden', height: '100%' }}>
                                <img src={Slinkey} alt='SlinKEY Prototype' style={{ width: 'calc(100px + 30vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <div className="caption">SlinKEY Prototype used for User Testing</div>
                            <br />
                            We found out that all users enjoyed playing the instrument and thought it was intuitive. However, the up and down motion of playing the instrument caused too much strain in the arm. They also expressed that they would enjoy more functionality in the instrument like volume control instead of a binary input for sound.
                        </Box>
                    </div>
                    <div className="header italic">Users</div>
                    <div className="body">
                        For our group specifically, we aimed to design a modified MIDI guitar for experienced guitarists who are in the process of recovering from a stroke. This is defined by the stroke victim having one fully functioning hand and the other with low dexterity. The ultimate goal was for the user to be able to play in a band with friends.


                    </div>
                    <br />
                </Paper>
            </div>
        )
    }
}

export default StrumMaster;