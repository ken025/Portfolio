import {  Button, Accordion, Card } from 'react-bootstrap'
import AboutMe from './AboutMe'
import Projects from './Projects'

import Footer from './Footer';

const Home = () => {
    return ( 
        <>
        <section className="header" />
        <Accordion>
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                   <Button>Welcome!</Button> 
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    This is my portfolio web-page where you will ba able to learn a little bit about me, see the projects I've made, and contact me.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion><br/>
    <AboutMe/><br/>
    <Projects/><br/>
    <Footer/>
        </>
     );
}
 
export default Home;