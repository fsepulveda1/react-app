import React from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

export default class MyNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Container>
                        <Link className={'navbar-brand'} to="/">Sitio de ejemplo</Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link className={'nav-link'} to="/about">Quienes somos</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className={'nav-link'} to="/projects">Proyectos</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className={'nav-link'} to="/contact">Contacto</Link>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Opciones
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Opción 1
                                        </DropdownItem>
                                        <DropdownItem>
                                            Opción 2
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Opción 3
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
    );
    }
}