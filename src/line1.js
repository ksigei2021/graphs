import React, { useRef, useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';


function MyTimer({ expiryTimestamp}) {
    const canvas = useRef();
    let ctx = null;

    let odd=150
    let odd1=0
    let r=0
    const codd = useRef(1.3);
    const coddcal = useRef(220);
    const coddv = useRef(0);
    const pcounter=useRef(10.5);
    const px = useRef(25);
    const py = useRef(220);
    const px1 = useRef(25);
    const py1 = useRef(220);
    const interval = useRef(null)
    const ptime = useRef(0)
    const running=useRef(false)
    const timerinterval=useRef(120)
    const amount = useRef(0)
    const bet = useRef(16)
    const betstatus=useRef(false)
    const pwin = useRef(0)
    const playstatus= useRef(false)
    const gmess=useRef('Not Running')
    

    const {
      seconds,
      minutes,
      hours,
      days,
      isRunning,
      start,
      pause,
      resume,
      restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
    const starttimer=()=>{
        running.current=true
        interval.current = setInterval(() => {
          if(playstatus)
            drawlvline()
            gmess.current="Running"
        }, timerinterval.current)
      }

      const stoptimer=()=>{
        running.current=false
        playstatus.current=false
        gmess.current="Not Running"
        clearInterval(interval.current);
      }
    const initializecanvas=()=>{
        const canvasEle = canvas.current;
        //canvasEle.width = canvasEle.clientWidth;
        //canvasEle.height = canvasEle.clientHeight;
        // get context of the canvas
        ctx = canvasEle.getContext("2d");
        canvascolor()
      }

      const canvascolor=()=>{
        ctx.beginPath();
        ctx.rect(0, 0, 400, 250);
        ctx.fillStyle = "grey";
        ctx.fill();
      }

      const drawxy=()=>{
        drawLine({ x:25, y: 0, x1: 25, y1: 220}, { color: 'green', width: 2 });
        drawLine({ x:25, y: 220, x1: 375, y1: 220 }, { color: 'green', width: 2});
        //y labels
        writeText({ text: '2.0X', x: 0, y: 180 });
        writeText({ text: '3.0X', x: 0, y: 140 });
        writeText({ text: '4.0X', x: 0, y: 100 });
        writeText({ text: '5.0X', x: 0, y: 60 });
        writeText({ text: '6.0X', x: 0, y: 20 });
        //x labels
        writeText({ text: '2', x: 50, y: 230 });
        writeText({ text: '4', x: 100, y: 230 });
        writeText({ text: '6', x: 150, y: 230 });
        writeText({ text: '8', x: 200, y: 230});
        writeText({ text: '10', x: 250, y: 230});
        writeText({ text: '12', x: 300, y: 230});
    
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

      const writeText1 = (info, style = {}) => {
        const { text, x, y } = info;
        const { fontSize = 25, fontFamily = 'Arial', color = 'red', textAlign = 'left', textBaseline = 'top' } = style;
     
        ctx.beginPath();
        ctx.font = fontSize + 'px ' + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
      }
    
      const writeText2 = (info, style = {}) => {
        const { text, x, y } = info;
        const { fontSize = 18, fontFamily = 'Arial', color = 'yellow', textAlign = 'left', textBaseline = 'top' } = style;
     
        ctx.beginPath();
        ctx.font = fontSize + 'px ' + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
      }
      const writeText3 = (info, style = {}) => {
        const { text, x, y } = info;
        const { fontSize = 18, fontFamily = 'Arial', color = 'white', textAlign = 'left', textBaseline = 'top' } = style;
     
        ctx.beginPath();
        ctx.font = fontSize + 'px ' + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
      }
      const writeText4 = (info, style = {}) => {
        const { text, x, y } = info;
        const { fontSize = 25, fontFamily = 'Arial', color = 'Orange', textAlign = 'left', textBaseline = 'top' } = style;
     
        ctx.beginPath();
        ctx.font = fontSize + 'px ' + fontFamily;
        ctx.textAlign = textAlign;
        ctx.textBaseline = textBaseline;
        ctx.fillStyle = color;
        ctx.fillText(text, x, y);
        ctx.stroke();
      }
      const getRandom=(min, max) =>{
        return Math.random() * (max - min) + min;
      }

      const getodd=()=>{
        codd.current=Number(getRandom(1.3,15).toFixed(2));
        
    }

    const drawlvline=()=>{
        

        

        if((coddv.current<codd.current) && (coddv.current<bet.current)){
        initializecanvas()
        drawxy()
        if(playstatus){
        drawLine({ x:px.current, y: py.current, x1: px1.current, y1: py1.current}, { color: 'blue', width: 2 });
        coddv.current=coddv.current+0.05
        Number(coddv.current.toFixed(2))
        let modd= Number(coddv.current.toFixed(2)) + "X"
        writeText2({ text: modd, x: 150, y: 140});
        px1.current=px1.current+5
        py1.current=py1.current-2
        //let yy=dy1-10
        //let xx=dx1+10
        //setdy1(yy)
        //setdx1(xx)
        }
        }
        else{

    
            initializecanvas()
            drawxy()
            //drawLine({ x:dx, y: dy, x1: px.current, y1: py.current}, { color: 'red', width: 2 });
            if (running.current && coddv.current>codd.current){
            writeText1({ text: "Busted at " + codd.current + "X", x: 100, y: 70});
            playstatus.current=false
            
            }
            if(running.current && coddv.current>bet.current && betstatus.current){
                let won=bet.current * amount.current
            writeText4({ text: "You Won  KES " + won , x: 100, y: 70});
            playstatus.current=false
            
            
            
            

            }
            if(!running){
            writeText3({ text: "Game starts in :" + pcounter.current , x: 100, y: 70});
                py1.current=220
                px.current=25
                playstatus.current=false
                coddv.current=16
            }
            
        }
      }

      useEffect(() => {
        initializecanvas()
        drawxy()
        //startCounter()
      }, []);

      if((seconds>=20 && seconds<=29) || (seconds>=50 && seconds<=59)){
        stoptimer()
        initializecanvas()
        drawxy()
        writeText3({ text: "Game starts in :" + pcounter.current , x: 100, y: 70});
        pcounter.current=pcounter.current-0.5
        ptime.current=0
        py1.current=220
        px.current=25
        playstatus.current=false
        coddv.current=16

      }
      if((seconds==19 ) || (seconds==49 )){
        pcounter.current=10.5
        coddv.current=1.0
        initializecanvas()
        drawxy()
        getodd()
        py1.current=220
        px1.current=25
        stoptimer()
        timerinterval.current=Math.ceil(120*15/codd.current)
        playstatus.current=false

      }

      if((seconds==59 ) || (seconds==29 )){
        amount.current=0
        bet.current=16
        betstatus.current=false
        pwin.current=0
        playstatus.current=false
      }

      if((seconds==18) || (seconds==48)){
        playstatus.current=true
        starttimer()
      }


     

      const handleamount=(e)=>{
            amount.current=(e.target.value)
            if(amount.current>=5)
            r=0
            else
            pwin.current=0
      }
      
      const handleodd=(e)=>{
            if(e.target.value>=1.3){
            bet.current=(e.target.value)
            if(amount.current>=5)
            r=0
            else
            pwin.current=0
            }
            else{
            bet.current=16
            pwin.current=0
            }
      }

      const handlebet=()=>{
        if(betstatus.current==false){
        if(amount.current>=5 && bet.current>=1.3){
            betstatus.current=true
            pwin.current=amount.current*bet.current

        }
        else
        {
            pwin.current=0
        }
    }
      }

  
    return (
      <div >
        <div className='card'>
        <canvas ref={canvas} width={400}  height={250} style={{margin:10}}></canvas>
        </div>
        <br/>
        {running.current ?
        <div></div>:
        <div className='card'>
        <label>Amount</label>
        <input type='number' onChange={handleamount} className='myinput'/>
        <label>Autocash Out X(1.3-15)</label>
        <input type='number' onChange={handleodd} className='myinput'/>
        <br/>
        
        <button onClick={handlebet} className='button'>Place Bet</button>
        <br/>
        <label>Potential  win KES {pwin.current}</label>
        </div>}
        
        
      </div>
    );
  }
  

export const Line1 = () => {

    const canvas = useRef();
    let ctx = null;
    const time = new Date();
    time.setSeconds(time.getSeconds() + 6000); // 10 minutes timer
    
    return (
      <div>
        <MyTimer expiryTimestamp={time}/>
      </div>
    );
}
