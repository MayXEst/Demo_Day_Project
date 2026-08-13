const leftArrow = document.getElementById("left_arrow");
const rightArrow = document.getElementById("right_arrow");
const organizationText = document.getElementById("text");
const image = document.getElementById("image");
let imageArray = ["NAMI", "AIM", "ADAA"];
let counter = 1;

rightArrow.addEventListener("click", function(){
    image.src = "Images/" + imageArray[counter] + ".png";
    counter ++;
    if(counter > 2){
        counter = 0;
    }
    setText();
})

leftArrow.addEventListener("click", function(){
    image.src = "Images/" + imageArray[counter] + ".png";
    counter --;
    if(counter < 0){
        counter = 2;
    }
    setText();
})

function setText(){

if(counter == 1){
    organizationText.textContent = "This is organization #1";
}
else if(counter == 2){
    organizationText.textContent = "This is organization #2";
}

else if(counter == 0){
    organizationText.textContent = "This is organization #3";
}
}

