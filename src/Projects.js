import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { Grid } from '@material-ui/core';
import Animate from './Animate';

const projectList = [
	{
		cover: require('./images/durak_cover1.PNG'),
		name: 'Durak',
		tag: 'Online Russian Card Game',
		demoLink: 'http://34.86.64.212:3000/',
		codeLink: 'https://github.com/gborodulin/durak',
		techList: '| React | JavaScript | WebSockets | NodeJs |',
	},
	{
		cover: require('./gifs/pianoGif.gif'),
		name: "Greg's Piano",
		tag: 'Quirky Playable Piano',
		demoLink: 'https://gborodulin.github.io/gregs-piano/',
		codeLink: 'https://github.com/gborodulin/gregs-piano',
		techList: '| React | JavaScript | Material-UI | Howler |',
	},
	{
		cover: require('./gifs/faangGif.gif'),
		name: 'Faang Stock',
		tag: 'Visual presentation of daily stock prices',
		demoLink: 'https://gborodulin.github.io/faang-stock-visualizer/',
		codeLink: 'https://github.com/gborodulin/faang-stock-visualizer',
		techList: '| React | JavaScript | Material-UI |',
	},
	{
		cover: require('./gifs/quizzerGif.gif'),
		name: 'Music Quizzer',
		tag: 'Test your knowledge of popular artists',
		demoLink: 'https://gborodulin.github.io/music-quizzer/',
		codeLink: 'https://github.com/gborodulin/music-quizzer',
		techList: '| React | JavaScript | Material-UI |',
	},
	{
		cover: require('./images/igf_cover1.PNG'),
		name: 'Indie Game Forum',
		tag: 'Explore, Rate, and Discuss your favorite indie games',
		demoLink: 'http://35.245.98.231:3000/',
		codeLink: 'https://github.com/gborodulin/Indie-Game-Forum',
		techList: '| React | JavaScript | NodeJs | SQLite |',
	},

	{
		cover: require('./images/foxsCover.png'),
		name: "Fox's Shots",
		tag: 'Personal Website for Local Photographer',
		demoLink: 'https://gborodulin.github.io/foxs-shots-photography/',
		codeLink: 'https://github.com/gborodulin/foxs-shots-photography/',
		techList: '| React | JavaScript | Material-UI |',
	},
];

class Projects extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.scroll < 2 && this.props.scroll >= 2)
			Animate.slideInProjects();

		if (prevProps.scroll >= 2 && this.props.scroll < 2) {
			Animate.slideOutProjects();
		}
	}

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
					{projectList.map((cur) => (
						<Grid item md={5} sm={8}>
							<ProjectCard scroll={this.props.scroll} project={cur} />
						</Grid>
					))}
				</Grid>
			</div>
		);
	}
}

export default Projects;
