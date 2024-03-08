import React, { useEffect } from 'react';
import './App.css';
//import data for teams from json file
import jsonData from './CollegeBasketballTeams.json';
//import react bootstrap components
import Card from 'react-bootstrap/Card';
import { CardBody, CardHeader } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

const teams = jsonData.teams;

//introduction to website
function Header() {
  return (
    <div>
      <h1 className="header">March Madness</h1>
      <br></br>
      <h5>
        This website contains information about all the colleges in NCAA
        Basketball. Each card contains the name of a college, its mascot, and
        where it is located.<br></br>Enjoy exploring the teams of NCAA
        Basketball!
      </h5>
      <br></br>
      <img
        src="/img/basketball.jpg"
        alt="Hand throwing a basketball"
        width={400}
      ></img>
      <br></br>
    </div>
  );
}

//Create a Card with info about a basketball team
class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <Card
        border="black"
        style={{ width: '18rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
      >
        <CardHeader
          style={{
            backgroundColor: 'orange',
            padding: '.5rem',
            borderBottom: '1px solid black',
          }}
        ></CardHeader>
        <CardBody>
          <Card.Title>{oneTeam.school}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Mascot: {oneTeam.name}
          </Card.Subtitle>
          <Card.Text>
            Location: {oneTeam.city}, {oneTeam.state}
          </Card.Text>
        </CardBody>
      </Card>
    );
  }
}

//Make a card for each of the teams in the json file and put it into a grid
function TeamList() {
  return (
    <Row md={3} className="g-4">
      {teams.map((team, idx) => (
        <Col key={idx}>
          <Team {...team} />
        </Col>
      ))}
    </Row>
  );
}

function Footer() {
  return <footer>&#169; Emma Bastian</footer>;
}

function App() {
  useEffect(() => {
    document.title = 'March Madness';
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <TeamList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
