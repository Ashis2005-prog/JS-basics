//random color generate
//box1=>random number generate from 1 to 99
let box1=document.querySelector("#box1");
box1.addEventListener("mouseenter",function(){
    let rd=Math.floor(Math.random()*100);
    box1.innerHTML=`<h1>${rd}</h1>`;
})
box1.addEventListener("mouseleave",function(){
    box1.innerHTML=`<h1>1</h1>`;
})
//box2=>3 color when hover
let box2=document.querySelector("#box2");
let clr="red";
box2.addEventListener("mouseenter",function(){
    if(clr=="red"){
        box2.style.backgroundColor="red";
        clr="green";
    }
    else if(clr=="green"){
        box2.style.backgroundColor="green";
        clr="blue";
    }
    else{//clr==blue
        box2.style.backgroundColor="blue";
        clr="red";
    }
})
box2.addEventListener("mouseleave",function(){
    box2.style.backgroundColor="white";
})

//box3=>random color generate
let box3=document.querySelector("#box3");
box3.addEventListener("mouseenter",function(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    box3.style.backgroundColor=`rgb(${red},${green},${blue})`;
})
box3.addEventListener("mouseleave",function(){
   box3.style.backgroundColor="white";
})
//box4=>when click on box4 box1,box2 and box3 color change
let box4=document.querySelector("#box4");
box4.addEventListener("click",function(){
    let a=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let c=Math.floor(Math.random()*255);
    box1.style.backgroundColor=`rgb(${a},${b},${c})`;
    let d=Math.floor(Math.random()*255);
    let e=Math.floor(Math.random()*255);
    let f=Math.floor(Math.random()*255);
    box2.style.backgroundColor=`rgb(${d},${e},${f})`;
    let g=Math.floor(Math.random()*255);
    let h=Math.floor(Math.random()*255);
    let i=Math.floor(Math.random()*255);
    box3.style.backgroundColor=`rgb(${g},${h},${i})`;
})
box4.addEventListener("mouseleave",function(){
    box1.style.backgroundColor="white";
    box2.style.backgroundColor="white";
    box3.style.backgroundColor="white";
})

//form 
let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    // event.preventDefault();
    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    alert(`Hi! ${user.value} and your password is set to ${pass.value}`);
})