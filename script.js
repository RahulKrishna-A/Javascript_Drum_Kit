
const ab = document.querySelectorAll("div");
console.log(ab);
function sounds(e){
    const audio = document.querySelector(`audio[data-sound="${e.keyCode}"]`)

    const divs = document.querySelector(`div[data-key="${e.keyCode}"]`)

    if(audio===null){
       return;
    }
    audio.currentTime=0;
    divs.classList.add("trnsfrm");
    audio.play();
    setTimeout(function (){
        divs.classList.remove("trnsfrm");
    },70);
}


window.addEventListener("keydown", sounds);