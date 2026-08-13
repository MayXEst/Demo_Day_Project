// Hello
const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const NameTag = document.getElementById("our_names")
const NameText = document.getElementById("name_Text");
let nameArray = ["Milo Hanff", "Anant Zope", "Maycol Lluberes", "Leslie Morgan"];
let counter = 0;

function updateDisplay(){
    NameTag.innerHTML = nameArray[counter];
    setText();  
}

updateDisplay();

leftArrow.addEventListener("click", function(){
    NameTag.innerHTML = nameArray[counter];
    counter --;
    if(counter < 0){
        counter = 3;
    }
    updateDisplay();
})

rightArrow.addEventListener("click", function(){
    NameTag.innerHTML = nameArray[counter];
    counter ++;
    if(counter > 3){
        counter = 0;
    }
    updateDisplay();
})



function setText(){
    if(counter == 0){
        NameText.textContent = "This is Milo"
    }
    else if(counter == 1){
        NameText.textContent = "This is Anant"
    }
    else if(counter == 2){
        NameText.textContent = "This is Maycol"
    }
    else if(counter == 3){
        NameText.textContent = "This is Leslie"
    }
}
