import React from 'react';
import { Row, Col, Container} from 'reactstrap';
import MyCard from "./Card";

export default class Home extends React.Component{

    render() {
        return (
            <Container className={'mt-4'}>
                <Row>
                    <Col>
                        <MyCard
                            title={'Ejemplo'}
                            description={'Descripcion'}
                            url_image={'https://via.placeholder.com/350x150'}
                        />
                    </Col>
                    <Col>
                        <MyCard
                            title={'Ejemplo'}
                            description={'Descripcion'}
                            url_image={'https://via.placeholder.com/350x150'}
                        />
                    </Col>
                </Row>
                <Row className={"mt-4"}>
                    <Col>
                        <MyCard
                            title={'Ejemplo'}
                            description={'Descripcion'}
                            url_image={'https://via.placeholder.com/350x150'}
                        />
                    </Col>
                </Row>
            </Container>
        );
    }
}