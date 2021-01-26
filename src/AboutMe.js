// who I am
import {Col, Image, Card, CardGroup, Row, Container} from 'react-bootstrap'

const AboutMe = () => {
    return ( 
        <>
        <h1 className="about">About Me:</h1>

        <Container>
            <Row>
                <Col xs={6} md={2} className="align-self-center">
                    <Image src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/s1080x2048/142665065_1783935365109746_9053597600276630280_o.jpg?_nc_cat=102&ccb=2&_nc_sid=730e14&_nc_ohc=rL8JV3p-IV4AX-yGfDJ&_nc_ht=scontent.ftpa1-2.fna&tp=7&oh=f39322d72c13f7f73184f18758e57703&oe=60338594" thumbnail roundedCircle />
                </Col>
                <Col xs={6} md={10}>
                    <p>
                        I am a Full-Stack Software Engineer. 
                        For as long as I can remember I have always had a passion for the world of technology, creating and innovating.
                        Software Engineering was the perfect mix of all of these, and so I decided to follow my dreams.  
                        I obtained my Associates in Arts with a Meta-Major in STEM from Valencia College and now have graduated from the Flatiron School. 
                        I build projects on my own time where I focus on making them useful for real-world situations and expandable so that I can constantly maintain them. 
                        This way, as my skills grow, so do my projects.
                    </p>

                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default AboutMe;