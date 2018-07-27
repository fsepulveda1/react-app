import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default class MyCard extends React.Component {
    render() {
        return (
            <Card>
                {console.log(this.props)}
                <CardImg top width="100%" src={this.props.url_image} alt="Card image cap" />
                <CardBody>
                    <Link to={this.props.url_detail}><CardTitle>{this.props.title}</CardTitle></Link>
                    <CardText>{ this.props.description}</CardText>
                    {this.props.url_link && <Button color="info">Visitar sitio</Button>}
                </CardBody>
            </Card>
        )
    }
}
MyCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
}