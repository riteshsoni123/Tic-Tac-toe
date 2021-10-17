var card00=document.querySelector('#card00');
var card01=document.querySelector('#card01');
var card02=document.querySelector('#card02');
var card10=document.querySelector('#card10');
var card11=document.querySelector('#card11');
var card12=document.querySelector('#card12');
var card20=document.querySelector('#card20');
var card21=document.querySelector('#card21');
var card22=document.querySelector('#card22');
var reset=document.querySelector('.reset');
var count=0;


card00.addEventListener('click', function (event) {
    if(card00.innerHTML==''){
        if(count%2==0){
            card00.innerHTML='X';
        }
        else{
            card00.innerHTML='O';
        }
        count++;
    }
});
card01.addEventListener('click', function (event) {
    if(card01.innerHTML==''){
        if(count%2==0){
            card01.innerHTML='X';
        }
        else{
            card01.innerHTML='O';
        }
    }
});
card02.addEventListener('click', function (event) {
    if(card02.innerHTML==''){
        if(count%2==0){
            card02.innerHTML='X';
        }
        else{
            card02.innerHTML='O';
        }
        count++;
    }
});
card10.addEventListener('click', function (event) {
    if(card10.innerHTML==''){
        if(count%2==0){
            card10.innerHTML='X';
        }
        else{
            card10.innerHTML='O';
        }
        count++;
    }
});
card11.addEventListener('click', function (event) {
    if(card11.innerHTML==''){
        if(count%2==0){
            card11.innerHTML='X';
        }
        else{
            card11.innerHTML='O';
        }
        count++;
    }
});
card12.addEventListener('click', function (event) {
    if(card12.innerHTML==''){
        if(count%2==0){
            card12.innerHTML='X';
        }
        else{
            card12.innerHTML='O';
        }
        count++;
    }
});
card20.addEventListener('click', function (event) {
    if(card20.innerHTML==''){
        if(count%2==0){
            card20.innerHTML='X';
        }
        else{
            card20.innerHTML='O';
        }
        count++;
    }
});
card21.addEventListener('click', function (event) {
    if(card21.innerHTML==''){
        if(count%2==0){
            card21.innerHTML='X';
        }
        else{
            card21.innerHTML='O';
        }
        count++;
    }
});
card22.addEventListener('click', function (event) {
    if(card22.innerHTML==''){
        if(count%2==0){
            card22.innerHTML='X';
        }
        else{
            card22.innerHTML='O';
        }
    }
    count++;
});


reset.addEventListener('click',function(event){
    card00.innerHTML="";
    card01.innerHTML="";
    card02.innerHTML="";
    card10.innerHTML="";
    card11.innerHTML="";
    card12.innerHTML="";
    card20.innerHTML="";
    card21.innerHTML="";
    card22.innerHTML="";
    count=0;
});