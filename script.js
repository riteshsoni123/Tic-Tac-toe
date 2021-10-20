
var card=new Array(3);
for(var i=0;i<3;i++){
    card[i]=new Array(3);
}

card[0][0]=document.querySelector('#card00');
card[0][1]=document.querySelector('#card01');
card[0][2]=document.querySelector('#card02');
card[1][0]=document.querySelector('#card10');
card[1][1]=document.querySelector('#card11');
card[1][2]=document.querySelector('#card12');
card[2][0]=document.querySelector('#card20');
card[2][1]=document.querySelector('#card21');
card[2][2]=document.querySelector('#card22');
var reset=document.querySelector('.reset');
var result1=document.querySelector('#result1');
var result2=document.querySelector('#result2');
var count=0;

function check_status(){
    if((card[0][0].innerHTML==card[0][1].innerHTML&&card[0][1].innerHTML==card[0][2].innerHTML)&&card[0][0].innerHTML!=''){
        result1.style.top='16%';
        result1.style.left='1%';
        myMoveres1();
    }
    else if((card[1][0].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[1][2].innerHTML)&&card[1][0].innerHTML!=''){
        result1.style.top='48%';
        result1.style.left='1%';
        myMoveres1();
    }
    else if((card[2][0].innerHTML==card[2][1].innerHTML&&card[2][1].innerHTML==card[2][2].innerHTML)&&card[2][0].innerHTML!=''){
        result1.style.top='81%';
        result1.style.left='1%';
        myMoveres1();
    }
    else if((card[0][0].innerHTML==card[1][0].innerHTML&&card[1][0].innerHTML==card[2][0].innerHTML)&&card[0][0].innerHTML!=''){
        result2.style.top='1%';
        result2.style.left='15%';
        myMoveres2();
    }
    else if((card[0][1].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][1].innerHTML)&&card[0][1].innerHTML!=''){
        result2.style.top='1%';
        result2.style.left='48%';
        myMoveres2();
    }
    else if((card[0][2].innerHTML==card[1][2].innerHTML&&card[1][2].innerHTML==card[2][2].innerHTML)&&card[0][2].innerHTML!=''){
        result2.style.top='1%';
        result2.style.left='81%';
        myMoveres2();
    }
    else if((card[0][0].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][2].innerHTML)&&card[0][0].innerHTML!=''){
        result1.style.transform='rotate(45deg)';
        result1.style.top='48%';
        result1.style.left='0%';
        myMoveres1();
    }
    else if((card[0][2].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][0].innerHTML)&&card[0][2].innerHTML!=''){
        result1.style.transform='rotate(-45deg)';
        result1.style.top='48%';
        result1.style.left='0%';
        myMoveres1();
    }
}

function change(i,j){
    if(card[i][j].innerHTML==''){
        if(count%2==0){
            card[i][j].innerHTML='X';
        }
        else{
            card[i][j].innerHTML='O';
        }
        count++;
    }
}

card[0][0].addEventListener('click', function (event) {
    change(0,0);
    check_status();
});
card[0][1].addEventListener('click', function (event) {
    change(0,1);
    check_status();
});
card[0][2].addEventListener('click', function (event) {
    change(0,2);
    // console.log('bazinga');
    check_status();
});
card[1][0].addEventListener('click', function (event) {
    change(1,0);
    check_status();
});
card[1][1].addEventListener('click', function (event) {
    change(1,1);
    check_status();
});
card[1][2].addEventListener('click', function (event) {
    change(1,2);
    check_status();
});
card[2][0].addEventListener('click', function (event) {
    change(2,0);
    check_status();
});
card[2][1].addEventListener('click', function (event) {
    change(2,1);
    check_status();
});
card[2][2].addEventListener('click', function (event) {
    change(2,2);
    check_status();
});


reset.addEventListener('click',function(event){
    card[0][0].innerHTML="";
    card[0][1].innerHTML="";
    card[0][2].innerHTML="";
    card[1][0].innerHTML="";
    card[1][1].innerHTML="";
    card[1][2].innerHTML="";
    card[2][0].innerHTML="";
    card[2][1].innerHTML="";
    card[2][2].innerHTML="";
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