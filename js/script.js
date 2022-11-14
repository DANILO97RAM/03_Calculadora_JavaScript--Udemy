//  Properties Object Calculator
var p = {
  // save keys
  teclas: document.querySelectorAll('#calculadora ul li'),
  // acciones de los botones
  accion: null,
  digito: null,
  // contador signos operaciones para no mostrar repetidos
  cantidadSignos: 0,
  operaciones: document.querySelector('#operaciones'),
}

//  Methods Object Calculator
var m = {
  // start calculator logic
  inicio: function(){
    for (var i=0; i< p.teclas.length; i++){
      // cuando se haga click, entonces:
      p.teclas[i].addEventListener('click',m.oprimirTecla)
    }
  },
  // event captura todo las accion del click. El metodo target selecciona
  // el elemento, y desde target, llamamos la clase.
  oprimirTecla: function(event){
    p.accion = (event.target.getAttribute('class'));
    p.digito = event.target.innerHTML; //capturar el contenido html   
    
    // resolver todos los problemas con teclado y mouse
    m.calculadora(p.accion, p.digito)
  },

  calculadora: function(accion, digito){
    switch(accion){
      case 'numero':
        p.cantidadSignos = 0;
        if (p.operaciones.innerHTML == 0){
          p.operaciones.innerHTML = digito;  
        } else{
          p.operaciones.innerHTML += digito;
        }
        break
      case 'oper':
        //  cartucho de signos, cuantificar canridad de signos
        p.cantidadSignos++
        if (p.cantidadSignos == 1){
          // pregunta para no poner signo de operacion cuando haya un cero
          if (p.operaciones.innerHTML == 0){
            p.operaciones = 0;
          } else { //si es diferente de cero, agrega el signo de operacion
            p.operaciones.innerHTML += digito;
          }

         
        }
        break
      case 'decimal':
        console.log('decimal');
        break
      case 'resultado':
        console.log('resultado');
        break
    }
  },

  borrarCalculadora: function(){
    p.operaciones.innerHTML = 0;
  }

}

// inicializador de la calculadora
m.inicio();

