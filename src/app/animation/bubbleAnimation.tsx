"use client";
import react,{useEffect,useState} from 'react';

interface Bubble{
    id:number;
    left:string;
    top:string;
    scale:string;
    animationDuration:string;
    animationDelay:string; 
    xOffset:number;
    yOffset:number;
}

export default function BubbleAnimation(){
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const [cursor_pos,setCursor_pos]=useState({x:0,y:0});

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({length:100}, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      scale: `${Math.random() * 0.2 + 0.5}`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      animationDelay: `${Math.random() * 5}s`,
      xOffset:Math.random() * 2 -1,
      yOffset:Math.random() * 2 -1,

    }));
    setBubbles(newBubbles);
    
    //track mouse position
    const handleMouseMove =(event: MouseEvent)=>{
        setCursor_pos({x:event.clientX,y:event.clientY});
    }
    
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };

  }, []);

  const calculateMovement = (left:string, top:string, xOffset:number, yOffset:number) => {
    const bubbleX = parseFloat(left) / 100 * window.innerWidth;
    const bubbleY = parseFloat(top) / 100 * window.innerHeight;

    const distanceX = (cursor_pos.x - bubbleX) / window.innerWidth;
    const distanceY = (cursor_pos.y - bubbleY) / window.innerHeight;

    const moveX = distanceX * 10000 * xOffset; // Adjust this multiplier for more/less effect
    const moveY = distanceY * 10000 * yOffset;

    return {
      transform: `translate(${moveX}px, ${moveY}px))`,
    };
  }

//   scale(${Math.random() * 0.2 + 0.5}


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-9]">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-black bg-opacity-10 w-3 h-3 animate-float"
          style={{
            left: bubble.left,
            top: bubble.top,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.animationDelay,
            ...calculateMovement(bubble.left, bubble.top, bubble.xOffset, bubble.yOffset),
          }}
        />
      ))}
    </div>
  );
}