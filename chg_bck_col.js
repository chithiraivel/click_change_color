
var change = document.querySelector('.change');
var btn = document.querySelector('button');

document.body.style.backgroundColor = 'violet'

var array = ['red', 'green', 'blue', 'orange', 'yellow']


btn.addEventListener('click', function () {

    var ran = parseInt(Math.random() * array.length);
    
    document.body.style.backgroundColor = array[ran];
})

