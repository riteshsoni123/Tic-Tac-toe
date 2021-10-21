
var reset=document.querySelector('.reset');
var result1=document.querySelector('#result1');
var result2=document.querySelector('#result2');
var count=0;
var card=document.getElementsByClassName('card');
const check_status=()=>{
    var win=[
        [0,1,2,16,1,0,1],
        [3,4,5,48,1,0,1],
        [6,7,8,81,1,0,1],
        [0,3,6,1,15,0,2],
        [1,4,7,1,48,0,2],
        [2,5,8,1,81,0,2],
        [0,4,8,48,0,45,1],
        [2,4,6,48,0,-45,1]
    ];
    win.forEach(e=>{
        if((card[e[0]].innerHTML==card[e[1]].innerHTML&&card[e[1]].innerHTML==card[e[2]].innerHTML)&&(card[e[0]].innerHTML!="")){
            if(e[6]==1){
                result1.style.top=`${e[3]}%`;
                result1.style.left=`${e[4]}%`;
                result1.style.transform=`rotate(${e[5]}deg)`;
                myMoveres1();
            }
            else{
                result2.style.top=`${e[3]}%`;
                result2.style.left=`${e[4]}%`;
                result2.style.transform=`rotate(${e[5]}deg)`;
                myMoveres2();
            }
        }
    })
}

Array.from(card).forEach(element=>{
    element.addEventListener('click',()=>{
        if(element.innerHTML==''){
            if(count%2==0){
                element.innerHTML='X';
            }
            else{
                element.innerHTML='O';
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
    result1.style.display='none';
    result2.style.display='none';
    result1.style.transform='rotate(0)'
    count=0;
});


function myMoveres1() {
    result1.style.width=0+'vw';
    result1.style.display='flex';
    var id = null;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 29) {
            clearInterval(id);
        } 
        else {
            pos++;
            result1.style.width=pos+'vw';
        }
    }
}
function myMoveres2() {
    result2.style.height=0+'vw';
    result2.style.display='flex';
    var id = null;
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 20);
    function frame() {
        if (pos == 29) {
            clearInterval(id);
        } 
        else {
            pos++;
            result2.style.height=pos+'vw';
        }
    }
} 