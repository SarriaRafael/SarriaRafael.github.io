// primer grupo
const slider = document.querySelector("#deslizador");
let seccion = document.querySelectorAll(".seccion");
let ultimaSeccion = seccion[seccion.length -1];

const btnLeft = document.querySelector("#izquierdo");
const btnRigth = document.querySelector("#derecho");

// segundo grupo
const slider2 = document.querySelector("#deslizador2");
let seccion2 = document.querySelectorAll(".seccion2");
let ultimaSeccion2 = seccion2[seccion2.length -1];

const btnLeft2 = document.querySelector("#izquierdo2");
const btnRigth2 = document.querySelector("#derecho2");

// iniciando
slider.insertAdjacentElement('afterbegin', ultimaSeccion);
slider2.insertAdjacentElement('afterbegin', ultimaSeccion2);

function adelante(){
    let elPrimero = document.querySelectorAll(".seccion")[0]  ;    
    slider.style.marginLeft = "-200%";     
    slider.style.transition = "all 3s"  ;
    setTimeout(function(){
        slider.style.transition = "none" ;
        slider.insertAdjacentElement( 'beforeend', elPrimero) ;
        slider.style.marginLeft = "-100%";

    },3000);
};

function atras(){
    let auxiliar = document.querySelectorAll(".seccion");
    let ultimo = auxiliar[auxiliar.length - 1];
    slider.style.marginLeft = "0%";     
    slider.style.transition = "all 0.7s" ;
    setTimeout(function(){
        slider.style.transition = "none" ;
        slider.insertAdjacentElement( 'afterbegin', ultimo) ;
        slider.style.marginLeft = "-100%";
    },1000);
}


function adelante2(){
    let elPrimero = document.querySelectorAll(".seccion2")[0]  ;    
    slider2.style.marginLeft = "-200%";     
    slider2.style.transition = "all 3s"  ;
    setTimeout(function(){
        slider2.style.transition = "none" ;
        slider2.insertAdjacentElement( 'beforeend', elPrimero) ;
        slider2.style.marginLeft = "-100%";

    },3000);
};

function atras2(){
    let auxiliar = document.querySelectorAll(".seccion2");
    let ultimo = auxiliar[auxiliar.length - 1];
    slider2.style.marginLeft = "0%";     
    slider2.style.transition = "all 1s" ;
    setTimeout(function(){
        slider2.style.transition = "none" ;
        slider2.insertAdjacentElement( 'afterbegin', ultimo) ;
        slider2.style.marginLeft = "-100%";
    },1000);
}

//botones

btnRigth.addEventListener('click', function(){adelante()});

btnLeft.addEventListener('click', function(){atras()});

btnRigth2.addEventListener('click', function(){adelante2()});

btnLeft2.addEventListener('click', function(){atras2()});

setInterval(function(){
    adelante()
},5000);


setInterval(function(){
    atras2()
},3000);


