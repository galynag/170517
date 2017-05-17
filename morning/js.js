function XXX(event) {
    document.querySelector('.task1-p').innerHTML= event.offsetX;
};
function imgImg2() {
    document.querySelector('.task2').style.background= 'url(img/img2.png) no-repeat';
    document.querySelector('.task2').style.backgroundSize = 'cover';
};
function imgImg1() {
    document.querySelector('.task2').style.background= 'url(img/img1.png) no-repeat';
    document.querySelector('.task2').style.backgroundSize = 'cover';
};
var sectionDiv300 = document.querySelector('#div300');
for (var i=0; i<=300; i++) {
    var div300 = document.createElement('div');
    div300.className = 'div300';
    sectionDiv300.appendChild(div300);
};
var div300_n = document.getElementsByClassName('div300');
function borderR(event) {
    this.style.borderRadius='50%';
    this.style.background='red';
};
var img12345 = document.querySelectorAll('.task4-img');
var divTask4 =  document.querySelector('div.task4');
function backgroundImg(event) {
    divTask4.style.background='url('+this.src+') no-repeat';
    divTask4.style.backgroundSize = 'contain';
};
var counter=50;
function down(event) {
    counter=counter+100;
    document.querySelector('.task5').style.top=counter+'px';
}
document.querySelector('.task1').addEventListener('mousemove',XXX);
document.querySelector('.task2').addEventListener('dblclick',imgImg2);
document.querySelector('.task2').addEventListener('click',imgImg1);
for (var i=0; i<div300_n.length; i++) {
    div300_n[i].addEventListener('mouseover',borderR);
};
for (var i=0; i<img12345.length; i++) {
    img12345[i].addEventListener('click',backgroundImg);
};
document.querySelector('.task5').addEventListener('click',down);



