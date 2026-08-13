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
    organizationText.textContent = "NAMI is an organization that is dedicated to building better lives for Americans who are affected by Mental health. This organization offers support groups and education courses on mental health.";
}
else if(counter == 2){
    organizationText.textContent = "AIM is an organization that focuses on funding clinical research and to bridge the gap between research and access to care between kids, teenagers and young adults.";
}

else if(counter == 0){
    organizationText.textContent = "ADAA is an international organization that focuses on improving the diagnosis, treatment, and cure for disorders.";
}
}

