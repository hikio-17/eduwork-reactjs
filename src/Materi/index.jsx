import React, { Component} from "react";
// import ClassComponent from "./Komponen/ClassComponent";
// import FunctionalComponent from "./Komponen/FunctionalComponent";
import Bootstrap from "./Styling/index";

export default class Komponen extends Component {

	render() {
		return(
			<div>
				{/*<ClassComponent nama="Fajri Muhammad Tio"/>
				<FunctionalComponent nama="hikio"/>*/}
				<Bootstrap />
			</div>
		)
	}
}

