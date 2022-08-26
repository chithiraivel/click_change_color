var code = document.querySelector('.code');
var btn = document.querySelector('button');

var array = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

btn.addEventListener("click", function () {

        var hex = '#';

        for (let i = 0; i < 6; i++) {
            var index = Math.floor(Math.random() * array.length);
            hex += array[index];
        }

        code.textContent = hex;
        document.body.style.backgroundColor = hex;


    })




