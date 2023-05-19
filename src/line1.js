import React, { useRef, useEffect, useState } from 'react';
 
function Line1() {
  const canvas = useRef();
  let ctx = null;
  const[dx,setdx]=useState(25)
  const[dx1,setdx1]=useState(25)
  const[dy,setdy]=useState(150)
  const[dy1,setdy1]=useState(150)
  const[randomlevel,setrandomlevel]=useState(135)
  const [isRunning, setIsRunning] = useState(false);
  //const[codd,setcodd]=useState(0)
 let odd=150
 let odd1=0

 const [seconds, setSeconds] = useState(0)

  const interval = useRef(null)
  const interval1 = useRef(null)
  const px = useRef(25);
  const py = useRef(150);
  const codd = useRef(1);
  const timer1=useRef(0)
  const randseed=useRef(0)
  const playinterval=useRef(5000)

  
  //useEffect(() => { if (seconds === 60) stopCounter() }, [seconds])

 

  const stopCounter = () => {
    setIsRunning((isRunning) => !isRunning);

  }

  const initializecanvas=()=>{
    const canvasEle = canvas.current;
    canvasEle.width = canvasEle.clientWidth;
    canvasEle.height = canvasEle.clientHeight;
    // get context of the canvas
    ctx = canvasEle.getContext("2d");
    canvascolor()
  }
 
  useEffect(() => {
    if(isRunning){
        clearInterval(interval1.current);
        interval1.current = null;
        interval.current = setInterval(() => {
         timer1.current=timer1.current+1
          drawlvline()
          playinterval.current=5000
          
        }, 30)
      }
      else{
          clearInterval(interval.current);
          interval.current = null;
          timer1.current=0
          randseed.current=1+Math.random()
          randseed.current=Number((randseed.current).toFixed(2));

          //start wait
          interval1.current = setInterval(() => {
            px.current = 25;
            py.current = 150;
            codd.current = 1;
            setIsRunning(true)
            //handleclear()
            
          }, playinterval.current)
      }
      
  }, [isRunning]);
  
 
  useEffect(() => {
    initializecanvas()
    drawxy()
    //startCounter()
  }, []);
 
  // draw a line
  const canvascolor=()=>{
    ctx.beginPath();
    ctx.rect(0, 0, 300, 300);
    ctx.fillStyle = "grey";
    ctx.fill();
  }
  const drawLine = (info, style = {}) => {
    const { x, y, x1, y1 } = info;
    const { color = 'black', width = 1 } = style;
 
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x1, y1);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  }

  const drawxy=()=>{
    drawLine({ x:25, y: 0, x1: 25, y1: 150}, { color: 'green', width: 2 });
    drawLine({ x:25, y: 150, x1: 290, y1: 150 }, { color: 'green', width: 2});
    //y labels
    writeText({ text: '1.2X', x: 0, y: 120 });
    writeText({ text: '1.4X', x: 0, y: 90 });
    writeText({ text: '1.6X', x: 0, y: 60 });
    writeText({ text: '1.7X', x: 0, y: 30 });
    //x labels
    writeText({ text: '2', x: 50, y: 160 });
    writeText({ text: '4', x: 100, y: 160 });
    writeText({ text: '6', x: 150, y: 160 });
    writeText({ text: '8', x: 200, y: 160});
    writeText({ text: '10', x: 250, y: 160});

  }
  const handleclear=()=>{
    initializecanvas()
    //drawxy()
    codd.current=1
    px.current=25
    py.current=150
    const canvasEle = canvas.current;
    ctx.clearRect(0, 0, canvasEle.width, canvasEle.height);
  }

  const redrawline=()=>{
    drawxy()
  }

  const drawlvline=()=>{
    let ny=py.current-10
    odd=(150-ny)
    odd1=(150-ny)
    odd1=(150-ny)*0.2/30
    odd1=Number((odd1).toFixed(2)); 
    odd1=1 + odd1    //alert(seconds)
    if(odd1<randseed.current){
    initializecanvas()
    drawxy()
    drawLine({ x:dx, y: dy, x1: px.current, y1: py.current}, { color: 'blue', width: 2 });
    
    
    odd=(150-ny)*0.2/30
    odd=Number((odd).toFixed(2)); 
    odd=1 + odd +'X'
    //setcodd(odd)
    codd.current=odd
    writeText({ text: odd, x: px.current, y: ny});
    px.current=px.current+1
    py.current=py.current-1
    //let yy=dy1-10
    //let xx=dx1+10
    //setdy1(yy)
    //setdx1(xx)
    }
    else{

        initializecanvas()
        drawxy()
        drawLine({ x:dx, y: dy, x1: px.current, y1: py.current}, { color: 'red', width: 2 });
        
        writeText({ text: "Busted at " + randseed.current, x: px.current, y: ny});
        stopCounter()
    }
  }

  const writeText = (info, style = {}) => {
    const { text, x, y } = info;
    const { fontSize = 12, fontFamily = 'Arial', color = 'black', textAlign = 'left', textBaseline = 'top' } = style;
 
    ctx.beginPath();
    ctx.font = fontSize + 'px ' + fontFamily;
    ctx.textAlign = textAlign;
    ctx.textBaseline = textBaseline;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
    ctx.stroke();
  }
 
  return (
    <div className="App">
      <h3>Gaming</h3>
      <canvas ref={canvas} width={300}  height={200}></canvas>
     
    </div>
  );
}
 
export default Line1;
