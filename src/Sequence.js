import React, {Component} from 'react';
import './Sequence.css';

class Sequence extends Component{
  constructor(props){
    super(props);
    this.state = {
      columns:0,
      col1:[],
      col2:[],
      col3:[],
      col4:[],
    }
  }

  addColumns(number = 4){
    let arr = [];
    for(let i = 0; i< number; i++){
      console.log(arr)
      arr.push(
        <div>
          <button key = {'Q-col'+i} id={'Q-col'+i}>Q</button>
          <button key = {'Q-col'+i} id={'W-col'+i}>W</button>
          <button key = {'Q-col'+i} id={'E-col'+i}>E</button>
          <button key = {'Q-col'+i} id={'A-col'+i}>A</button>
          <button key = {'Q-col'+i} id={'S-col'+i}>S</button>
          <button key = {'Q-col'+i} id={'D-col'+i}>D</button>
          <button key = {'Q-col'+i} id={'Z-col'+i}>Z</button>
          <button key = {'Q-col'+i} id={'X-col'+i}>X</button>
          <button key = {'Q-col'+i} id={'C-col'+i}>C</button>
        </div>
        )
    }
    return arr
  }
  render(){

    return(
      <div>
        {this.addColumns(5)}
      </div>
    );  
  }
}

export default Sequence