import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved

export default class Foo extends React.Component {

	render() {
		const { name, ...props } = this.props;

		return (
			<p {...props}>Hello, {name}!</p>
		);
	}

}

Foo.displayName = 'Foo';

Foo.propTypes = {
	name: React.PropTypes.string.isRequired
};
