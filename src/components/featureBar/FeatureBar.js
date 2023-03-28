import React, { useState } from 'react'
import { Container, Tooltip } from 'reactstrap'
import php from '../../assets/img/icons/php.svg'
import laravel from '../../assets/img/icons/laravel.svg'
import javascript from '../../assets/img/icons/javascript.svg'
import iconreact from '../../assets/img/icons/react.svg'
import vue from '../../assets/img/icons/vue.svg'

export const FeatureBar = () => {

    const [emailTooltipOpen, setEmailTooltipOpen] = useState(false);
    const [chatTooltipOpen, setChatTooltipOpen] = useState(false);
    const [telTooltipOpen, setTelTooltipOpen] = useState(false);
    const [whatsTooltipOpen, setWhatsTooltipOpen] = useState(false);
    const [mesTooltipOpen, setMesTooltipOpen] = useState(false);

    const toggleEmail = () => setEmailTooltipOpen(!emailTooltipOpen);
    const toggleChat = () => setChatTooltipOpen(!chatTooltipOpen);
    const toggleTel = () => setTelTooltipOpen(!telTooltipOpen);
    const toggleWhats = () => setWhatsTooltipOpen(!whatsTooltipOpen);
    const toggleMes = () => setMesTooltipOpen(!mesTooltipOpen);

    return (
        <>
            <Container className='d-flex gap-5 align-items-center justify-content-between mb-5'>
                <div className="card feature-card">
                    <img id='emailIcon' src={php} alt="" />
                </div>
                <div className="card feature-card">
                    <img id='chatIcon' src={laravel} alt="" />
                </div>
                <div className="card feature-card">
                    <img id='telIcon' src={javascript} alt="" />
                </div>
                <div className="card feature-card">
                    <img id='whatsIcon' src={iconreact} alt="" />
                </div>
                <div className="card feature-card">
                    <img id='mesIcon' src={vue} alt="" />
                </div>
            </Container>
            <Tooltip isOpen={emailTooltipOpen} target="emailIcon" toggle={toggleEmail}>
                PHP
            </Tooltip>
            <Tooltip isOpen={chatTooltipOpen} target="chatIcon" toggle={toggleChat}>
                Laravel
            </Tooltip>
            <Tooltip isOpen={telTooltipOpen} target="telIcon" toggle={toggleTel}>
                JavaScript
            </Tooltip>
            <Tooltip isOpen={whatsTooltipOpen} target="whatsIcon" toggle={toggleWhats}>
                ReactJS
            </Tooltip>
            <Tooltip isOpen={mesTooltipOpen} target="mesIcon" toggle={toggleMes}>
                VueJS
            </Tooltip>
        </>
    )
}
