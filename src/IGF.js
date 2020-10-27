import React from 'react';

import Animate from './Animate'

class IGF extends React.Component {
    componentDidUpdate(prevProps){
        if(prevProps.scroll < 7 && this.props.scroll >=7)
        Animate.slideInIgf()

        if(prevProps.scroll >= 7 && this.props.scroll < 7){
            Animate.slideOutIgf()
        }
    }

    render(){
        return(
            <div className='projectCard igfCard'>
          <img src={require('./images/igf_cover1.PNG')}></img>

          <div className='projectInfo'>
            <div className='nameContainer'>
             <div className='projectInfoName'>Indie Game Forum</div>
            </div>

            <div className='tagContainer'>
             <div className='projectInfoTag'>Explore, Rate, and Discuss your favorite indie games</div>
            </div>

            <div className='demoContainer'>
              <a href='http://35.245.98.231:3000/' target="_blank">
                <div className='demo button'>Demo</div>
              </a>
            </div>

            <div className='codeContainer'>
              <a href='https://github.com/Borogreg94/Indie-Game-Forum' target="_blank">
                <div className='code button'>Code</div>
              </a>
            </div>

            <div className='techContainer'>
               <div className='tech'>| React | JavaScript | NodeJs | SQLite | </div>
            </div>
          </div>

        </div>
        );
    }
}

export default IGF