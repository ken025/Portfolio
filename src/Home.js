import { Button, Jumbotron, Container, Image } from 'react-bootstrap'

const Home = () => {
    return ( 
        <>
        {/* <Image id="header" src="https://img.wallpapersafari.com/desktop/1536/864/55/90/srHJTi.jpg" fluid /> */}
        <section id="header" />
        <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
        <h1>This is the Home page</h1>
        <Button>hey</Button>
        </>
     );
}
 
export default Home;