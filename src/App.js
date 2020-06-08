import React from 'react';
import './App.css';

const audioLibrary = {
  Q: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3','Heater-1'],
  W: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3','Heater-2'],
  E: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3','Heater-3'],
  A: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3','Heater-4'],
  S: ['https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3','Clap'],
  D: ['https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3','Open-HH'],
  Z: ['https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',"Kick-n'-Hat"],
  X: ['https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3','Kick'],
  C: ['https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3','Closed-HH'],
};

function App() {

  const handleClick = (event) =>{
    let target = event.target.id[0];
    let audio = document.getElementById(target);
    switch (target){
      case 'Q':
      case 'W':
      case 'E':
      case 'A':
      case 'S':
      case 'D':
      case 'Z':
      case 'X':
      case 'C':
        document.getElementById('display').innerHTML = audioLibrary[target][1];
        break;
      default:
        break;
    }
    console.log(target)
    audio.play();
  };

    document.addEventListener('keydown', (e) => {
      switch (e.keyCode){
        case 81:
        case 87:
        case 69:
        case 65:
        case 83:
        case 68:
        case 90:
        case 88:
        case 67:
          document.getElementById(String.fromCharCode(e.keyCode)+'1').click();
          break;
        default:
          break;
      }
    });

    return (
      <div id = 'wrapper'>
      <div id='display'></div>
        <div id = 'drum-machine'>
            <button className = 'drum-pad' id='Q1' onClick ={handleClick}>Q <audio src={audioLibrary.Q[0]} className = 'clip' id='Q'></audio></button>
            <button className = 'drum-pad' id='W1' onClick ={handleClick}>W<audio src={audioLibrary.W[0]} className = 'clip' id='W'></audio></button>
            <button className = 'drum-pad' id='E1' onClick ={handleClick}>E<audio src={audioLibrary.E[0]} className = 'clip' id='E'></audio></button>
            <button className = 'drum-pad'  id='A1' onClick ={handleClick}>A<audio src={audioLibrary.A[0]} className = 'clip' id='A'></audio></button>
            <button className = 'drum-pad' id='S1' onClick ={handleClick}>S<audio src={audioLibrary.S[0]} className = 'clip' id='S'></audio></button>
            <button className = 'drum-pad' id='D1' onClick ={handleClick}>D<audio src={audioLibrary.D[0]} className = 'clip' id='D'></audio></button>
            <button className = 'drum-pad' id='Z1' onClick ={handleClick}>Z<audio src={audioLibrary.Z[0]} className = 'clip' id='Z'></audio></button>
            <button className = 'drum-pad' id='X1' onClick ={handleClick}>X<audio src={audioLibrary.X[0]} className = 'clip' id='X'></audio></button>
            <button className = 'drum-pad' id='C1' onClick ={handleClick}>C<audio src={audioLibrary.C[0]} className = 'clip' id='C'></audio></button>
        </div> 
      </div>
    );

}

export default App