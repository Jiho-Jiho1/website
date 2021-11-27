var RequestAnimFrame = window.requestAnimationFrame || 
                window.mozRequestAnimationFrame || 
                window.webkitRequestAnimationFrame || 
                window.msRequestAnimationFrame; 
var canvas; 
var canvasContext; 
var startTime; 
 
function Initialise() 
{ 
	canvas = document.getElementById("cvsGame"); 
  canvasContext = canvas.getContext("2d"); 
	if (canvas.getContext) 
  { 
  		startTime = Date.now(); 
  	  ResizeCanvas(); 
    	GameLoop(); 
  } 
} 
 
function ResizeCanvas() 
{ 
  canvas.width = window.innerWidth; 
  canvas.height = window.innerHeight; 
} 
 
function GameLoop() 
{ 
    var currentTime = Date.now(); 
    var delta = (currentTime - startTime)/1000; 
    startTime = currentTime; 
    Update(delta); 
    Render(); 
     
    RequestAnimFrame(GameLoop); 
} 
 
function Update(delta) 
{ 
 
} 
 
function Render() 
{ 
	canvasContext.clearRect(0, 0, canvas.width, canvas.height); 
   
  canvasContext.beginPath(); 
  canvasContext.arc(100, 75, 50, 0, 2 * Math.PI); 
  canvasContext.stroke(); 
}