import { useState } from 'react';
import './App.css';

function ThemeChanger() {
  const [color, setColor] = useState('white');

  return (
   
    <div style={{ backgroundColor: color }}>
      <h1>Background Color Changer</h1>
      <div className='button'>
        
        <ul>
          <li><button onClick={() => setColor("red")}>Red</button></li>
          <br/>
          <li><button onClick={() => setColor("white")}>White</button></li>
          <br/>
          <li><button onClick={() => setColor("black")}>Black</button></li>
          <br/>
          <li><button onClick={() => setColor("green")}>Green</button></li>
          <br/>
          <li><button onClick={() => setColor("yellow")}>Yellow</button></li>
          <br/>
          <li><button onClick={() => setColor("violet")}>Violet</button></li>
          <br/>
          <li><button onClick={() => setColor("grey")}>Grey</button></li>
          <br/>
          <li><button onClick={() => setColor("pink")}>Pink</button></li>
        </ul>
       
      </div>
    </div>
   
  );
}

export default ThemeChanger;
