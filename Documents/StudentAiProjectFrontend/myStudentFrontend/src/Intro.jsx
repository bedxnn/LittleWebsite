import { useState, useEffect } from "react";

export default function Intro() {
  const [displayed, setDisplayed] = useState("");
  const text = "I love coding and making websites or applications" 
  const speed = 100; 

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval)
     
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="intro">
      <p>{displayed}
    
        
        </p>
    </div>
  );
}
