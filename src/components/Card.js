import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

export default class MyCard extends React.Component {
    render() {
        return (
            <Card>
                <CardImg top width="100%" src={this.props.url_image} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
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