import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/coorporation/IMG_0106.jpg';
import Persona from '../../assets/img/coorporation/Persona.png';
import LFPBoard1 from '../../assets/img/coorporation/LFP_board.jpg';
import LFPBoard2 from '../../assets/img/coorporation/LFP_board2.png';
import RegulationCard from '../../assets/img/coorporation/regulationCards.png';
import ActionCard from '../../assets/img/coorporation/actionCards.png';
import EventCard from '../../assets/img/coorporation/eventCards.png';
import CardSet from '../../assets/img/coorporation/IMG_0124.jpg';
import Board1 from '../../assets/img/coorporation/IMG_0125.jpg';
import Board2 from '../../assets/img/coorporation/IMG_0126.jpg';
import CorpCard1 from '../../assets/img/coorporation/corporation.png';
import CorpCard2 from '../../assets/img/coorporation/corporation2.png';
import GovtCard from '../../assets/img/coorporation/government.png';
import GovtCard1 from '../../assets/img/coorporation/Govt-final1.png';
import GovtCard2 from '../../assets/img/coorporation/Govt-final2.png';
import GovtCard3 from '../../assets/img/coorporation/Govt-final3.png';
import CorpCardFinal from '../../assets/img/coorporation/Corp-final.png';
import CardsFinal from '../../assets/img/coorporation/final-cards.jpeg';
import BoardFinal from '../../assets/img/coorporation/final-board.jpeg';
import Final from '../../assets/img/coorporation/final.jpg';
import Rules from '../../assets/files/Co-orporationRules.pdf';

import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class Coorporation extends Component {
    render() {
        return (
            <div className="projectDetContainer">
                <Paper style={{padding: '15px 20px 30px 20px' }} elevation={0}>

                    <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" m={2}>
                        <Box className="return" display='flex' justifyContent='center' alignItems="center" onClick={() => window.location.href = '/'}>
                            <FontAwesomeIcon icon={faHome} color={colors.turquoise} size="sm" />
                            <div className="returnText">Back to Home</div>
                        </Box>
                    </Box>
                    <div className="projectTitle">Co-orporation</div>
                    <div className="description">A boardgame advocating for change</div>
                    <div className="subtitle">Product Design · User Testing · Prototyping · Graphic Design</div>
                    <Box display="flex" justifyContent="center">
                        <img id="bannerImg" src={Banner} alt='Strum Master Final Prototype'></img>
                    </Box>
                    <div className="header italic">Background</div>
                    <div className="body">
                        In an investigation of design, systems, and society, we decided to create a game to advocate for a topic that we were passionate about. At the time, the effects of Bill 148 were in effect to increase minimum wage to $15 by January 1, 2019.
                        We believe that the effects caused a great disadvantage towards small businesses in the market, leading us to create a game to help educate the users about the power struggle that exists between large corporations and small businesses.
                    <br /><br />
                        Our problem statement was to design a game to be played by teenagers and adults to help users better understand the power struggle in the relationship between governments and businesses/corporations that is challenging, enjoyable, engaging, replayable, and educational.
                    </div>
                    <br />
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Paper style={{ textAlign: 'center', width: 'calc(120px + 20vw)', height: '100%' }}>
                            <img src={Persona} alt='Persona' style={{ width: 'calc(110px + 20vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                        </Paper>
                        <div className="caption">Persona created for a potential user</div>
                    </Box>
                    <div className="header italic">Low Fidelity Prototype (LFP)</div>
                    <div className="body">
                        We had a rough idea of how to approach the project and came up with a couple drawings as to how we wanted to approach creating the game. We had two sample game board and a handful of event cards that players could draw and play. These are seen below:
                        <br /><br />
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 12vw)', overflow: 'hidden', height: '100%', margin: 3 }}>
                                <img src={RegulationCard} alt='Regulation Cards' style={{ width: 'calc(150px + 12vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={ActionCard} alt='Action Cards' style={{ width: 'calc(150px + 12vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 12vw)', overflow: 'hidden', height: '100%', margin: 4 }}>
                                <img src={EventCard} alt='Event Cards' style={{ width: 'calc(150px + 12vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                        </Box>
                        <div className="caption">Playing card prototypes</div>
                        <br />
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={LFPBoard1} alt='Board Style Draft 1' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10, }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={LFPBoard2} alt='Board Style Draft 2' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                        </Box>
                        <div className="caption">Game board prototypes</div>
                        <br />
                        During a team meeting, we compiled the best ideas we had from the brainstorming session and created two low-fidelity game boards and cards to test with users.
                        <br /><br />
                        <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={CardSet} alt='Testing Card Set' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10, }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(160px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={Board1} alt='Testing Board 1' style={{ width: 'calc(160px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                            <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                                <img src={Board2} alt='Testing Board 2' style={{ width: 'calc(150px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                            </Paper>
                        </Box>
                    </div>
                    <div className="caption">First Iteration of Cards and Game Boards</div>

                    <div className="header italic"> User Testing Session 1</div>
                    <div className="body">
                        During our first user testing session, we verbally read out the instructions of the game and gave them the two game boards to try. The main takeaways from the first session were that we needed to make clearer cards with the instructions on them and the government team seemed too overpowered. As for the game's social aspect, the government team came off as "evil" and opposing of everyone, which was not the main purpose of our game.
                        <br /><br />
                        The game needed to have clearer instructions, more fair gameplay, and a clearer social objective.
                        </div>
                    <div className="header italic">Medium Fidelity Prototype (MFP)</div>
                    <div className="body">
                        We redesigned the number of cards and their effects based on the feedback to include more government cards that had effects of mutual benefit. This was done to the remove the "evil" government impression. The instructions were printed on the cards themselves to remove the need of a legend.

                    </div>
                    <br />
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={CorpCard1} alt='Corporation Cards 1' style={{ width: 'calc(120px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10, }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={CorpCard2} alt='Corporation Cards 2' style={{ width: 'calc(120px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 10vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={GovtCard} alt='Government Cards' style={{ width: 'calc(120px + 10vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                        </Paper>
                    </Box>
                    <div className="caption">Examples of Corporation and Government Cards</div>

                    <div className="header italic">User Testing Session 2</div>
                    <div className="body">
                        Following a second user testing session, users indicated that the designs of the cards and the game board was not very visually appealing but that they liked the competitive aspect of the game. The game instructions needed to be made clearer.
                        <br /><br />
                        The design of the game cards followed a couple more rounds of interative improvement.
                        These improvements included both visual design and each card's gameplay effect to maintain fairness and fun of the game.
                        Finally, each card's instructions were altered to reduce any confusion among game players.
                    </div>
                    <br />
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(100px + 8vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={GovtCard1} alt='Iteration 1: Government Card' style={{ width: 'calc(100px + 8vw)', height: '100%', textAlign: "center", }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(100px + 8vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={GovtCard2} alt='Iteration 2: Government Card' style={{ width: 'calc(100px + 8vw)', height: '100%', textAlign: "center", marginBottom: -7 }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(100px + 8vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={GovtCard3} alt='Iteration 3: Government Card' style={{ width: 'calc(100px + 8vw)', height: '100%', textAlign: "center", }} />
                        </Paper>
                    </Box>
                    <div className="caption">Three Iterations of Government Cards</div>
                    <br />
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(180px + 30vw)', overflow: 'hidden', height: '100%', }}>
                            <img src={CorpCardFinal} alt='Final: Corporation Card' style={{ width: 'calc(150px + 30vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                        </Paper>
                    </Box>
                    <div className="caption">Final Corporation Card Design</div>
                    <div className="header italic">High Fidelity Prototype (HFP)</div>
                    <div className="body">
                        The final game board was laser cut and cards were printed out. Several users had the chance to play the competitive game and explore the power struggle between corporations and the government through our game.
                        <br /><br />
                        For more details about the game, the instructions on how to play can be
                        found <a className="hyperlink" target="_blank" href={Rules} rel="noopener noreferrer">here</a>.
                    </div>
                    <br />
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 12vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={CardsFinal} alt='Final Card Set' style={{ width: 'calc(120px + 12vw)', height: '100%', textAlign: "center", marginBottom: -6 }} />
                        </Paper>
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(120px + 15vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={BoardFinal} alt='Final Game Board' style={{ width: 'calc(120px + 15vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                        </Paper>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" alignItems="center">
                        <Paper style={{ zDepth: 1, textAlign: 'center', width: 'calc(150px + 8vw)', overflow: 'hidden', height: '100%', margin: 5 }}>
                            <img src={Final} alt='Final Setup of Game' style={{ width: 'calc(150px + 8vw)', height: '100%', textAlign: "center", marginBottom: -10 }} />
                        </Paper>
                    </Box>
                    <div className="header italic">Comments</div>
                    <div className="body">
                        Working on this project made me realize that the hardest part about designing a game is maintaining its fairness and entertainment. Several aspects that seem like the best design decision for a game definitely do not play out as expected when being user tested. This was apparent when we asked users if they felt like they gained any educational value from our game. Learning that the government was “evil” was definitely not the lesson, but it was one of the many aspects of the game that we had to change in order to achieve our intended goal.
                    </div>

                    <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mx={2} mt={5} mb={2}>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="prevProj" onClick={() => window.location.href = '/projects/strumMaster'}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="sm" />
                            <div className="returnText">PREVIOUS:<br />Strum Master</div>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="nextProj" onClick={() => window.location.href = '/projects/handLettering'}>
                            <div className="returnText">NEXT:<br />Hand Lettering</div>
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

export default Coorporation;