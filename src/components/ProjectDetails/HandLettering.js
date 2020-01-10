import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import colors from '../../assets/sass/colors';
import Banner from '../../assets/img/calligraphy/Hello.png';
import Piece01 from '../../assets/img/calligraphy/piece1.jpg';
import Piece02 from '../../assets/img/calligraphy/piece3.jpg';
import Piece03 from '../../assets/img/calligraphy/piece2.jpg';
import Piece04 from '../../assets/img/calligraphy/piece4.jpg';

import './ProjectDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

class HandLettering extends Component {
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
                    <div className="projectTitle">Hand Lettering</div>
                    <div className="description">Writing out quotations and lyrics for fun</div>
                    <div className="subtitle">Graphic Design · Art</div>
                    
                    <img id="bannerImg" src={Banner} alt='Strum Master Final Prototype'></img>
                    <div className="header italic">Background</div>
                    <div className="body">
                    A collection of calligraphy/hand lettering pieces that I have made out of my own enjoyment or by request from friends. This a growing collection and my skill for this art gets better and better as I continue to practise. 
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Paper style={{ textAlign: 'center', width: 'calc(120px + 20vw)', height: '100%', margin: 5 }}>
                            <img src={Piece01} alt='Piece 1' style={{ width: 'calc(110px + 20vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                        </Paper>
                        <Paper style={{ textAlign: 'center', width: 'calc(120px + 20vw)', height: '100%', margin: 5 }}>
                            <img src={Piece02} alt='Piece 2' style={{ width: 'calc(110px + 20vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                        </Paper>
                    </Box>
                    <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                        <Paper style={{ textAlign: 'center', width: 'calc(120px + 20vw)', height: '100%', margin: 5 }}>
                            <img src={Piece03} alt='Piece 3' style={{ width: 'calc(110px + 20vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                        </Paper>
                        <Paper style={{ textAlign: 'center', width: 'calc(120px + 20vw)', height: '100%', margin: 5 }}>
                            <img src={Piece04} alt='Piece 4' style={{ width: 'calc(110px + 20vw)', height: '100%', margin: 2, textAlign: "center" }}></img>
                        </Paper>
                    </Box>
                    
                    
                    <br /><br />
                    More of my designs can be found on Instagram: <a className="hyperlink" target="_blank" href="https://www.instagram.com/aw.doodles/" rel="noopener noreferrer">@aw.doodles</a>

                    </div>
                    <br />
                   
                    {/* <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" m={2}>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="prevProj" onClick={() => window.location.href = '/'}>
                            <FontAwesomeIcon icon={faArrowCircleLeft} color={colors.turquoise} size="sm" />
                            <div className="returnText">PREVIOUS</div>
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems="center"
                            className="nextProj" onClick={() => window.location.href = '/'}>
                            <div className="returnText">NEXT</div>
                            <FontAwesomeIcon icon={faArrowCircleRight} color={colors.turquoise} size="sm" />
                        </Box>
                    </Box> */}
                </Paper>
            </div>
        )
    }
}

export default HandLettering;