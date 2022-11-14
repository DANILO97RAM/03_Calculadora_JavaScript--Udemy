//  Properties Object Calculator
var p = {
  // save keys
  teclas: document.querySelectorAll('#calculadora ul li'),
  // acciones de los botones
  accion: null,
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
  // event captura todo las accion del click. el metodo target selecciona
  // el elemento, y desde target, llamamos la clase.
  oprimirTecla: function(event){
    p.accion = (event.target.getAttribute('class'));
    // resolver todos los problemas con teclado y mouse
    m.calculadora(p.accion)
  },

  calculadora: function(accion){
    switch(accion){
      case 'numero':
        console.log('numero');
        break
      case 'oper':
        console.log('operacion');
        break
      case 'decimal':
        console.log('decimal');
        break
      case 'resultado':
        console.log('resultado');
    }
  }

}

// inicializador de la calculadora
m.inicio();