import React from 'react';
import { Col1of3, Row } from 'components/atoms/Grid/Grid.styles';
import CardProjects from '../CardProjects/CardProjects';
import Builders from 'assets/img/Builders-small.jpg'

const SectionOffersMain = (): JSX.Element => {
    return (
        <Row>
            <Col1of3>
                <CardProjects imageUrl={Builders}></CardProjects>
            </Col1of3>
        </Row>
    );
};

export default SectionOffersMain;
