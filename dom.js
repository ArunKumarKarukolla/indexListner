//console.dir(document);
//console.log(document.title);
//console.log(document.URL);
//console.log(document.head)
//console.log(document.all);
//document.all[10].textContent= 'Hello';
//console.log(document.doctype);
//document.all[10].textContent= "Hello";
var headerTitle=document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent='ArunKumar';
headerTitle.style.borderBottom='solid 3px #000';
var header = document.getElementById('main-header');
console.log('headerTitle');
var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.fontWeight='bold';
items[1].style.fontWeight='bold';
items[2].style.fontWeight='bold';
items[3].style.fontWeight='bold';
items[1].style.backgroundColor='green';
items[1].style.color='green';

var items=document.getElementsByClassName('list-group-item');
console.log(items);
items[3].style.visibility="hidden";
//item[3].style.visibility = "visible";


var shapes=document.getElementsByClassName('list1');
console.log(shapes);
shapes[1].style.fontWeight='bold';
shapes[2].style.fontWeight='bold';




var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');

for(var i=0; i<odd.length;i++){
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor='green';
}