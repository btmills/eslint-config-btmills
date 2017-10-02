/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved */
import PropTypes from 'prop-types';
import React from 'react';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved */

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
	name: PropTypes.string.isRequired
};
