import React from 'react';
import { Container } from 'reactstrap';
import MyNavBar from './components/Navbar';
import MyFooter from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div>
                <MyNavBar/>
                <Switch>
                    <Route key="home" exact path="/" component={Home}/>
                    <Route key="projects" path="/projects/:page?" component={Projects}/>
                    <Route key="content" path="/contact" component={Contact}/>
                </Switch>
                <MyFooter/>
            </div>
        );
    }
}
