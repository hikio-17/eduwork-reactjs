import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import { Navbar, Container, Nav, Jumbotron, Button, Row, Col, CardDeck, Card} from "react-bootstrap";
import foto from "./img/foto.jpg";
import sd from "./img/sd.png";
import mts from "./img/mts.png";
import man from "./img/man.png";
import unib from "./img/unib.png";

export default class Bootstrap extends Component {

	render() {
		return(
			

			<div>
			<Navbar className="Navbar fixed-top navbar-expand-md col-8 mx-auto">
			    <Container>
				    <Nav className="link me-auto navbar-nav mx-auto">
				      <Nav.Link className="nav-item fs-5 text-white" href="#home" style={{ color: "white"}}>Home</Nav.Link>
				      <Nav.Link className="nav-item ms-4 fs-5 text-white" href="#about me" style={{ color: "white"}}>About Me</Nav.Link>
				      <Nav.Link className="nav-item ms-4 fs-5 text-white" href="#education" style={{ color: "white"}}>Education</Nav.Link>
				    </Nav>
			    </Container>
			</Navbar>

			<Container >
			<Jumbotron className="jumbotron text-center" id="home">
				 <img src={ foto } alt="foto profil" style={{ width: "200px"}} className="rounded-circle"/>
		 		<h1 className="fs-1 text-white">Fajri Muhammad Tio</h1>
		  		<p className="lead text-white">Mahasiswa S1 Geofisika Universitas Bengkulu</p>
		  	</Jumbotron>
		  	</Container>

		  	<Container className="col text-center" id="about me">
					<h2 style={{color : "rgb(0, 177, 195)"}}>About Me</h2>
			</Container>
			<br/>
			<Container>
			  <Row>
			    <Col sm={6}><img src={ foto } alt="foto profil" style={{ width: "200px"}} className="rounded-circle"/>
		 		</Col>
			    <Col sm={6}>
			    	<p>
						Hai :) <br/> Saya adalah seorang <i class="english">Mahasiswa Jurusan S1 Geofisika Universitas Bengkulu :')</i>
					</p>
					<p>
						Lahir pada bulan    <b class="important">Januari</b> tanggal    <b class="important">06</b> dan tahun    <b class="important">2000</b>, bertempat di    <b class="important">Kota Sungai Penuh</b>, Jambi, Indonesia.
					</p>
					<p>
						Tinggal dan Lahir di Kota    <b class="important">Sungai Penuh</b>, membuat Saya begitu menyukai  <b class="important">Tantangan & Belajar Hal-hal Baru</b> terlebih lagi dalam   <b class="important">Perkembangan Teknologi</b> yang begitu   <b class="important">Pesat</b>.
					</p>
			    </Col>
			  </Row>
			</Container>
			<br/>
			


			<Container>
			<Container className="col text-center" id="education">
					<h2 style={{color : "rgb(0, 177, 195)"}}>Education</h2>
			</Container>
			<br/>
			<CardDeck className="text-center">
			  <Card>
			    <Card.Img variant="top" src= {sd} />
			    <Card.Body>
			      <Card.Title>SDN 015/XI Lawang Agung</Card.Title>
			      <Card.Text>
			        2006 - 2012
			      </Card.Text>
			    </Card.Body>
			  </Card>

			  <Card >
			    <Card.Img variant="top" src={mts} />
			    <Card.Body>
			      <Card.Title>MTsN Model Kota Sungai Penuh</Card.Title>
			      <Card.Text>
			        2012 - 2015
			      </Card.Text>
			    </Card.Body>			   
			  </Card>

			  <Card>
			    <Card.Img variant="top" src={man} style={{height : "130px"}} />
			    <Card.Body>
			      <Card.Title>MAN 1 Kota Sungai Penuh</Card.Title>
			      <Card.Text>
			        2015 - 2018
			      </Card.Text>
			    </Card.Body>

			  </Card>
			  <Card>
			    <Card.Img variant="top" src= {unib} style={{height : "130px"}}/>
			    <Card.Body>
			      <Card.Title>Universitas Bengkulu</Card.Title>
			      <Card.Text>
			        2018 - Sekarang
			      </Card.Text>
			    </Card.Body>
			  </Card>
		</CardDeck>
		</Container>



			</div>

			
			
			
						
		)
	}
}