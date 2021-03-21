
let x = 500;
let y = 500;


let shouldgo = false;
let vx = Math.round(Math.random() * 8); //velocity x
let vy = Math.round(Math.random() * 16); // velocity y
let radius = 50;

let letters = '0123456789ABCDEF';
    let RandomColor = '#';
    for (let i = 0; i < 6; i++) {
      
      RandomColor += letters[Math.floor(Math.random() * 16)];
    }


window.addEventListener("load", () => {
    Load();
});



setInterval(function(){ 
    Clear();
    Add();
}, 10);

function Load(){
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d"); 

    canvas.height = window.innerHeight -40; //1143
    canvas.width = window.innerWidth -40;//2370

   
    Move(c);
    
    
};

function Move(){
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d"); 


    c.beginPath()
    c.arc(x,y,radius,0, 2*Math.PI);
    c.fillStyle = RandomColor;
    c.strokeStyle = "black"
    c.stroke()
    c.fill()
    
};

function Add(){
    if (radius + x > canvas.width) 
                    vx = - vx; 
  
                if (x - radius < 0) 
                    vx = - vx; 
  
                if (y + radius > canvas.height) 
                    vy = - vy; 
  
                if (y - radius < 0) 
                    vy = - vy; 
  
                x = x + vx; 
                y = y + vy; 
    
    Move()
}
function Clear(){
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d"); 

    c.clearRect(0,0,canvas.width,canvas.height)
}