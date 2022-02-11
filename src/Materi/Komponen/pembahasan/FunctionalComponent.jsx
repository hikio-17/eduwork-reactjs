import { useState } from "react";

const FunctionalComponent = ({nama}) => {
	const [value, setValue] = useState(0);

	const handlePlus = () => {
		setValue(value + 1);
	}

	const handleMinus = () => {
		if(value > 0) {
		setValue(value -1);
		}
	}

	return (
		<div>
			<h1>Komponen ini dibuat dengan functional component</h1>
			<h2>Belajar React.Js {nama}</h2>
			<h3>Tingkatan Kesulitan</h3>
			<button onClick={handleMinus}>-</button>
			<span>{' '} {value} {' ' }</span>
			<button onClick={handlePlus}>+</button>
		</div>
	)
}
export default FunctionalComponent;