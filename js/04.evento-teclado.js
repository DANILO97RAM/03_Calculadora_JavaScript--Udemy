//  Properties Object Calculator
var p = {
  // save keys
  teclas: document.querySelectorAll('#calculadora ul li'),
  // acciones de los botones
  accion: null,
  digito: null,
  // contador signos operaciones para no mostrar repetidos
  cantidadSignos: 0,
  cantidadDecimal: false,
  // identificar un resultado (signo igual), que me avise, para limpiar el tablero
  resultado: false,
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
  // activar el evento del teclado
  teclado: function(){
    document.addEventListener('keydown',m.oprimir);
    
  },

  oprimir: function(tecla){
    if (tecla.keyCode==48 || tecla.keyCode==96){
      p.accion = 'numero';
      p.digito = 0;
    };
    if (tecla.keyCode==49 || tecla.keyCode==97){
      p.accion = 'numero';
      p.digito = 1;
    }
    if (tecla.keyCode==50 || tecla.keyCode==98){
      p.accion = 'numero';
      p.digito = 2;
    }
    if (tecla.keyCode==51 || tecla.keyCode==99){
      p.accion = 'numero';
      p.digito = 3;
    };
    if (tecla.keyCode==52 || tecla.keyCode==100){
      p.accion = 'numero';
      p.digito = 4;
    }
    if (tecla.keyCode==53 || tecla.keyCode==101){
      p.accion = 'numero';
      p.digito = 5;
    }
    if (tecla.keyCode==54 || tecla.keyCode==102){
      p.accion = 'numero';
      p.digito = 6;
    };
    if (tecla.keyCode==55 || tecla.keyCode==103){
      p.accion = 'numero';
      p.digito = 7;
    } 
    if (tecla.keyCode==56 || tecla.keyCode==104){
      p.accion = 'numero';
      p.digito = 8;
    }
    if (tecla.keyCode==57 || tecla.keyCode==105){
      p.accion = 'numero';
      p.digito = 9;
    }
    if (tecla.keyCode==187 || tecla.keyCode==107){
      p.accion = 'oper';
      p.digito = '+';
    }
    if (tecla.keyCode==189 || tecla.keyCode==109){
      p.accion = 'oper';
      p.digito = '-';
    }
    if (tecla.keyCode==88 || tecla.keyCode==106){
      p.accion = 'oper';
      p.digito = '*';
    }
    if (tecla.keyCode==191){
      p.accion = 'oper';
      p.digito = '/';
    }
    if (tecla.keyCode==190 || tecla.keyCode==110){
      p.accion = 'decimal';
      p.digito = '.';
    }
    if (tecla.keyCode==13){
      p.accion = 'resultado';
    }
    if (tecla.keyCode==8 || tecla.keyCode==46){
        m.borrarCalculadora();
    }
    // console.log('Tecla Press: ',tecla.keyCode);
    m.calculadora(p.accion,p.digito);
  },
  // event captura todo las accion del click. El metodo target selecciona
  // el elemento, y desde target, llamamos la clase.
  oprimirTecla: function(event){
    p.accion = (event.target.getAttribute('class'));
    p.digito = event.target.innerHTML; //capturar el contenido html   
    
    // resolver todos los problemas con teclado y mouse
    m.calculadora(p.accion, p.digito);
    },

  calculadora: function(accion, digito){
    switch(accion){
      case 'numero':
        p.cantidadSignos = 0;
        if (p.operaciones.innerHTML == 0){
          p.operaciones.innerHTML = digito;  
        } else{
          if (p.resultado){
            // si se presiona igual, que se reinicie
            p.resultado = false;
            p.operaciones.innerHTML = digito;
          } else {
            // si no se ha dado igual, que siga agregando
            p.operaciones.innerHTML += digito;
          }
          
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
            // cada que sea un nuevo numero, se habilita el decimal
            p.cantidadDecimal = false;
            // cada que se agregue un signo, se reinicie la cal
            p.resultado = false;
          }

        }
        break
      case 'decimal':
        if (!p.cantidadDecimal){
          p.operaciones.innerHTML += digito;
          p.cantidadDecimal = true;
          p.resultado = false;
        }         
        break
      case 'resultado':
        // todo lo que traiga la caja. eval, desde js 
        p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
        p.resultado = true;
        break
    }
  },

  borrarCalculadora: function(){
    p.operaciones.innerHTML = 0;
  }

}

// inicializador de la calculadora
m.inicio();
m.teclado();