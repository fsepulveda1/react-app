import React from 'react';
import MyNavBar from './components/Navbar';
import MyFooter from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from './components/Home';
import { Route, Switch } from 'react-router-dom'
import ProjectDetail from "./components/ProjectDetail";

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
                <Route key="home" exact path="/" component={Home}/>
                <Route key="projects" exact path="/projects/:page?" component={Projects}/>
                <Route key="content" path="/contact" component={Contact}/>
                <Route key="projects-detail" path="/projects/detail/:id" component={ProjectDetail}/>
                <MyFooter/>
            </div>
        );
    }
}
