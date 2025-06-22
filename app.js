let button=document.querySelector('#roll');
let dice=document.querySelector('#dice');
let hist=document.querySelector('#history');
let span=document.querySelector('span');

let roll=1;

document.addEventListener('keydown',(e)=>{
    if(e.code=="Enter"){


    dice.classList.add("roll-animation");

    setTimeout(()=>{
        dice.classList.remove('roll-animation');
    },1000)
   rolldice();
    }
}
 ) ;

function rolldice(){
    let num=Math.floor((Math.random()*6 )+1);
   dice.innerHTML=`&#${9855+num}`;
   console.log(num)
   let li=document.createElement('li');
   li.innerHTML=`Roll ${roll}: <span>&#${9855+num} </span>`;
   hist.appendChild(li);
   roll++;
}



button.addEventListener('click',()=>{

    dice.classList.add("roll-animation");

    setTimeout(()=>{
        dice.classList.remove('roll-animation');
    },1000)
   rolldice();
   
 

})


