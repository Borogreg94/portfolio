import React from 'react';
import './About.css';

const details = 'I\'m a front-end web developer with a creative and technical background. I\'m big into open and direct communication with teammates and love professional enviroments where collaboration is emphasized'

class About extends React.Component {
    render(){
        return (
            <div className='about'>
                <div className='borderBlur2'></div>

                <div className='aboutTitleContainer'>
                <svg id='arrow3' class="arrows">
					<path class="a1" d="M0 0 L30 32 L60 0"></path>
					<path class="a2" d="M0 20 L30 52 L60 20"></path>
					<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>

                <div className='aboutTitle'>
                About Me
                </div>

                <svg id='arrow4' class="arrows">
					<path class="a1" d="M0 0 L30 32 L60 0"></path>
					<path class="a2" d="M0 20 L30 52 L60 20"></path>
					<path class="a3" d="M0 40 L30 72 L60 40"></path>
				</svg>
                </div>
                <br/>

                <div className='profilePic'>
                        <img src={require('./images/greg.jpg')}/>
                </div>

                <div className='detailsContainer'>
                    <p>{details}</p>
                </div>

                

                <div className='resumeContainer'>
                    <a href={require('./files/GregBorodulin_Resume.pdf')} download='GregBorodulin_Resume'>
                        <div className='resumeOverlay'>Download</div>
                    </a>
                    
                    
                    <img className='resumePic'  src={require('./images/GregBorodulin_Resume.png')} />
                    
                </div>

                {/* <div className='contactContainter'>
                    <div className='contactTitle'>Contact</div>
                    <form action='mailto:borogreg@gmail.com' method='POST' enctype='multipart/form-data' name='EmailForm'>
                        Your Email:<br/>
                            <input type='text' size='25' name='ContactName'/><br/><br/>
                        Message:<br/>
                            <textarea name='ContactComment' rows='10' cols='40'/>
                            <br/><br/>
                            <input id='submit' type='submit' value='Submit'/>
                    </form>
                </div> */}
            </div>
            
        )
    }
}

export default About