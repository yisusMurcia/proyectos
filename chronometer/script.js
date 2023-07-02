let chronometer;
let msecHTML= document.getElementById("msec");
let secHTML= document.getElementById("sec");
let minHTML= document.getElementById("min");
let increase= (itemHTML, max)=>{;
    let itemToIncrease= +itemHTML.innerHTML+1;
    if(itemToIncrease== max){
        itemToIncrease= "00";
    };
     return itemToIncrease;
};
let increaseMiliseconds= ()=>{
    let msec= increase(msecHTML, 100);
    if (msec== "00"){
        increaseSeconds();
    };
    msecHTML.innerHTML= msec;

};
let increaseSeconds=()=>{
    let sec= increase(secHTML, 60);
    if (sec== "00"){
        increaseMinuts();
    };
    secHTML.innerHTML= sec;
};
let increaseMinuts=()=>{
    let min= increase(minHTML, 60);
    minHTML.innerHTML= min;
};
let stop=()=>{
    clearInterval(chronometer);
};
let buttons= document.getElementsByTagName("button");
buttons[0].addEventListener("click", ()=>{
    if (buttons[0].innerText== "Pausar"){
        stop();
        return buttons[0].innerText= "Continuar";
    };
    chronometer= setInterval(increaseMiliseconds, 10);
    buttons[0].innerText= "Pausar";
});
buttons[1].addEventListener("click", ()=>{
    stop();
    msecHTML.innerHTML= "00";
    secHTML.innerHTML= "00";
    minHTML.innerHTML= "00";
    buttons[0].innerText= "Iniciar";
})