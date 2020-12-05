import React from 'react';
import './About.css';
import { Grid, Typography } from '@material-ui/core';

const details =
	"I'm a music composer who's become a self-taught web developer. My creative background allows me to view technical projects from a different perspective than most and provides me with a lot of experience in collaboration.";

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

					<Grid item xs={12}>
						{/* <div className='detailsContainer'> */}
						<Typography
							className='detailsContainer'
							style={{ fontSize: '30px' }}>
							{details}
						</Typography>
						{/* </div> */}
					</Grid>

					<Grid item xs={12}>
						<div className='resumeContainer'>
							<a
								href={require('./files/GregBorodulin_Resume.pdf')}
								download='GregBorodulin_Resume'>
								<div className='resumeOverlay'>Download</div>
							</a>

							<img
								className='resumePic'
								src={require('./images/GregBorodulin_Resume.png')}
							/>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default About;
