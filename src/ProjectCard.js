import React from 'react';

class ProjectCard extends React.Component {
	render() {
		const project = this.props.project;

		return (
			<div className='projectCard'>
				<img src={project.cover} alt='project cover' />

				<div className='projectInfo'>
					<div className='nameContainer'>
						<div className='projectInfoName'>{project.name}</div>
					</div>

					<div className='tagContainer'>
						<div className='projectInfoTag'>{project.tag}</div>
					</div>

					<div className='demoContainer'>
						<a href={project.demoLink} target='_blank'>
							<div className='demo button'>Demo</div>
						</a>
					</div>

					<div className='codeContainer'>
						<a href={project.codeLink} target='_blank'>
							<div className='code button'>Code</div>
						</a>
					</div>

					<div className='techContainer'>
						<div className='tech'>{project.techList}</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectCard;
