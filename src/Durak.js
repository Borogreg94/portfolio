import React from 'react';

import Animate from './Animate'

class Durak extends React.Component {
    componentDidUpdate(prevProps){
        if(prevProps.scroll < 2 && this.props.scroll >=2)
        Animate.slideInDurak()

        if(prevProps.scroll >= 2 && this.props.scroll <2)
        Animate.slideOutDurak()
    }

    render(){
        return(
          <div className='projectCard durakCard'>
          <img src={require('./images/durak_cover1.PNG')}></img>

          <div className='projectInfo'>
            <div className='nameContainer'>
             <div className='projectInfoName'>Durak</div>
            </div>

            <div className='tagContainer'>
             <div className='projectInfoTag'>Online Russian Card Game</div>
            </div>

            <div className='demoContainer'>
              <a href='http://34.86.64.212:3000/' target="_blank">
                <div className='demo button'>Demo</div>
              </a>
            </div>

            <div className='codeContainer'>
              <a href='https://github.com/Borogreg94/durak' target="_blank">
                <div className='code button'>Code</div>
              </a>
            </div>

            <div className='techContainer'>
               <div className='tech'>| React | JavaScript | WebSockets | NodeJs | </div>
            </div>
          </div>

        </div>
        );
    }
}

export default Durak