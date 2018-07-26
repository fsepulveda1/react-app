import React from 'react';
import { Media } from 'reactstrap';
import PropTypes from "prop-types";
import MyCard from "./Card";

export default class Example extends React.Component {
    render() {
        return (
            <Media className='mb-4'>
                <Media left href={this.props.url_link || '#'}>
                    <Media object className={'mr-3'} src={this.props.url_image} style={styles.img} alt="Generic placeholder image"/>
                </Media>
                <Media body>
                    <Media heading>
                        {this.props.title}
                    </Media>
                    {this.props.description}
                </Media>
            </Media>
        );
    }
};

const styles = {
  img: {
      width: '50px',
      height:'50px',
  }
};

MyCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url_image: PropTypes.string.isRequired,
}