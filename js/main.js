var texto=document.querySelector('textarea');
var texto2=document.getElementById('texto2');


function encriptar(){
    if(texto.value!=""){
        mostrarTexto();
        
        var textoEncriptado = texto.value
            
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
            return texto2.innerHTML=textoEncriptado;
    }

}

function desEncriptar(){

    if(texto.value!=""){
       
        mostrarTexto();
        var textoDesencriptado = texto.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
        return texto2.innerHTML=textoDesencriptado;
    }

}

function mostrarTexto(){
    
    var figura=document.getElementById("munheco").style.display = "none";
    var encriptador= document.getElementById("encriptador").style.display = "block";

}

function copiarTexto(){
    texto2.select();
    document.execCommand('copy');
    
}
