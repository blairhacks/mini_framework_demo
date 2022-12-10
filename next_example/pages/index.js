import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  let [ clicks, setClicks ] = useState(0);
  
  return (
    <div className={styles.main}>
      <h1>You have clicked the button {clicks} times!</h1>
      <button onClick={() => setClicks(clicks + 1)}>The Button</button>

      { (clicks >= 10) ? 
        <p>You have clicked the button 10 times 👍</p> 
        : <p>You have not clicked the button 10 times</p> }

    </div>  
  )
}
