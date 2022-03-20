import { Col, Button, Row, Container, Card} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { decrementWitchCheckingAction, increment } from '../../../app/Features/Counter/actions';


const Counter = () => {
	let {count} = useSelector(state => state.counter)
	const dispatch = useDispatch();

	return (
		<div>
			<Container className="mt-5">
				<Row className="d-grid">
					<Col md={{span:4, offset:4}} style={{textAlign:"center"}}>

					<Card border="primary" className="p-3" bg="primary">
						<Card.Title>Aplikasi Counter</Card.Title>
						<Card.Text>Display : {count}</Card.Text>

						<Card.Body>
							<Button variant="success" size="sm" onClick={() => dispatch(decrementWitchCheckingAction(1))}>(-) Minus</Button>
							{'	'}
							<Button variant="success" size="sm" onClick={() => dispatch(increment(1))}>(+) Plus</Button>	
						</Card.Body>
					</Card>	
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default Counter;