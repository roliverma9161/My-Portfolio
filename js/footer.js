    
const cursor=document.querySelector(".cursor");
const dot=document.querySelector(".cursor-dot");

let mouseX=0;
let mouseY=0;

let cursorX=0;
let cursorY=0;

document.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

dot.style.left=mouseX+"px";
dot.style.top=mouseY+"px";

});


function animate(){

cursorX+=(mouseX-cursorX)*0.14;

cursorY+=(mouseY-cursorY)*0.14;

cursor.style.left=cursorX+"px";
cursor.style.top=cursorY+"px";

requestAnimationFrame(animate);

}

animate();


/* Hover */

document.querySelectorAll("a,button,.tf-btn,input,textarea").forEach(el=>{

el.addEventListener("mouseenter",()=>{

cursor.style.width="70px";
cursor.style.height="70px";
cursor.style.background="rgba(69,231,123,.15)";
cursor.style.borderColor="var(--Primary)";

});

el.addEventListener("mouseleave",()=>{

cursor.style.width="42px";
cursor.style.height="42px";
cursor.style.background="transparent";

});

});


/* Click Effect */

document.addEventListener("mousedown",()=>{

cursor.style.transform="translate(-50%,-50%) scale(.75)";

});

document.addEventListener("mouseup",()=>{

cursor.style.transform="translate(-50%,-50%) scale(1)";

});

