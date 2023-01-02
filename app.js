
let broj= 8;
let size = 16;
const table = document.querySelector('#content .nested')


function maja(table,broj){
    //Calculate and makes grids
    table.style.gridTemplateColumns = "repeat("+broj+" ,auto)";

    size = Math.pow(broj,2);

    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    for (let i=0; i<size; i++){
        const box = document.createElement('p');
        box.classList = 'p line'
        table.appendChild(box);
    }

    //Listen all grids and when drag-on it changes color
    let p = document.querySelectorAll('#content .nested .p')
    Array.from(p).forEach(function(x){
        x.addEventListener("dragenter",function(y){
            x.style.backgroundColor = color;
        });
    });

}

//Makes default grid when page load
maja(table,broj,size);

//Changing Grids Size by taking value from input-range
const range = document.querySelector('#input-range');
range.addEventListener('change',function(){
    maja(table,this.value);
})


//Changes Grids Color by taking value from input-color
let color="black";
const colorPicker = document.querySelector('#input-color'); 
    colorPicker.addEventListener('change', function() {
        let aa = this.value;
        color = this.value;
        table.addEventListener('dragenter',function(){
            color = aa;
        });
    });

//This Erase block (color = white)
const eraser = document.querySelector('.picker .Eraser')
eraser.addEventListener('click',function(){
    color = "white";
    table.addEventListener('dragenter',function(){
        color = "white";
    });
});

//Random Color Generator
const rainbow = document.querySelector('.picker .rainbow');
rainbow.addEventListener('click',function(){
    color = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + color;
    table.addEventListener('dragenter',function(){
        color = Math.floor(Math.random()*16777215).toString(16);
        color = "#" + color;
    });
});

//Remove and Add Border Lines
const borderLines = document.querySelector('.border-lines .lines');
borderLines.addEventListener('click' ,function (e) {
    
        for(const child of table.children){
            if(child.className == "p line"){
                child.classList.remove("line");
                borderLines.innerHTML = "Add Border Lines"
            }else{
                child.classList.add("line");
                borderLines.innerHTML = "Remove Border Lines"
            }
            
        };
});
