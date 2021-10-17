
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
var result=document.querySelector('#result');
var count=0;

function check_status(){
    if((card[0][0].innerHTML==card[0][1].innerHTML&&card[0][1].innerHTML==card[0][2].innerHTML)&&card[0][0].innerHTML!=''){
        result.style.transform='rotate(90deg)';
        result.style.top='-125px';
        result.style.left='222px';
    }
    else if((card[1][0].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[1][2].innerHTML)&&card[1][0].innerHTML!=''){
        result.style.transform='rotate(90deg)';
        result.style.top='30px';
        result.style.left='222px';
    }
    else if((card[2][0].innerHTML==card[2][1].innerHTML&&card[2][1].innerHTML==card[2][2].innerHTML)&&card[2][0].innerHTML!=''){
        result.style.transform='rotate(90deg)';
        result.style.top='180px';
        result.style.left='222px';
    }
    else if((card[0][0].innerHTML==card[1][0].innerHTML&&card[1][0].innerHTML==card[2][0].innerHTML)&&card[0][0].innerHTML!=''){

    }
    else if((card[0][1].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][1].innerHTML)&&card[0][1].innerHTML!=''){
        result.style.left='220px';
    }
    else if((card[0][2].innerHTML==card[1][2].innerHTML&&card[1][2].innerHTML==card[2][2].innerHTML)&&card[0][2].innerHTML!=''){
        result.style.left='370px';
    }
    else if((card[0][0].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][2].innerHTML)&&card[0][0].innerHTML!=''){
        result.style.transform='rotate(-45deg)';
        result.style.top='27px';
        result.style.left='222px';
    }
    else if((card[0][2].innerHTML==card[1][1].innerHTML&&card[1][1].innerHTML==card[2][0].innerHTML)&&card[0][2].innerHTML!=''){
        result.style.transform='rotate(45deg)';
        result.style.top='27px';
        result.style.left='222px';
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
    count=0;
});