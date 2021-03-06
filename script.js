var reset=document.querySelector('.reset');
var result1=document.querySelector('#result1');
var result2=document.querySelector('#result2');
var turn=document.getElementsByClassName('turn')[0];
var count=0;
var card=document.getElementsByClassName('card');
var audio=new Audio('beep.wav');
const check_status=()=>{
    var win=[
        [0,1,2,16,9,0,1],
        [3,4,5,49,9,0,1],
        [6,7,8,82,9,0,1],
        [0,3,6,9,16,0,2],
        [1,4,7,9,49,0,2],
        [2,5,8,9,82,0,2],
        [0,4,8,48,8,45,1],
        [2,4,6,48,8,-45,1]
    ];
    win.forEach(e=>{
        if((card[e[0]].innerHTML==card[e[1]].innerHTML&&card[e[1]].innerHTML==card[e[2]].innerHTML)&&(card[e[0]].innerHTML!="")){
            if(e[6]==1){
                result1.style.top=`${e[3]}%`;
                result1.style.left=`${e[4]}%`;
                result1.style.transform=`rotate(${e[5]}deg)`;
                result1.style.width='29vw';
            }
            else{
                result2.style.top=`${e[3]}%`;
                result2.style.left=`${e[4]}%`;
                result2.style.transform=`rotate(${e[5]}deg)`;
                result2.style.height='29vw';
            }
            if(card[e[0]].innerHTML=='X'){
                turn.innerHTML="X Won";
            }
            else{
                turn.innerHTML="O Won";
            }
        }
    })
}

Array.from(card).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML==''){
            audio.play();
            if(count%2==0){
                element.innerHTML='X';
                turn.innerHTML="O's Turn"
            }
            else{
                element.innerHTML='O';
                turn.innerHTML="X's Turn"
            }
            check_status();
            count++;
        }
    })
});

reset.addEventListener('click',function(event){
    Array.from(card).forEach(element=>{
        element.innerHTML='';
    });
    result1.style.width="0"; 
    result2.style.height="0";
    result1.style.transform='rotate(0)'
    turn.innerHTML="X's Turn";
    count=0;
});
