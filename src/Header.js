import React from 'react';
import './Header.css';
import Animate from './Animate';
import { Typography } from '@material-ui/core';

class Header extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.scroll < 3 && this.props.scroll >= 3) Animate.fadeInHeader();

		if (prevProps.scroll >= 3 && this.props.scroll < 3) Animate.fadeOutHeader();
	}

	render() {
		return (
			<div className='App-header'>
				<Typography
					variant='h2'
					className='headerTitle'
					style={{ fontFamily: 'title' }}>
					Greg Borodulin
				</Typography>
				<div className='proLinks'>
					<a
						href='https://www.linkedin.com/in/greg-borodulin-270734a8/'
						target='_blank'>
						<img src={require('./icons/linkedin.svg')} />
					</a>
					<a href='https://github.com/gborodulin' target='_blank'>
						<img src={require('./icons/github.svg')} />
					</a>
				</div>
			</div>
		);
	}
}

export default Header;
