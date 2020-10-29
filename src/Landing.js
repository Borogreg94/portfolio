import React from 'react';
import './Landing.scss';

import Animate from './Animate'

const wind= (
    <>
        <svg id="wind1" width="442" height="342" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 442 342">
        <path id="svg_1" d="m442 75c0 0-65-39-120-33-110 8-214 83-259 82-33 0-55-18-52-45 3-21 27-37 53-34 21 2 36 18 34 35-2 14-17 24-34 22-13-1-23-11-21-22 1-9 11-15 22-14 9 1 15 7 14 14-1 6-7 10-14 9-5 0-9-5-9-9" stroke="#fff" fill="none"/>
        </svg>


        <svg id="wind5" width="442" height="342" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 442 342">
        <path id="svg_5" d="m442 228c0 0-40-43-63-50-22-7-23 41-56 45-122 11-323-53-323-53" stroke="#fff" fill="none"/>
        </svg>

        <svg id="wind6" width="442" height="342" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 442 342">
        <path id="svg_6" d="m442 278c0 0-22-3-89-18-68-16-127 34-195 35-68 1-157-70-157-70" stroke="#fff" fill="none"/>
        </svg>

</>
)

class Landing extends React.Component {

    componentDidMount(){
        Animate.fadeInTitle()
    }

    componentDidUpdate(prevProps){
        if(prevProps.scroll < 3 && this.props.scroll >= 3)
        Animate.fadeOutTitle()

        if(prevProps.scroll >= 3 && this.props.scroll < 3)
        Animate.fadeInTitle()

    }

    render(){
        return(
            <>
        <div className='landing'>
            <div className='iconRow'>
                <img className='reactIcon' src={require('./icons/react.svg')}/>
                <img className='jsIcon' src={require('./icons/javascript.svg')}/>
                <img className='bigIcon' src={require('./icons/html.svg')}/>
                <img className='bigIcon' src={require('./icons/css.svg')}/>
                <img className='smallIcon' src={require('./icons/nodejs.svg')}/>   
                <img  className='smallIcon' src={require('./icons/sqlite.svg')}/>
            </div>
            <div className='wind'>{wind}</div>
            <div className='name_tag_proLinks'>
                <div className='name'>Greg Borodulin</div>
                <div className='tag'>Front-End Web Developer</div>
                <div className='proLinksLanding'>
                    <a href='https://www.linkedin.com/in/greg-borodulin-270734a8/' target='_blank'>
                        <img src={require('./icons/linkedin.svg')}/>
                    </a>
                    <a href='https://github.com/Borogreg94' target='_blank'>
                        <img src={require('./icons/github.svg')}/>
                    </a>
                </div>
            </div>
            
        </div>
        <div className='borderBlur'></div>
        </>
        );
    }
}

export default Landing