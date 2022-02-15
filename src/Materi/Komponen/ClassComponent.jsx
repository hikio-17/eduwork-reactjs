import React from "react";

class ClassComponent extends React.Component {
	state = {
		value: 0 
	}

	handlePlus = () => {
		this.setState({value: this.state.value + 1})
	}

	handleMinus = () => {
		this.setState({value: this.state.value - 1})
		
	}

	render() {
		return(
			<div>
				<h1>Komponen ini dibuat dengan classcomponent</h1>
				<h2>Hallo,{this.props.nama}</h2>
				<h3>Umur</h3>
				<button onClick={this.handleMinus}>-</button>
				<span>{' '} {this.state.value} {' '}</span>
				<button onClick={this.handlePlus}>+</button>
			</div>
		)
	}
}

export default ClassComponent;