import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Card, Button, Form, Navbar, FormControl, Row} from "react-bootstrap";

function Hooks() {
	const [data, setData] = useState([]);
	const [search, setSearch] = useState("bitcoin");

	useEffect(() => {
    async function getResults() {
      const results = await axios(`https://newsapi.org/v2/everything?q=${search}&apiKey=872548cb815940ceb00f8c39611b4795&q`);
      setData(results.data.articles);
    }
    getResults();
  }, [search]);

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
				        value = {search}
				        onChange={(e) => setSearch(e.target.value)}
				      />
				      <Button variant="outline-success">Search</Button>
				    </Form>
				</Navbar>

				{/* card */}
		          <Container>
		          	<Row>
		            {data.map((data, index) => {
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




export default Hooks;