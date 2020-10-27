import React from 'react';
import './App.css';
import Animate from './Animate'

import Landing from './Landing'
import Projects from './Projects'
import Header from './Header'
import About from './About'

class App extends React.Component {
  constructor(props){
    super(props)

    this.myRef = React.createRef()

    this.state={
      scroll: 0
    }

    this.scroll = this.scroll.bind(this)

  }

  scroll(){
    var top  = this.myRef.current.scrollTop

    if(top >= 100 && top < 200 && this.state.scroll !== 1){
      this.setState({scroll: 1})
    }
    
    if(top >= 200 && top < 290 && this.state.scroll !== 2){
      this.setState({scroll: 2})
    }

    if(top >= 300 && top < 400 && this.state.scroll !== 3){
        this.setState({scroll: 3})
    }

    if(top >= 400 && top < 500 && this.state.scroll !== 4){
      this.setState({scroll: 4})
    }

    if(top >= 500 && top < 600 && this.state.scroll !== 5){
      this.setState({scroll: 5})
    }

    if(top >= 600 && top < 700 && this.state.scroll !== 6){
      this.setState({scroll: 6})
    }

    if(top >= 700 && top < 800 && this.state.scroll !== 7){
        this.setState({scroll: 7})
    }

    if(top >= 800 && top < 900 && this.state.scroll !== 8){
      this.setState({scroll: 8})
    }

    console.log('top distance: ',top)
  }


  render(){
  return (
    <div className="App" ref={this.myRef} onScroll={this.scroll}>

      <Landing scroll={this.state.scroll}/>

      {this.state.scroll >= 0 ?
       <Header scroll={this.state.scroll}/> 
      : null}

      <Projects scroll={this.state.scroll}/>

      <About scroll={this.state.scroll}/>

      

    </div>
  );
  }
}

export default App;
