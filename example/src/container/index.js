import React, { Component } from 'react';
import Hello from 'index';

import './index.less';

class Main extends Component {

	constructor(props, context) {
		super(props, context);
	}

	render() {

		return (
			<Hello></Hello>
		);
	}
}

export default Main;