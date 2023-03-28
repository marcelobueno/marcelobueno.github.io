import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, UncontrolledDropdown } from 'reactstrap'
import logo from '../../assets/img/logo_portfolio.png'
import { ButtonOulined } from '../buttons/ButtonOulined';

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
                        <NavItem>
                            <NavLink to={'/teste'} className={`${isOpen ? '' : 'ms-4'} text-decoration-none text-muted`}>
                                Sobre mim
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className={`text-decoration-none text-muted`}>
                                Projetos para teste
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem>Agenda</DropdownItem>
                                <DropdownItem>Lista de compras</DropdownItem>
                                <DropdownItem>E-commerce</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink to={'/teste'} className={`text-decoration-none text-muted`}>
                                Currículo
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={'https://wa.me/5511982702962'} target={'_blank'} className={`text-decoration-none text-muted`}>
                                WhatsApp
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <ButtonOulined className={'bg-white w-100'} title={'Solicitar contato'} />
                </Collapse>
            </Navbar>
        </>
    )
}
