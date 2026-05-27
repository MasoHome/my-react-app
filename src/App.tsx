
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Welcome() {
  return <h1>Hello, this is my first component!</h1>;
}

export default function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div>
      <Welcome />
       <section id="center">        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    
    </div>

  );
}

