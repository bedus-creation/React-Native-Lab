import React, { Component } from 'react'
import FooterTabs from '../components/FooterTabs';
import HeaderSection from '../components/HeaderSection';
import ContentSection from '../components/ContentSection';
import {Container} from 'native-base';
class HomeScreen extends Component{
    
    render() {
        return (
            <Container>
                <HeaderSection></HeaderSection>
                <ContentSection></ContentSection>
                <FooterTabs/>
            </Container>
        );
    }
}

export default HomeScreen;