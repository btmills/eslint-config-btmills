import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved

export default class Foo extends React.Component {

	render() {
		return (
			<p>Hello, ${this.props.name}!</p>
		);
	}

}

Foo.displayName = 'Foo';

Foo.propTypes = {
	name: React.PropTypes.string.isRequired
};
