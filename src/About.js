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
					<svg id='arrow3' class='arrows'>
						<path class='a1' d='M0 0 L30 32 L60 0'></path>
						<path class='a2' d='M0 20 L30 52 L60 20'></path>
						<path class='a3' d='M0 40 L30 72 L60 40'></path>
					</svg>

					<div className='aboutTitle'>About Me</div>

					<svg id='arrow4' class='arrows'>
						<path class='a1' d='M0 0 L30 32 L60 0'></path>
						<path class='a2' d='M0 20 L30 52 L60 20'></path>
						<path class='a3' d='M0 40 L30 72 L60 40'></path>
					</svg>
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
