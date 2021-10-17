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


card00.addEventListener('click', function (event) {
    card00.innerHTML='X';
});
card01.addEventListener('click', function (event) {
    card01.innerHTML='X';
});
card02.addEventListener('click', function (event) {
    card02.innerHTML='X';
});
card10.addEventListener('click', function (event) {
    card10.innerHTML='X';
});
card11.addEventListener('click', function (event) {
    card11.innerHTML='X';
});
card12.addEventListener('click', function (event) {
    card12.innerHTML='X';
});
card20.addEventListener('click', function (event) {
    card20.innerHTML='X';
});
card21.addEventListener('click', function (event) {
    card21.innerHTML='X';
});
card22.addEventListener('click', function (event) {
    card22.innerHTML='X';
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
});