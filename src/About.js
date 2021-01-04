import React from 'react';
import './About.css';
import { Grid, Typography } from '@material-ui/core';

const details =
	'Composer turned Coder, my creative background allows me to view technical projects from a different perspective. With a multi-faceted experience in technology, (including IT Services, Hardware Design/Repair and Audio Signal Processing) I strive to continuously educate myself with new tools and enjoy collaborating with others.';

class About extends React.Component {
	render() {
		return (
			<div className='about'>
				<div className='borderBlur2'></div>

				<div className='aboutTitleContainer'>
					<div className='aboutTitle'>About Me</div>
				</div>
				<br />

				<Grid
					container
					justify='center'
					style={{ paddingLeft: '10%', paddingRight: '10%' }}>
					{/* <Grid item xs={5}>
						<div className='profilePic'>
							<img src={require('./images/greg.jpg')} />
						</div>
					</Grid> */}

					<Grid item sm={12} md={6}>
						<Typography
							className='detailsContainer'
							style={{ fontSize: '30px', fontFamily: 'subtitle' }}>
							{details}
						</Typography>
					</Grid>

					<Grid item sm={12} md={6}>
						<div className='resumeContainer'>
							<a
								href={require('./images/GregBorodulin_Resume.pdf')}
								download='GregBorodulin_Resume'>
								<div className='resumeOverlay'>Download</div>
							</a>

							<img
								className='resumePic'
								src={require('./images/GregBorodulin_Resume.png')}
								alt='resume'
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
