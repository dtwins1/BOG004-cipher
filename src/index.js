import cipher from './cipher.js';

//console.log(cipher);
//const ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//cipher.encode(ABC)

document.getElementById("btnCifrar").addEventListener("click", ()=>{
    const clave= document.getElementById("texto").value
    const claveMayuscula= clave.toUpperCase()
    const shiftInput= document.getElementById("shiftInput").value
    const clavecifrada= cipher.encode(shiftInput, claveMayuscula)
    document.getElementById("resultado").innerText= `su clave es:${clavecifrada}`;
    //console.log(claveMayuscula + "\n"  + shiftInput)
});

//cipher.decode(ABC)

document.getElementById("btnDescifrar").addEventListener("click", ()=>{
    const clave= document.getElementById("texto").value
    const claveMayuscula= clave.toUpperCase()
    const shiftInput= document.getElementById("shiftInput").value
    const clavedescifrada= cipher.decode(shiftInput, claveMayuscula)
    document.getElementById("resultado").innerText= `su palabra ingresada fue:${clavedescifrada}`;
    //console.log(claveMayuscula + "\n"  + shiftInput)
});


