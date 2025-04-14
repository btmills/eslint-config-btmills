import PropTypes from 'prop-types';
import React from 'react';

export default class Foo extends React.Component {
	render() {
		const { name, ...props } = this.props;

		return (
			<p {...props}>
				<img>What</img>
				Hello, {name}!
			</p>
		);
	}
}

Foo.displayName = 'Foo';

Foo.propTypes = {
	name: PropTypes.string.isRequired,
};
