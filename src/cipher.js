const cipher = {

  encode: function( shiftInput, claveMayuscula){
    let resultado = "";
    shiftInput=(shiftInput % 26 + 26) % 26;
    for (let i=0; i < claveMayuscula.length; i++) {
      let formula = (claveMayuscula.charCodeAt(i)-65+shiftInput)%26+65;
      resultado += String.fromCharCode(formula)
    }
      //console.log(resultado)
      return resultado;
     
  },
  decode: function(shiftInput, claveMayuscula){
    let resultado = "";
    shiftInput=(shiftInput % 26 - 26) % 26;
    for (let i=0; i <claveMayuscula.length; i++) { 
      let formula = (claveMayuscula.charCodeAt(i)-65-shiftInput)%26+65;
      resultado += String.fromCharCode(formula)
    }
    //console.log(resultado)
    return resultado;
  },

};

export default cipher;