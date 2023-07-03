var lampada = window.document.getElementById("lampada")

function quebrada(){
    return lampada.src.indexOf('broken') > -1
}

function ligar(){
    if(!quebrada()){
    lampada.src = 'on.svg'}
}

function desligar(){
    if(!quebrada()){
    lampada.src = 'off.svg'}
}

function quebrar(){
    lampada.src = 'broken.svg'
}

