import {Col, Media, Image, Card, CardGroup, Row, Container} from 'react-bootstrap';

//link projects and include screenshots
// add 1 project image left next right and so on
const Projects = () => {
    return ( 
        <>
        <h1 className="about">My Projects:</h1>

        <Container>
            <Row className="projs">
                <Col xs={6} md={2} >
                    <Image src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/142820257_1783993805103902_4409359767272723086_o.jpg?_nc_cat=105&ccb=2&_nc_sid=730e14&_nc_ohc=jysTiwEChQUAX9TylYn&_nc_ht=scontent.ftpa1-1.fna&oh=6bda6b5fd6327a8ab4eeb35a8e1ba09c&oe=6036FF64" thumbnail fluid />
                </Col>
                <Col xs={6} md={10}>
                    <p>
                        Percentage -
                        <a href="https://github.com/ken025/Percentage-React-Redux-Project.git" target="_blank"> GitHub  </a><br/>
                        React-Redux application based on keeping track of expenses and savings
                    </p>
                </Col>
            </Row><br/>

            <Row className="projs">
                <Col xs={6} md={10}>
                    <p>
                        Accent -
                        <a href="https://github.com/ken025/Accent-JS-Project.git" target="_blank"> GitHub Repo </a><br/>
                        JavaScript application for users to create and post pins of fashion, cuisine, and interior design
                    </p>
                </Col>
                <Col xs={6} md={2} >
                    <Image src="https://scontent.ftpa1-1.fna.fbcdn.net/v/t1.0-9/142670894_1784005021769447_2465380591063606650_o.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=En0hkV0nLK8AX9Rljcv&_nc_ht=scontent.ftpa1-1.fna&oh=0838df358eee4f5e8593c10a4e37a306&oe=6035993E" thumbnail fluid />
                </Col>
            </Row><br/>

            <Row className="projs">
                <Col xs={6} md={2} >
                    <Image src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/142708275_1784009231769026_4797354798229170886_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=Zj5bCxbJBhwAX_U6OaU&_nc_ht=scontent.ftpa1-2.fna&oh=672d62a5cce2ddbbf779f906d4c95e57&oe=603678CA" thumbnail fluid />
                </Col>
                <Col xs={6} md={10}>
                    <p>
                    Let’s Taco Bout It -
                        <a href="https://github.com/ken025/taco_bout_it.git" target="_blank"> GitHub Repo  </a><br/>
                        Rails application designed for users to review their  favorite restaurants or browse through reviews 
                    </p>
                </Col>
            </Row><br/>

            <Row className="projs">
                <Col xs={6} md={10}>
                    <p>
                        My Pantry -
                        <a href="https://github.com/ken025/Pantry_Sinatra_Project.git" target="_blank"> GitHub Repo </a><br/>
                        Sinatra application designed to give users the ability to keep track of items in their pantry

                    </p>
                    </Col>
                    <Col xs={6} md={2} >
                        <Image src="https://scontent.ftpa1-2.fna.fbcdn.net/v/t1.0-9/142675489_1784010655102217_4715041915104400752_o.jpg?_nc_cat=100&ccb=2&_nc_sid=730e14&_nc_ohc=RaxsqnGvff8AX8uV-dz&_nc_ht=scontent.ftpa1-2.fna&oh=107000a67078fc116ae2c27612249acb&oe=6033FAAB" thumbnail fluid />
                    </Col>
            </Row><br/>
        </Container>
        </>
     );
}
 
export default Projects;