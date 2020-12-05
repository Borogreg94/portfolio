import React from 'react';

class ProjectCard extends React.Component {
	render() {
		let cls, cover, name, tag, demoLink, codeLink, techList;

		if (this.props.project === 'igf') {
			cls = 'projectCard igfCard';
			cover = require('./images/igf_cover1.PNG');
			name = 'Indie Game Forum';
			tag = 'Explore, Rate, and Discuss your favorite indie games';
			demoLink = 'http://35.245.98.231:3000/';
			codeLink = 'https://github.com/gborodulin/Indie-Game-Forum';
			techList = '| React | JavaScript | NodeJs | SQLite |';
		}

		if (this.props.project === 'durak') {
			cls = 'projectCard durakCard';
			cover = require('./images/durak_cover1.PNG');
			name = 'Durak';
			tag = 'Online Russian Card Game';
			demoLink = 'http://34.86.64.212:3000/';
			codeLink = 'https://github.com/gborodulin/durak';
			techList = '| React | JavaScript | WebSockets | NodeJs |';
		}

		if (this.props.project === 'faang') {
			cls = 'projectCard durakCard';
			cover = require('./images/faangPhoto.png');
			name = 'Faang Stock';
			tag = 'Visual presentation of daily stock prices';
			demoLink = 'https://gborodulin.github.io/faang-stock-visualizer/';
			codeLink = 'https://github.com/gborodulin/faang-stock-visualizer';
			techList = '| React | JavaScript | Material-UI |';
		}

		return (
			<div className={cls}>
				<img src={cover} />

				<div className='projectInfo'>
					<div className='nameContainer'>
						<div className='projectInfoName'>{name}</div>
					</div>

					<div className='tagContainer'>
						<div className='projectInfoTag'>{tag}</div>
					</div>

					<div className='demoContainer'>
						<a href={demoLink} target='_blank'>
							<div className='demo button'>Demo</div>
						</a>
					</div>

					<div className='codeContainer'>
						<a href={codeLink} target='_blank'>
							<div className='code button'>Code</div>
						</a>
					</div>

					<div className='techContainer'>
						<div className='tech'>{techList}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;
