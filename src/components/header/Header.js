import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap'
import logo from '../../assets/img/logo_portfolio.webp'
import { ButtonOulined } from '../buttons/ButtonOulined';
import cv from '../../assets/files/CV_Marcelo_Bueno.pdf';

export const Header = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <Navbar {...args} className={`shadow bg-white py-3`} expand='lg' container='sm' fixed='top'>
                <NavbarBrand href='/'>
                    <img src={logo} width={150} alt="" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} >
                    <i className="bi bi-list"></i>
                </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={`me-auto bg-white w-100 ${isOpen ? 'gap-3 mb-3' : 'align-items-center gap-5'} mt-2`} navbar>
                        {/* <NavItem>
                            <NavLink to={'#sobre_mim'} className={`${isOpen ? '' : 'ms-4'} text-decoration-none text-muted`}>
                                Sobre mim
                            </NavLink>
                        </NavItem> */}
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className={`text-decoration-none text-muted`}>
                                Portfólio
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>
                                    <a className='text-decoration-none text-dark'
                                        target={'_blank'}
                                        rel='noopener norefer'
                                        href="https://marcelobueno.github.io/calculadora_imc_react_ts/">
                                        Calculadora IMC
                                    </a>
                                </DropdownItem>
                                {/* <DropdownItem>Agenda</DropdownItem>
                                <DropdownItem>Lista de compras</DropdownItem>
                                <DropdownItem>E-commerce</DropdownItem> */}
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <a download={true} href={cv} className={`text-decoration-none text-muted`}>
                                Currículo
                            </a>
                        </NavItem>
                        <NavItem>
                            <NavLink to={'https://wa.me/5511982702962'} target={'_blank'} className={`text-decoration-none text-muted`}>
                                WhatsApp
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <a href="#contact_form" style={{
                        textDecoration: 'none'
                    }}>
                        <ButtonOulined className={'bg-white w-100'} title={'Solicitar contato'} />
                    </a>
                </Collapse>
            </Navbar>
        </>
    )
}
