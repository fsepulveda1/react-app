import React from 'react';
import Detail from "./Detail";

export default class ProjectDetail extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            projectData: []
        }
    }

    getDataFromApi() {
        fetch('http://localhost:3000/api/projects/'+this.props.match.params.id)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({
                    projectData: responseJson,
                    isLoading:false,
                }, function(){

                });
            })
            .catch((error) =>{
                console.error(error);
            });
    }

    componentDidMount() {
        this.getDataFromApi();
    }

    render() {
        if(this.state.isLoading) {
            return (<p>Cargandos ...</p>)
        }
        return(
            <Detail
                title={this.state.projectData.name}
                description={this.state.projectData.description}
                url_image={this.state.projectData.url_image}
            />
        )
    }
}
