// HOME 

const OpenNav = document.querySelector(".icon1")
const FermerNav = document.querySelector(".fermer")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", () =>{
    if(PositionMenu <0){
        Menu.classList.add("monter")
    }
})

FermerNav.addEventListener("click", () =>{
    if(PositionMenu <0){
        Menu.classList.remove("monter")
    }
})

// PRODUIT

var MainImg =document.getElementById('MainImg');
var smallimg =document.getElementsByClassName('small-img');

smallimg[0].onclick = function(){
    MainImg.src =smallimg[0].src;
}

smallimg[1].onclick = function(){
    MainImg.src =smallimg[1].src;
}
smallimg[2].onclick = function(){
    MainImg.src =smallimg[2].src;
}

smallimg[3].onclick = function(){
    MainImg.src =smallimg[3].src;
}


