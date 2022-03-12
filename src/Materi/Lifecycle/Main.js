import React, { Component } from 'react';
import axios from 'axios';
import { Navbar, Container, Card, Button, Row , CardDeck, Form, FormControl, Nav} from "react-bootstrap"


class Main extends Component {
	constructor() {
		super();
		this.state = {
			dataApi : [],
			search : "programmer"
		}

		this.inputOnChange = this.inputOnChange.bind(this)
	}

	inputOnChange (e) {
		this.setState({
			search : e.target.value
		})
		// console.log(e.target.value)
	}

	componentDidMount() {
	    axios
	      .get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=c8b4d2db52eb4cdf99973089bf534f0a`)
	      .then((res) => {
	        console.log(res);
	        this.setState({ dataApi: res.data.articles });
	      })
	      .catch((error) => {
	        console.log(error);
	      });
	  }

	componentDidUpdate(prevState) {
	      axios
	        .get(`https://newsapi.org/v2/everything?q=${this.state.search}&apiKey=c8b4d2db52eb4cdf99973089bf534f0a`)
	        .then((res) => {
	          console.log(res);
	          this.setState({ dataApi: res.data.articles });
	        })
	        .catch((error) => {
	          console.log(error);
	        });
	    
	  }

	render() {

		return (
			<div>

				{/*Bagian Navbar*/}
				<Navbar bg="dark" expand="xlg" variant="dark">
				  <Navbar.Brand href="#">Portal Berita</Navbar.Brand>
				    <Form className="d-flex">
				      <FormControl
				        type="search"
				        placeholder="Search"
				        className="mr-2"
				        aria-label="Search"
				        onChange={this.inputOnChange}
				      />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				</Navbar>

				{/* card */}
		          <Container>
		          	<Row>
		            {this.state.dataApi.map((data, index) => {
		              return (
		                <div className="col-md-3 my-3" key={index}>
		                  <Card border="black">
		                    <Card.Img variant="top" src={data.urlToImage} height="300px"/>
		                    <Card.Body>
		                      <Card.Title>{data.title}</Card.Title>
		                      <Card.Subtitle className="mb-2 text-muted">
		                        {data.author}
		                        {data.publishedAt}
		                      </Card.Subtitle>
		                      <Card.Text style={{textAlign : "justify"}}>{data.content}</Card.Text>
		                      <Button variant="primary" href={data.url} >Read more</Button>
		                    </Card.Body>
		                  </Card>
		                </div>
		              );
		            })}
		          </Row>
		          </Container>		
			</div>
				
			
		)
	}
}

export default Main;