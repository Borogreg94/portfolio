import React from 'react';
import './Header.css';
import Animate from './Animate'

class Header extends React.Component {
    componentDidUpdate(prevProps){
        if(prevProps.scroll < 3 && this.props.scroll >= 3)
        Animate.fadeInHeader()

        if(prevProps.scroll >= 3 && this.props.scroll < 3)
        Animate.fadeOutHeader()
    }

    render(){
        return(
         <header className="App-header">
            
            <div className='headerTitle'>Greg Borodulin</div>
            <div className='proLinks'>
                <a href='https://www.linkedin.com/in/gregory-borodulin-270734a8/' target='_blank'>
                    <img src={require('./icons/linkedin.svg')}/>
                </a>
                <a href='https://github.com/Borogreg94' target='_blank'>
                    <img src={require('./icons/github.svg')}/>
                </a>
            </div>
        </header>
        );
    }
}

export default Header