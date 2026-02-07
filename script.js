
const noMessages = [
"Are you sure? 😢",
"Really no? 💔",
"Please reconsider 🥺",
"It will hurt me 😭",
"My heart is breaking 💗",
"Last chance 😞",
"Baby please 😍"
];

let noCount = 0;

function selectOption(option){

if(option === 'yes'){
flashRainbowColors(function(){
document.getElementById('question').style.display='none';
displayCatHeart();
});
}

if(option === 'no'){
document.getElementById("no-button").innerText =
noMessages[noCount % noMessages.length];
noCount++;
}

}

/* rainbow */

function flashRainbowColors(cb){
let colors=['#ff9a9e','#fad0c4','#ffd1ff','#ffc3a0'];
let i=0;
let t=setInterval(()=>{
document.body.style.background=colors[i];
i=(i+1)%colors.length;
},200);

setTimeout(()=>{
clearInterval(t);
if(cb)cb();
},1500);
}

/* cat */

function displayCat(){
let img=new Image();
img.src='cat.gif';
document.getElementById('image-container').appendChild(img);
}

function displayCatHeart(){
document.getElementById('image-container').innerHTML='';
let img=new Image();
img.src='cat-heart.gif';
document.getElementById('image-container').appendChild(img);
document.getElementById('options').style.display='none';
}

displayCat();

/* NO RUN */

const noBtn=document.getElementById("no-button");

noBtn.addEventListener("click",()=>{

let x=Math.random()*(window.innerWidth-noBtn.offsetWidth);
let y=Math.random()*(window.innerHeight-noBtn.offsetHeight);

noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});


const yesBtn = document.getElementById("yes-button");

/* FLOWERS RAIN */

yesBtn.addEventListener("click", () => {

    for(let i=0;i<40;i++){
        createFlower();
    }

});

function createFlower(){

    const flower = document.createElement("div");
    flower.innerHTML = "❤️";

    flower.style.position = "fixed";
    flower.style.left = Math.random()*100 + "vw";
    flower.style.top = "-30px";
    flower.style.fontSize = Math.random()*20 + 20 + "px";
    flower.style.animation = "fall 3s linear";

    document.body.appendChild(flower);

    setTimeout(()=>{
        flower.remove();
    },3000);
}

/* animation */

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
    to{
        transform:translateY(110vh) rotate(360deg);
        opacity:0;
    }
}`;
document.head.appendChild(style);
function displayCatHeart(){

document.getElementById('image-container').innerHTML='';

let img=new Image();
img.src='cat-heart.gif';
document.getElementById('image-container').appendChild(img);

document.getElementById('options').style.display='none';

/* SHOW MESSAGE AFTER GIF */

setTimeout(()=>{

    const msg=document.createElement("h2");
    msg.innerHTML="Yay! I knew you’d say YES ❤️";
    msg.style.color="#ff3b6b";
    msg.style.marginTop="20px";

    document.getElementById('container').appendChild(msg);

},1500);

}
