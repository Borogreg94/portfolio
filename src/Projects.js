import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';

class Projects extends React.Component {
	render() {
		return (
			<div className='projects'>
				<div className='aboutTitleContainer'>
					<svg id='arrow1' class='arrows'>
						<path class='a1' d='M0 0 L30 32 L60 0'></path>
						<path class='a2' d='M0 20 L30 52 L60 20'></path>
						<path class='a3' d='M0 40 L30 72 L60 40'></path>
					</svg>

					<div className='projectsTitle'>Projects</div>

					<svg id='arrow2' class='arrows'>
						<path class='a1' d='M0 0 L30 32 L60 0'></path>
						<path class='a2' d='M0 20 L30 52 L60 20'></path>
						<path class='a3' d='M0 40 L30 72 L60 40'></path>
					</svg>
				</div>

				<Grid
					container
					justify='space-evenly'
					style={{ paddingLeft: '5%', paddingRight: '5%' }}>
					<Grid item md={5} sm={8}>
						<ProjectCard scroll={this.props.scroll} project='durak' />
					</Grid>

					<Grid item md={5} sm={8}>
						<ProjectCard scroll={this.props.scroll} project='igf' />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default Projects;
