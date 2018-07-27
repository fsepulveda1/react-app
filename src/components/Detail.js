import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from "prop-types";

export default class Detail extends React.Component {
    render() {
        return(
            <Container>
                <h1 className={'mt-4'}>{this.props.title}</h1>
                <img className={'mb-4'} style={styles.img} src={this.props.url_image} />
                <p>{this.props.description}</p>
            </Container>
        )
    }
}

const styles = {
    img: {
        width:'100%'
    }
}
Detail.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
}