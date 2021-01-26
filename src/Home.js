import {  Jumbotron, Container, Accordion, Card, Button} from 'react-bootstrap'
import AboutMe from './AboutMe'
import Contact from './ContactMe'
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
                    Welcome!
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    This is my portfolio page where you will ba able to learn a little bit about me, see the projects I've done, and have access to my contact information.
                </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <Footer/>
        </>
     );
}
 
export default Home;